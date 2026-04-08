export default function ProfileCard({name, email, avatar, bio, avatarStyle}) {
    return(
        <div className="profileCard">
            <img src={avatar} style={avatarStyle} alt="사진"></img> <br />

            <h1>안녕하세요, {name}입니다.</h1>
            <p>이메일: {email}</p> <br />

            <h2>소개</h2>
            <p>{bio}</p>
        </div>
    );
}