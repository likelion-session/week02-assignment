import React from 'react';

function ProfileCard({ profile }) {

    return (
        <div className ="profileCard">
           <img src = {profile.avatar} alt = {profile.name} className = "SSS_avatar"/>
           <h1>{profile.name}</h1>
           <p>{profile.email}</p> <br />
           <p>{profile.bio}</p>
        </div>
    );
}
export default ProfileCard;