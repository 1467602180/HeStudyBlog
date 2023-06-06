import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { animated, useSpring } from "@react-spring/web";
import Layout from "@theme/Layout";
import React from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <animated.div className="h-50 text-40px center" style={props}>
        HeStudy Blog
      </animated.div>
    </Layout>
  );
}
