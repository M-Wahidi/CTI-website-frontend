import React, { useState } from "react";
import useStyles from "./styles.js";
import ProjectInfo from "./projectInfo";

const TagGenerator = () => {
  const classes = useStyles();

  const [value, setValue] = useState({
    option1: "",
    option2: "",
    showComponent: false,
  });

  return (
    <main className={classes.main}>
      <section className={classes.headingSection}>
        <div className={classes.headingContainer}>
          <p className={classes.url}>Home / Tag Generator</p>
          <h2 className={classes.subHeading}>Civic Tech Index</h2>
          <h1 className={classes.heading}>Tag Generator</h1>
        </div>
      </section>
      <section className={classes.projectSection}>
        <p className={classes.question}>
          Is your project affliated with any organization?
        </p>
        <label className={classes.labelYes}>
          <input
            type="radio"
            value="Yes"
            checked={value.option1 === "Yes"}
            onChange={() =>
              setValue({ option1: "Yes", option2: "", showComponent: false })
            }
          />
          Yes
        </label>
        <label className={classes.labelNo}>
          <input
            type="radio"
            value="No"
            checked={value.option2 === "No"}
            onChange={() =>
              setValue({ option1: "", option2: "No", showComponent: true })
            }
          />
          No
        </label>
        {value.showComponent ? <ProjectInfo /> : null}
      </section>
    </main>
  );
};

export default TagGenerator;
