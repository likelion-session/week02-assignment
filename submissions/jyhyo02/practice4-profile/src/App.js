import './App.css';
import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ProfileEditor from './ProfileEditor';
import huhAvatar from './Huh.jpg';

function App() {
	const [profile, setProfile] = useState({
		name: '허성우',
		email: 'huhsungwoo@kimsuckhyun.com',
		avatar: huhAvatar,
		bio: '안녕하세요, 저는 허성우입니다.'
	});

	return (
		<div>
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
