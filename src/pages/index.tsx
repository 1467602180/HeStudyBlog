import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="h-50 px-10 text-10 center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("HeStudy Blog")
              .pauseFor(1500)
              .deleteChars(4)
              .typeString("Things")
              .start();
          }}
        />
      </div>
      <div className="center">
        <Link to={"/blog"}>阅读文章</Link>
      </div>
    </Layout>
  );
}
