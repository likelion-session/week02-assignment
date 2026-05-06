import {useState} from 'react';
import ProfileEditor from './ProfileEditor';
import ProfileCard from './ProfileCard';
import ProfileImg from './profile.jpg';
import './App.css';

function App() {
    const [profile, setProfile] = useState({
        name: '이상민',
        email: 'sangmin@ang.com',
        avatar: ProfileImg, 
        bio: '반갑다, 이상민이다.' 
    });

    const handleSave = (updatedProfile) => {
        setProfile(updatedProfile);
    }

    return (
        <div>
            <ProfileCard profile={profile} />
            <ProfileEditor input={profile} onSave={handleSave} />
        </div>
    );
}
export default App;