import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileEditor from "./ProfileEditor";
import picture from "./assets/profile.jpg";

function App() {
  const [profile, setProfile] = useState({
    name: "허성우",
    email: "hsw01021742@gmail.com",
    avatar: picture,
    bio: "집에 가고싶어요.",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>사용자 프로필 카드</h1>

      <ProfileCard
        name={profile.name}
        email={profile.email}
        avatar={profile.avatar}
        bio={profile.bio}
      />

      <ProfileEditor profile={profile} onSave={setProfile} />
    </div>
  );
}

export default App;