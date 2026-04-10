import { useState } from 'react';
import './ProfileEditor.css';

function ProfileEditor({ profile, onSave }) {
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [avatar, setAvatar] = useState(profile.avatar);
    const [bio, setBio] = useState(profile.bio);

    const handleSave = (event) => {
        event.preventDefault();
        onSave({
            ...profile,
            name,
            email,
            avatar,
            bio
        });
    };

    const handleAvatarFileChange = (event) => {
        const file = event.target.files && event.target.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <form className="profile-editor" onSubmit={handleSave}>
            <div className="profile-editor__field">
                <label className="profile-editor__label" htmlFor="name">이름</label>
                <input
                    className="profile-editor__input"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="profile-editor__field">
                <label className="profile-editor__label" htmlFor="email">이메일</label>
                <input
                    className="profile-editor__input"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="profile-editor__field">
                <label className="profile-editor__label" htmlFor="avatar">이미지 업로드</label>
                <input
                    className="profile-editor__input"
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFileChange}
                />
            </div>
            <div className="profile-editor__field">
                <label className="profile-editor__label" htmlFor="bio">소개</label>
                <textarea
                    className="profile-editor__textarea"
                    id="bio"
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                />
            </div>
            <button className="profile-editor__submit" type="submit">저장</button>
        </form>
    );
}

export default ProfileEditor;