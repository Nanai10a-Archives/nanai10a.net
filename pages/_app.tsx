import { AppProps } from "next/app";
import { NextPage } from "next";

import "../styles/_app.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

// noinspection JSUnusedGlobalSymbols
export default App;
