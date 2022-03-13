import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const searchInput = styled(Input.Search)`
  vertical-align : middle;
`;

/* gutter로 인해 불필요한 스크롤이 생기는 걸 방지해주는 global styling */
const Gloabal = createGlobalStyle`
  .ant-row{
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .ant-col:first-child{
    padding-left: 0 !important;
  }

  .ant-col:last-child{
    padding-right: 0 !important;
  }
`;

function AppLayout({ children }) {
  const isLoggedIn = useSelector((state) => state?.user.isLoggedIn);

  return (
    <div>
      <Gloabal />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <searchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://blog.naver.com/kimjihan77" target="_blank" rel="noreferrer noopener">코줍 블로그</a>
        </Col>
      </Row>

    </div>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
