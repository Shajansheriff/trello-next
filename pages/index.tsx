import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { styled } from "stitches.config";
import { FC, useEffect, useState } from "react";
import { Page } from "@templates";
import { Anchor, SignupLink, LoginButton } from "@atoms";
import dynamic from "next/dynamic";
const Board = dynamic(import("../components/organisms/board/board"), {
  ssr: false,
});

const Navbar: FC = ({ children }) => {
  return (
    <div className="min-h-40 max-h-40 overflow-hidden">
      <div className="flex box-border">
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
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [winReady, setwinReady] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setwinReady(true);
    const fetchData = async () => {
      const response = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          limit: 100,
        }),
      });

      return response.json();
    };

    fetchData().then((data) => {
      console.log(data);

      setData(data);
    });
  }, []);
  return (
    <Page>
      <Head>
        <title className={"text"}>Trello Clone</title>
        <meta name="description" content="A Trello Clone app using next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Bar>
        <Navbar />
      </Page.Bar>
      <Page.Content>
        {winReady && data ? <Board data={data} /> : null}
      </Page.Content>
    </Page>
  );
};

export default Home;
