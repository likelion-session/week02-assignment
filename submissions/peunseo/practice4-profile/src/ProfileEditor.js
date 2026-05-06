import { useEffect, useState } from 'react';

function ProfileEditor({ profile, onSave }) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);

  useEffect(() => {
    setName(profile.name);
    setEmail(profile.email);
    setBio(profile.bio);
  }, [profile]);

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 시 리로딩 방지
    onSave({
      name,
      email,
      bio,
    });
  };

  return (
    <form className="profile-editor" onSubmit={handleSubmit}>
      <h3>프로필 수정</h3>

      <input
        type="text"
        value={name} // 입력칸 화면 글자를 React가 보고 제어 (제어 컴포넌트)
        onChange={(event) => setName(event.target.value)} // 상태 업데이트
        placeholder="이름" // 비어있을 때 보이는 힌트 텍스트
      />

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="이메일"
      />

      <textarea // input과 다르게 여러 줄 입력 가능
        rows="4" // 세로 4줄 정도 높이
        value={bio}
        onChange={(event) => setBio(event.target.value)}
        placeholder="소개"
      />

      <button type="submit">저장</button>
    </form>
  );
}

export default ProfileEditor;