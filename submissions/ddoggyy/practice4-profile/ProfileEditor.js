import { useState } from "react";

export default function ProfileEditor({onSave, input = {}}){ // onSave = App 콜백 함수
    const [profile, setProfile] = useState({
        name: input.name,
        email: input.email,
        avatar: input.avatar,
        bio: input.bio
    });

    const handleOnChange = (e) => {
        const{ name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSave(profile);
    }  

    const avatarLink = (profile.avatar).includes("static") ? "로컬 사진(링크 입력)" : profile.avatar;

    return(
        <form onSubmit={handleOnSubmit} className="profileEditor">
            <br />
            <h2>프로필 수정</h2>
            <input 
                type="text"
                name="avatar"
                placeholder="프로필 사진 링크"
                value={avatarLink}
                onChange={handleOnChange} /> <br />

            <input 
                type="text" 
                name="name" 
                placeholder="이름" 
                value={profile.name} 
                onChange={handleOnChange} /> <br />

            <input 
                type="email"
                name="email"
                placeholder="이메일"
                value={profile.email}
                onChange={handleOnChange} /> <br />

            <textarea
                name="bio"
                placeholder="소개"
                value={profile.bio}
                onChange={handleOnChange} /> <br />
            
            <button type="submit">저장</button>
        </form>
    );
}