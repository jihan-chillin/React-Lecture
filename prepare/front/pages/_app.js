import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

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
