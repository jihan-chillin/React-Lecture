import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';
import 'antd/dist/antd.css';

function Nodebird({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Nodebird</title>
      </Head>
      <Component />
    </>
  );
}

Nodebird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Nodebird);
