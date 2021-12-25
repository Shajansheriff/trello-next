import "../styles/globals.css";
import type { AppProps } from "next/app";
import { styled } from "stitches.config";

const Root = styled("div", {
  backgroundColor: "rgb(0, 121, 191)",
  height: "100%",
  position: "relative",
  zIndex: 1,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
