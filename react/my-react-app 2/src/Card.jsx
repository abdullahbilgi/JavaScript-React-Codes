import profilePic from "./assets/1671107979783.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Abdullah Bilgi</h2>
      <p className="card-text">I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card;
