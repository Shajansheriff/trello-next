import { styled } from "stitches.config";

export const Banner = styled("div", {
  fontSize: "$2",
  textAlign: "center",
  position: "relative",
  color: "#172b4d",
  padding: "6px",
  wordWrap: "break-word",
  variants: {
    type: {
      warning: {
        backgroundColor: "#faf3c0",
        borderBottom: "1px solid #e6c60d",
      },
    },
  },
});
