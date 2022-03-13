import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import Link from 'next/link';
import { logInRequestAction } from '../reducers/user';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin: 10px;
`;

const FormWrapper = styled(Form)`
    padding : 10px;
`;

function LoginForm() {
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state) => state.user);
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const style = useMemo(() => ({ marginTop: 10 }), []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(logInRequestAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} loading={loginLoading} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          type="password"
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

// LoginForm.propTypes={
//     setIsloggedIn : PropTypes.func.isRequired,
// }

export default LoginForm;
