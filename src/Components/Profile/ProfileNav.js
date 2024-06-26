import vidIcon from "../Assets/icons8-video-call-24.png";
import audioIcon from "../Assets/icons8-microphone-24.png";
import questIcon from "../Assets/icons8-question-30.png";
import profileAvatar from "../Assets/Union.png";
import profileIcon from "../Assets/man on black.png";
import "./profile.css"

export default function ProfileNav() {
  return (
    <div className="profileNavWrapper">
      <img className='icon' src={profileAvatar} alt="profile avater" />

      <div className="iconsWrap">
        <img className='icon' src={vidIcon} alt="video icon" />


        <img className='icon' src={questIcon} alt="question icon" />

        <img  className='icon' src={audioIcon} alt="audio icon" />
       
      </div>

        
        
        

      <img  className='icon' src={profileIcon} alt="profile icon" />
    </div>
  );
}
