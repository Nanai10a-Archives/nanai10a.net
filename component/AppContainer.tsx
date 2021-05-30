import { FC, useMemo } from "react";
import NextHead from "next/head";

import styles from "../styles/components/AppContainer.module.scss";

const AppContainer: FC<Props> = ({ title, forceTitle, children }) => {
  const currentTitle = useMemo(() => {
    if (!title) {
      return "Nanai10a.net";
    }

    if (forceTitle) {
      return title;
    }

    return `Nanai10a.net - ${title}`;
  }, [title, forceTitle]);

  return (
    <>
      <NextHead>
        <title>{currentTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </NextHead>
      <div className={styles.app_container}>{children}</div>
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AppContainer;

type Props = {
  title?: string;
  forceTitle?: boolean;
};
