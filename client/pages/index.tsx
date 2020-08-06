import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Work from "../components/work";
import Contact from "../components/contact";
import { GetServerSideProps } from "next";

interface HomeProps {
  home: any;
  resume: any;
}

function Home({ home, resume }: HomeProps) {
  return (
    <div className="container">
      <Head>
        <title>My Test Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header name={home.name} />
        <About summary={home.about_me_summary} />
        <Work data={resume.content} />
        <Contact />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Fetch data from external API

  const [home, resume] = await Promise.all([
    fetch(`http://localhost:8000/api/v2/pages/?slug=home`),
    fetch(`http://localhost:8000/api/v2/pages/?slug=resume`),
  ])
    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then((data) =>
      data.map((item) => {
        return item.items[0].meta.detail_url;
      })
    )
    .then((urls) => Promise.all(urls.map((url) => fetch(url))))
    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then((data) => {
      return data;
    });

  // console.log(resume);
  // const resume_url = resume.items[0].meta.detail_url;
  // console.log(resume_url);
  // const res2 = await fetch(resume_url);
  // const response = await res2.json();
  // const data = response;
  // console.log(data.content[0]);

  // Pass data to the page via props
  return { props: { home, resume } };
};

export default Home;
