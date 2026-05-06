import React from 'react';

const ProfileCard = ({ name, email, avatar, bio }) => {
  return (
    <div>
      <h2>프로필</h2>
      <img src={avatar} alt={name} width="100" height="100" />
      <p><strong>이름:</strong> {name}</p>
      <p><strong>이메일:</strong> {email}</p>
      <p><strong>소개:</strong> {bio}</p>
    </div>
  );
};

export default ProfileCard;
