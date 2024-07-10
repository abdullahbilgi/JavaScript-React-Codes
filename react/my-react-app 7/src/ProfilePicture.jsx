function ProfilePicture() {
  const imageUrl = "./src/assets/pp.jpg";

  const handleClick = (e) => {
    //console.log("OUCH!");
    e.target.style.display = "none";
  };

  return <img onClick={(e) => handleClick(e)} src={imageUrl} />;
}

export default ProfilePicture;
