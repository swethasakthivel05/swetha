import { items } from "./menu";

const Teamenu = ({ ActiveCategory, menu }) => {
  return (
    <table>
      <tbody>
        {menu[ActiveCategory].varient.map((value, index) => (
          <li>{value.name}</li>
        ))}
      </tbody>
    </table>
  );
};

export default Teamenu;
