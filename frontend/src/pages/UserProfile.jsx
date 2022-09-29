import HeaderProfile from "../components/HeaderProfile";
import NavBarTickets from "../components/NavBarTickets";
import UserInformations from "../components/UserInformations";
import "../components/userinformations.css";

export default function UserProfile() {
  return (
    <div>
      <HeaderProfile />
      <NavBarTickets />
      <UserInformations />
    </div>
  );
}
