import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Footer</h2>
      <p>This Website is created by {user.name} and their contact email is {user.email}</p>
    </div>
  );
};

export default Footer;
