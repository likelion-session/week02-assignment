import { useState, useEffect } from 'react';

function ProfileEditor({ onSave, input }) {
    const [profile, setProfile] = useState({
        name: input.name,
        email: input.email,
        avatar: input.avatar,
        bio: input.bio
    });

    useEffect(() => {
        setProfile({
            name: input.name,
            email: input.email,
            avatar: input.avatar,
            bio: input.bio
        });
    }, [input]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prevProfile => ({
                    ...prevProfile,
                    avatar: reader.result 
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSave(profile);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>이름: </label>
                <input name="name" value={profile.name} onChange={handleOnChange} />
            </div>

            <div>
                <label>이메일: </label>
                <input name="email" value={profile.email} onChange={handleOnChange} />
            </div>

            <div>
                <label>프로필 사진 업로드: </label>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                />
            </div>

            <div>
                <label>소개: </label>
                <textarea name="bio" value={profile.bio} onChange={handleOnChange} />
            </div>

            <button type="submit">저장하기</button>
        </form>
    );
}

export default ProfileEditor;