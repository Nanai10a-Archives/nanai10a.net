import { NextPage, GetStaticProps } from "next";
import AppContainer from "../component/AppContainer";
import RenderMarkdown, { Props as RenderMarkdownProps } from "../component/RenderMarkdown";
import fetch from "node-fetch";
import Header from "../component/Header";

import styles from "../styles/index.module.scss";

const Index: NextPage<Props> = (props: Props) => {
  return (
    <AppContainer>
      <Header showArrow={true} showIcon={true} />
      <div className={styles.descriptions_container}>
        {props.descriptionsProps.map((p, i) => {
          return <RenderMarkdown key={i} {...p} />;
        })}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_text}>2021, Nanai10a</div>
      </div>
    </AppContainer>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Index;

type Props = {
  descriptionsProps: Array<RenderMarkdownProps>;
};

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(process.env["API_URL"] ?? "");
  const obj = JSON.parse(await res.text());

  const props: Array<{ markdown: string }> = [];

  obj.descriptions.descriptions.map(({ markdown }: { markdown: string }) =>
    props.push({ markdown }),
  );

  return {
    props: {
      descriptionsProps: props,
    },
  };
};
