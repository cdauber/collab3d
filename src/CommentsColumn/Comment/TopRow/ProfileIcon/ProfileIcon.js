import React from "react";
import "./ProfileIcon.css";

export function ProfileIcon({author}) {
  if(author==="Steve Singh"){
    return (
      <img className="profile-picture" 
      src="https://media-exp1.licdn.com/dms/image/C5103AQES2HWYu834NA/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=e85cbE830lKu3L4wbpIqVu83o5byIKrhQx8pPpbpPbQ" 
      alt="Steve" />
    ) 
  }else if(author==="Ed Lazowska"){
    return (
      <img className="profile-picture" 
      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Edward_D_Lazowska.jpg/1200px-Edward_D_Lazowska.jpg" 
      alt="Ed" />
    ) 
  }else{
    return (
      <img className="profile-picture" 
      src="https://dukeangelnetwork.duke.edu/wp-content/uploads/2015/05/Dan-Levitan-Headshot.jpg" 
      alt="Dan" />
    ) 
  }
}
