import React, { useState, useEffect } from "react";
import styles from "./work.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface Props {
  expand: any;
  data: any;
  setExpand: any;
}

export default function WorkDetail({ expand, data, setExpand }: Props) {
  console.log(expand);
  return (
    <div style={{ width: "100%" }}>
      {data.map((job, index) => {
        return (
          <div
            className={
              index == expand
                ? styles.jobBackgroundImagesAfter
                : styles.jobBackgroundImages
            }
            style={{
              backgroundImage: `url(http://localhost:8000${job.value.company_image})`,
            }}
          >
            <Grid
              container
              item
              xs={12}
              justify={"center"}
              alignContent={"center"}
              className={
                index == expand
                  ? styles.jobInfoHeaderDetailsAfter
                  : styles.jobInfoHeaderDetails
              }
            >
              <Grid item container xs={12} justify={"center"}>
                <Typography className={styles.companyName}>
                  {job.value.company}
                </Typography>
              </Grid>
              <Grid item container xs={12} justify={"center"}>
                <Typography className={styles.jobTitle}>
                  {job.value.job_title}
                </Typography>
              </Grid>
              <Grid item container xs={12} justify={"center"}>
                <Typography className={styles.moreCTA}>
                  {" "}
                  <button onClick={() => setExpand(index)}>Click me</button>
                </Typography>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
  );
}
