import Navbar from "./Components/Navbar";
import MainPage from "./Components/mainPage";
import UserProfile from "./Components/[password]";

export default function Home() {
  return (
    <div className=" bg-white min-h-screen">
      <Navbar />
      <MainPage />
      {/* <UserProfile /> */}
    </div>
  );
}
