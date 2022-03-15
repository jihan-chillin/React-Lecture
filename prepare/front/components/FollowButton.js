import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { UNFOLLOW_REQUEST, FOLLOW_REQUEST } from '../reducers/user';

function FollowButton({ post }) {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);

  // 내가 팔로잉하는 사람들 중 피드에 뜬 게시글의 주인이랑 같을 경우.
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);

  const onFollow = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  return (
    <Button loading={unfollowLoading || followLoading} onClick={onFollow}>
      {isFollowing ? '언팔로우' : '팔로우' }
    </Button>
  );
}

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
