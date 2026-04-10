import React,{useState} from "react";

function ProfileEditor({currentProfile, onSave}){
    const [formData,setFormData]= useState(currentProfile);

    const handleChange=(event)=>{
        const{name,value}=event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSumit=(event)=>{
        event.preventDefault();
        onSave(formData);
    }
    return(
        <div>
          <form onSubmit={handleSumit}>

            <p>-------------------------------</p>
            <div>
                <label>이름: </label>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}></input>
            </div>

            <div>
                <label>이메일: </label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label>프로필이미지 URL: </label>
                <input 
                    type="text" 
                    name="avatar" 
                    value={formData.avatar} 
                    onChange={handleChange} 
                />
            </div>

            <div>
                <label>소개: </label>
                <textarea 
                    name="bio" 
                    value={formData.bio} 
                    onChange={handleChange} 
                />
            </div>

            <button type="submit">저장</button>
          </form>

        </div>
    );
}
 export default ProfileEditor