import { useState } from "react";

function ProfileEditor({ profile, onSave }) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...profile,
      name,
      email,
      bio,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <label>이름: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>이메일: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>소개: </label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <button type="submit">저장</button>
    </form>
  );
}

export default ProfileEditor;