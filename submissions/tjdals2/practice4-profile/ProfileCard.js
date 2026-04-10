import React,{useState} from "react";

function ProfileCard({name, email,avatar,bio}){
    return(
        <div>
            <h1>{avatar && <img src={avatar} alt="프로필 아바타" />}</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{bio}</p>
        </div>
    );
}

 export default ProfileCard