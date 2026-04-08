import { useState } from "react";
import ProfileEditor from "./ProfileEditor";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./profile.jpg";

function App(){
    const avatarStyle = {
        width: "300px",
        height: "300px",
        objectFit: "cover",
        borderRadius: "12px"
    };

    const [profile, setProfile] = useState({
        name: "김석현",
        email: "kim@example.com",
        avatar: ProfileImage,
        bio: "안녕하세요! React를 공부하고 있습니다."
    });

    const handleOnSave = (updatedProfile) => {

        setProfile((prevProfile) => ({ 
            ...prevProfile,
            ...updatedProfile
        }));
    };

    return (
        <div>
            <ProfileCard 
                name={profile.name}
                email={profile.email}
                avatar={profile.avatar}
                bio={profile.bio}
                avatarStyle={avatarStyle}
            />
            <ProfileEditor onSave={handleOnSave} input={profile} />
        </div>
    ); 
}

export default App