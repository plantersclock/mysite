import React, { useState } from "react";
import styles from "./header.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  name: string;
}

export default function Header({ name }: Props) {
  return (
    <Grid
      container
      item
      xs={12}
      className={styles.background}
      justify={"center"}
      alignContent={"center"}
    >
      <Grid item>
        <img src="triangles.png" height={850} />
        <Typography className={styles.name}>{name}</Typography>
      </Grid>
    </Grid>
  );
}
