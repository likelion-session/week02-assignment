function ProfileCard({ name, email, avatar, bio }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <img
        src={avatar}
        alt="프로필"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;