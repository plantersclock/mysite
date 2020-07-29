import Head from "next/head";
import Header from "../components/header";
import About from "../components/about";
import Work from "../components/work";
import { GetServerSideProps } from "next";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

interface BGGProps {
  data: any;
}

function Home({ data }: BGGProps) {
  console.log(data.content.about.details);
  return (
    <div className="container">
      <Head>
        <title>My Test Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header name={data.name} />
        <About summary={data.content.about.details.summary} />
        <Work data={data.content.work} />

        {/* {data.map((item) => (
          <div>
            <Link href="/blog/[id]" as={"/blog/" + item.id}>
              {item.title}
            </Link>
          </div>
        ))} */}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<BGGProps> = async () => {
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v2/pages/3/`);
  const response = await res.json();
  const data = response;

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
