import React, { useState, useEffect } from "react";
import styles from "./resumemain.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "next/link";

interface Props {
  data: any;
}

export default function ResumeMain({ data }: Props) {
  console.log(data);
  return (
    <Grid xs={12}>
      <Grid xs={12} className={styles.headerContainer}>
        <Typography style={{ color: "white" }} variant="h4">
          {data.name}
        </Typography>
        <Typography style={{ color: "#f83674", marginTop: 4 }} variant="h5">
          {data.job_titles}
        </Typography>
        <Divider className={styles.divider}></Divider>
        <Typography
          style={{ color: "white", marginTop: 12 }}
          variant="subtitle1"
        >
          {data.about}
        </Typography>
      </Grid>
      <Grid container style={{ paddingRight: 50 }} item xs={12}>
        <Typography
          style={{ marginTop: 18, marginLeft: 20 }}
          color="secondary"
          variant="h5"
        >
          WORK EXPERIENCE
        </Typography>
        <Divider className={styles.dividerFull}></Divider>
        {data.content.map((job) => {
          return (
            <Grid xs={12} style={{ marginTop: 12, marginLeft: 20 }}>
              <Typography
                style={{ margin: "6px 0px 0px 0px", lineHeight: "1rem" }}
                variant="h6"
                color="secondary"
              >
                {job.value.job_title}
              </Typography>
              <Typography variant="h6" color="primary">
                {job.value.company}
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    {job.value.start_date} -{" "}
                    {job.value.end_date ? job.value.end_date : "Current"}
                  </div>
                  <div>{job.value.job_location}</div>
                </div>
              </Typography>

              {job.value.experiences.map((experience) => {
                return (
                  <div style={{ marginTop: 4 }}>
                    <div style={{ display: "flex" }}>
                      <div className={styles.bullet}>- </div>
                      <Typography>{experience.experience}</Typography>
                    </div>
                  </div>
                );
              })}
              <div style={{ margin: 12 }}> </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
