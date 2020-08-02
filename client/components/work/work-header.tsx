import React, { useState, useEffect } from "react";
import styles from "./work.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  expand: any;
  setExpand: any;
}

export default function WorkHeader({ expand, setExpand }: Props) {
  return (
    <Grid container className={styles.background}>
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
        {expand != null ? (
          <div
            className={styles.unexpandButton}
            onClick={() => setExpand(null)}
          >
            <span className={styles.rotate90}>Shrink</span>
          </div>
        ) : (
          <div></div>
        )}
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
  );
}
