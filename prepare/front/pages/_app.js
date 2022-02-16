import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const Nodebird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>Nodebird</title>
      </Head>
      <Component />;
    </>
  );
};

Nodebird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default Nodebird;
