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
        console.log(job);
        return (
          <div id={"job-" + index}>
            <div
              key={job}
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
                {expand == index ? (
                  ""
                ) : (
                  <Grid item container xs={12} justify={"center"}>
                    <Typography className={styles.moreCTA}>
                      <button onClick={() => setExpand(index)}>Click me</button>
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </div>
            <div
              className={
                expand == index ? styles.jobDetails : styles.displayNone
              }
            >
              <div style={{ width: "100%" }}>
                <ul>
                  {job.value.experiences.map((experience) => {
                    return (
                      <li>
                        <Typography
                          style={{
                            fontSize: 18,
                            fontWeight: 400,
                            margin: "12px 0px",
                          }}
                        >
                          {experience.experience}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>

                <div
                  style={{
                    margin: "auto",
                    marginTop: "75px",
                    backgroundColor: "#F83674",
                    color: "white",
                    width: 100,
                    height: 50,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography>Resume</Typography>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
