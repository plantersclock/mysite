import React, { useState, useEffect } from "react";
import styles from "./resumesecondary.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import "next/link";

interface Props {
  data: any;
}

export default function ResumeSecondary({ data }: Props) {
  let skills = [];

  data.content.map((job) =>
    job.value.experiences.map(
      (experience) => (skills = [...skills, ...experience.skills])
    )
  );

  let uniqueSkills = skills.filter((c, index) => {
    return skills.indexOf(c) === index;
  });

  return (
    <Grid xs={12} style={{ paddingRight: "10%" }} className={styles.panel}>
      <script src="https://kit.fontawesome.com/86ee3b03e5.js"></script>
      <Typography variant="h5" color="secondary">
        CONTACT
      </Typography>
      <Divider className={styles.divider}></Divider>

      <Grid xs={12} style={{ marginTop: 18, marginBottom: 18 }}>
        <Grid xs={12}>
          <i className="far fa-envelope" style={{ color: "#f83674" }}></i>
        </Grid>
        <Typography variant="subtitle1">{data.email}</Typography>
        <Grid xs={12}>
          <i className="fab fa-linkedin-in" style={{ color: "#f83674" }}></i>
        </Grid>
        <Typography variant="subtitle1">{data.linked_in}</Typography>
        <Grid xs={12}>
          <i className="fab fa-github" style={{ color: "#f83674" }}></i>
        </Grid>
        <Typography variant="subtitle1">{data.github}</Typography>
        <Grid xs={12}>
          <i
            className="far fas fa-map-marker-alt"
            style={{ color: "#f83674" }}
          ></i>
        </Grid>
        <Typography variant="subtitle1">{data.location}</Typography>
      </Grid>

      <Typography variant="h5" color="secondary">
        SKILLS
      </Typography>
      <Divider className={styles.divider}></Divider>
      {uniqueSkills.map((skill) => {
        return (
          <Grid item xs={12} style={{ marginTop: 12 }}>
            <Button color="primary" variant="contained">
              {skill}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
