import { FC, useEffect, useState } from "react";
import { parse } from "marked";
import { sanitize } from "dompurify";
import { highlightAll } from "highlight.js";
import { icons as feather_icons } from "feather-icons";

// FIXME: base16-PaperColor Dark(自作Theme)
import "highlight.js/styles/railscasts.css";

const RenderMarkdown: FC<Props> = ({ markdown }) => {
  const [contentHtml, setContentHtml] = useState<string | null>(null);
  useEffect(() => {
    setContentHtml(sanitize(parse(markdown)));
  }, [markdown]);

  useEffect(() => {
    highlightAll();
  }, [contentHtml]);

  useEffect(() => {
    document.querySelectorAll("p").forEach((e) => {
      const regex = /:[^: ]+:/;

      if (regex.test(e.innerText)) {
        let rawText = e.innerText;
        while (true) {
          if (!regex.test(rawText)) {
            break;
          }

          regex.exec(rawText)?.forEach((text) => {
            rawText = rawText.replace(text, "");

            e.innerHTML = e.innerHTML.replace(
              text,
              feather_icons[text.replaceAll(":", "")]?.toSvg() ?? text,
            );
          });
        }
      }
    });
  }, [contentHtml]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: contentHtml ?? "please wait... compiling markdown..." }}
    />
  );
};

export default RenderMarkdown;

export type Props = {
  markdown: string;
};
