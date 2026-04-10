import ProfileCard from "./ProfileCard";
import ProfileEditor from "./ProfileEditor";
import React,{useState} from "react";

function App1(){
    const [profile,setProfile]=useState({ 
        name:"",
        email:"", 
        avatar:"", 
        bio:""
    });

    const handleSaveProfile=(updatedProfile)=>{
        setProfile(updatedProfile);
    }

    return(
        <div>
            <h1>MY PAGE</h1>
            <ProfileCard 
            name={profile.name}
            email={profile.email} 
            avatar={profile.avatar} 
            bio={profile.bio}></ProfileCard>

            <ProfileEditor currentProfile={profile}
            onSave={handleSaveProfile}></ProfileEditor>
        </div>
    );
}
 export default App1