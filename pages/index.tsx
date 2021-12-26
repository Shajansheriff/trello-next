import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Page } from "@templates";
import dynamic from "next/dynamic";
import { TopBar } from "@organisms";
const Board = dynamic(import("../components/organisms/board/board"), {
  ssr: false,
});

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
        <TopBar />
      </Page.Bar>
      <Page.Content>
        {winReady && data ? <Board data={data} /> : null}
      </Page.Content>
    </Page>
  );
};

export default Home;
