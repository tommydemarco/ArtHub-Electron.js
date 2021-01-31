import React from "react";
import PropTypes from "prop-types";

import css from "./Headline.module.scss";

const Headline = ({ headline, subline, as }) => {
  const Element = as;

  const classes = [css.Headline];

  classes.push(css.Headline + "--" + as);
  return (
    <>
      <Element className={classes.join(" ")}>{headline}</Element>
      {subline && <p className={css.Headline__subline}>{subline}</p>}
    </>
  );
};

Headline.propTypes = {
  headline: PropTypes.string,
  subline: PropTypes.string,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

export default Headline;
