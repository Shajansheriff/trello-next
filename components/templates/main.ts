import { styled } from "@stitches/react";

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative",
});

const Content = styled("div", {
  flexGrow: 1,
  overflowY: "auto",
});

const Bar = styled("div", {});

type MainT = typeof Main;
interface PageType extends MainT {
  Content: typeof Content;
  Bar: typeof Bar;
}

const Page: PageType = Main as any;
Page.Content = Content;
Page.Bar = Bar;

export { Page };
