import React, { useState, useEffect } from "react";
import styles from "./work.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

interface Props {
  expand: any;
  data: any;
  setExpand: any;
}

export default function WorkDetail({ expand, data, setExpand }: Props) {
  console.log(expand);
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
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
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => setExpand(index)}
                    >
                      More
                    </Button>
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
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 48,
                  }}
                >
                  <Link href={"/resume"}>
                    <Button variant="outlined" color="secondary">
                      Resume
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
