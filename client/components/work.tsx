import React from "react";
import styles from "./work.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  data: any;
}

export default function Work({ data }: Props) {
  console.log(data);
  return (
    <Grid container item xs={12}>
      <Grid container item xs={6} className={styles.background}>
        <Grid
          container
          item
          xs={12}
          justify={"center"}
          alignContent={"flex-start"}
          className={styles.top}
        ></Grid>

        <Grid
          container
          item
          xs={12}
          justify={"center"}
          alignContent={"center"}
          className={styles.backgroundImage}
        >
          <Typography className={styles.topic}>WORK</Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          justify={"center"}
          alignContent={"flex-end"}
          className={styles.bottom}
        >
          <Typography className={styles.links}>
            ABOUT / WORK / PROJECTS / CONTACT
          </Typography>
        </Grid>
      </Grid>

      <Grid container item xs={6}>
        {data.details.map((job) => {
          return (
            <div
              className={styles.jobBackgroundImages}
              style={{
                backgroundImage: `url(http://localhost:8000${job.image})`,
              }}
            >
              <Grid
                container
                item
                xs={12}
                justify={"center"}
                alignContent={"center"}
                style={{ height: "100vh" }}
              >
                <Grid item container xs={12} justify={"center"}>
                  <Typography className={styles.companyName}>
                    {job.company}
                  </Typography>
                </Grid>
                <Grid item container xs={12} justify={"center"}>
                  <Typography className={styles.jobTitle}>
                    {job.job_title}
                  </Typography>
                </Grid>
                <Grid item container xs={12} justify={"center"}>
                  <Typography className={styles.moreCTA}></Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
}
