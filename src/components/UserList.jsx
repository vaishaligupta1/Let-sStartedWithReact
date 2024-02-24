import Container from "./Container";
import { MdOutlineDelete } from "react-icons/md";
function UserList(props) {
  return (
    <>
      <ul>
        {props.userlist.map((item) => (
          <li key={item.name}>
            {item.name} {item.age}
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => props.onDeleteHandler(item.name)}
            >
              <MdOutlineDelete></MdOutlineDelete>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
