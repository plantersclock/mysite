import React from "react";
import styles from "./about.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  summary: string;
}

export default function About({ summary }: Props) {
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
          <Typography className={styles.topic}>ABOUT</Typography>
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
        <Typography className={styles.content}>
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          ></div>
        </Typography>
      </Grid>
    </Grid>
  );
}
