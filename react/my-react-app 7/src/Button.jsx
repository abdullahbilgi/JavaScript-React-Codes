function Button() {
  /* const handleClick2 = (name) => {
    console.log(`${name} stop cliking on me`);
  }; 
     return <button onClick={() => handleClick2("Bro")}>Click Me 😊</button>;
*/

  /*   let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you cliked me ${count} time/s`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };
  return <button onClick={() => handleClick("Bro")}>Click Me 😊</button>;
 */

  const handleClick = (e) => {
    //console.log(e);
    e.target.textContent = "OUCH 🤕";
  };

  return <button onClick={(e) => handleClick(e)}>Click Me 😊</button>;
}
export default Button;
