import React, { useState } from "react";
import styles from "./header.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <Grid container item xs={12} className={styles.background}>
      <Grid
        container
        item
        xs={12}
        justify={"center"}
        alignContent={"flex-start"}
        className={styles.top}
      >
        <Typography className={styles.jobTitles}>
          ANALYST & DEVELOPER
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify={"center"}
        alignContent={"center"}
        className={styles.backgroundImage}
        style={{
          backgroundImage: "url('/triangles.png')",
        }}
      >
        <Typography className={styles.name}>{name}</Typography>
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
