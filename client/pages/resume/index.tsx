import { GetServerSideProps } from "next";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResumeMain from "../../components/resumemain";
import ResumeSecondary from "../../components/resumesecondary";
import Head from "next/head";
import ResumeHeader from "../../components/resumeheader";

interface ResumeProps {
  data: any;
}

function Resume({ data }: ResumeProps) {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid item container xs={12}>
          <Grid item container xs={0} lg={1} xl={2}></Grid>
          <Grid style={{ marginTop: 32 }} item container xs={12} lg={10} xl={8}>
            <Grid container item xs={3} lg={4} xl={3}>
              <ResumeSecondary data={data} />
            </Grid>
            <Grid container item xs={12} sm={9} lg={8} xl={9}>
              <ResumeMain data={data} />
            </Grid>
          </Grid>
          <Grid item container xs={0} lg={1} xl={2}></Grid>
        </Grid>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ResumeProps> = async () => {
  // Fetch data from external API

  const response = await fetch(
    `http://localhost:8000/api/v2/pages/?slug=resume`
  );
  const resumeUrlJson = await response.json();
  const resumeUrl = await resumeUrlJson.items[0].meta.detail_url;

  const resumeResponse = await fetch(resumeUrl);
  const data = await resumeResponse.json();

  return { props: { data } };
};

export default Resume;
