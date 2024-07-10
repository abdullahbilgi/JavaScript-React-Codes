// conditional rendering = allows you to control what gets reered
//                         in your application based on certain conditions
//                         (show,hide,or change components)
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username={"BroCode"} />
      <UserGreeting isLoggedIn={true} />
      <UserGreeting />
    </>
  );
}

export default App;
