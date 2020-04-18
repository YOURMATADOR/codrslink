import React, { Children } from "react";

import { useStyles } from "./styles.js";

const BodyContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.body}>{children}</div>;
};

export { BodyContainer };
