import React, { FC } from "react";
import { styled } from "stitches.config";

export const Button: FC = (props) => {
  return <button {...props} />;
};

export const Anchor = styled("a", {
  background: "0 0",
  borderRadius: "3px",
  color: "#FFFFFF",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "$2",
  lineHeight: "15px",
  margin: "0 4px 5px 0",
  padding: "8px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    outline: "none",
    color: "#FFFFFF",
  },
});

export const SignupButton = styled("a", {
  fontFamily: "$system",
  fontSize: "$2",
  textDecoration: "none",
  borderRadius: "3px",
  border: 0,
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  boxShadow: "none",
  color: "#FFFFFF",
  display: "flex",
  fontWeight: "bold",
  margin: "0 4px 0 0",
  padding: "0 12px",
  whiteSpace: "nowrap",
  variants: {
    type: {
      success: {
        background: "linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%)",
        "&:hover": {
          background: "linear-gradient(to bottom, #5AAC44 0%, #519839 100%)",
        },
      },
    },
    size: {
      small: {
        height: "32px",
        lineHeight: "32px",
      },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const LoginButton = styled(SignupButton, {
  backgroundColor: "transparent",
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))",
  "&:hover": {
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
  },
});
