import React from "react";
import styles from "./contact.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Work() {
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
          <Typography className={styles.topic}>Contact</Typography>
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

      <Grid container xs={6} item>
        <div className={styles.jobBackgroundImages}>
          <Grid
            container
            item
            xs={12}
            justify={"center"}
            alignContent={"center"}
            style={{ height: "100vh" }}
          ></Grid>
        </div>
      </Grid>
    </Grid>
  );
}
