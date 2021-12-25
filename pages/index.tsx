import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { styled } from "stitches.config";
import { FC } from "react";
import { Page } from "@templates";

const Navbar: FC = ({ children }) => {
  return (
    <div className="min-h-40 max-h-40 overflow-hidden">
      <div className="flex box-border">{children}</div>
    </div>
  );
};

const SignupLink = styled("a", {
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

const Anchor = styled("a", {
  background: "0 0",
  borderRadius: "3px",
  color: "#FFFFFF",
  display: "inline-block",
  fontWeight: "bold",
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

const LoginButton = styled(SignupLink, {
  backgroundColor: "transparent",
  background:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))",
  "&:hover": {
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
  },
});

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title className={"text"}>Trello Clone</title>
        <meta name="description" content="A Trello Clone app using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Bar>
        <Navbar>
          <Link href={"#"} passHref>
            <Anchor>Home</Anchor>
          </Link>
          <Link href={"#"} passHref>
            <Anchor>Tour</Anchor>
          </Link>
          <Link href={"#"} passHref>
            <Anchor>Blog</Anchor>
          </Link>
          <Link href="/">Trello</Link>
          <div className="flex justify-end grow-1 basis-100">
            <Link href={"#"} passHref>
              <SignupLink type="success">SignUp</SignupLink>
            </Link>
            <Link href={"#"} passHref>
              <LoginButton>Login</LoginButton>
            </Link>
          </div>
        </Navbar>
      </Page.Bar>
      <Page.Content>Board</Page.Content>
    </Page>
  );
};

export default Home;
