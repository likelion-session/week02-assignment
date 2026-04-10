import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileEditor from './ProfileEditor';
import './App.css';

function App() {
  const [profile, setProfile] = useState({
    name: '김건치',
    email: 'niceteeth@example.com',
    avatar: 'https://i.pravatar.cc/300?img=12',
    bio: '반갑숭, 웃는 게 이쁜 김건치라고 해유',
  });

  // 프로필 저장 핸들러 (ProfileEditor에서 저장 누르면 호출)
  const handleSaveProfile = (nextProfile) => {
    setProfile((prev) => ({
      ...prev,
      ...nextProfile,
    }));
  };

  return (
    <main className="app-container">
      <h1>프로필 카드</h1>
      <div className="profile-layout">
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
    </main>
  );
}

export default App;
