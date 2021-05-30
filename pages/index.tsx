import { NextPage, GetStaticProps } from "next";
import AppContainer from "../component/AppContainer";
import RenderMarkdown, { Props as RenderMarkdownProps } from "../component/RenderMarkdown";

import styles from "../styles/index.module.scss";
import Header from "../component/Header";

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
  return {
    props: {
      descriptionsProps: [
        {
          markdown: "",
        },
      ],
    },
  };
};
