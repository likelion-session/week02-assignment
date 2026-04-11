import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileEditor from './ProfileEditor';
import avatarImg from '../images/avatar.png';

const App = () => {
  const [profile, setProfile] = useState({
    name: "신한목",
    email: "shm3041@naver.com",
    avatar: avatarImg,
    bio: "안녕하세요. 저는 개발자입니다.",
  });

  const handleSaveProfile = (updatedProfile) => {
    setProfile(prev => ({
      ...prev,
      ...updatedProfile,
    }));
  };

  return (
    <div>
      <h1>프로필 관리</h1>
      <div>
        <ProfileCard
          name={profile.name}
          email={profile.email}
          avatar={profile.avatar}
          bio={profile.bio}
        />
        <ProfileEditor 
          profile={profile} 
          onSave={handleSaveProfile} 
        />
      </div>
    </div>
  );
};

export default App;
