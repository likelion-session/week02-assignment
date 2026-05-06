import './ProfileCard.css';

function ProfileCard({ name, email, avatar, bio }) {
    return (
        <div className="profile-card">
            <img
                className="profile-card__avatar"
                src={avatar}
                alt={name}
            />
            <h2 className="profile-card__name">{name}</h2>
            <p className="profile-card__email">{email}</p>
            <p className="profile-card__bio">{bio}</p>
        </div>
    );
}

export default ProfileCard;