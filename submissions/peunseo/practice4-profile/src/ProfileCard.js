import './App.css';

function ProfileCard({ name, email, avatar, bio }) {
  return (
    <section className="profile-card">
      <img className="profile-avatar" src={avatar} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-email">{email}</p>
      <p className="profile-bio">{bio}</p>
    </section>
  );
}

export default ProfileCard;