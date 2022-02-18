import React, {useState} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Menu, Input, Row, Col} from 'antd'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'

const searchInput = styled(Input.Search)`
  vertical-align : middle
`

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false)
  
  return (
    <div>
      <Menu mode = "horizontal">
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
          {isLoggedIn ? <UserProfile setIsloggedIn={setIsloggedIn}/> : <LoginForm setIsloggedIn={setIsloggedIn}/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href='https://blog.naver.com/kimjihan77' target='_blank' rel='noreferrer noopener'>코줍's 블로그</a>
        </Col>
      </Row>
      
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;