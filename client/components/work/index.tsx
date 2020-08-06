import React, { useState, useEffect } from "react";
import styles from "./work.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WorkHeader from "./work-header";
import WorkDetail from "./work-detail";
import { stringify } from "querystring";

interface Props {
  data: any;
}

export default function Work({ data }: Props) {
  const [expand, setExpand] = useState(null);

  useEffect(() => {
    if (expand !== null) {
      let element = document.getElementById("job-" + expand);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [expand]);

  return (
    <Grid container item xs={12}>
      <div id="expandedItem"></div>
      <Grid
        container
        item
        className={
          expand != null ? styles.workHeaderWidthAfter : styles.workHeaderWidth
        }
      >
        <WorkHeader expand={expand} setExpand={setExpand} />
      </Grid>

      <Grid
        container
        style={
          expand != null
            ? { width: "65%", transition: "1s" }
            : { width: "50%", transition: "1s" }
        }
        item
      >
        <WorkDetail data={data} expand={expand} setExpand={setExpand} />
      </Grid>
    </Grid>
  );
}
