import React from "react";
import Image from "next/image";

import Layout from "../layouts/DefaultLayout";
import Head from "../components/Head";
import locales from "../locales";

const AboutPage: React.FC = () => (
  <Layout>
    <Head title="自己紹介 | azujuuuuuun.github.io" />
    <h1>{locales.selfIntroduction}</h1>
    <Image
      src="/static/img/avatar.jpg"
      alt={locales.avatar}
      width={300}
      height={300}
    />
    <ul>
      <li>userId: azujuuuuuun</li>
      <li>username: jun</li>
    </ul>
  </Layout>
);

export default AboutPage;
