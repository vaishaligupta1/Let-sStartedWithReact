import Form from "./components/Form";
import { useState } from "react";
import UserList from "./components/UserList";
import ErrorModel from "./components/ErrorModel";
import Container from "./components/Container";
function App() {
  const [users, setusers] = useState([]);
  function onAdduser(obj) {
    console.log(obj);
    let updatedusers = [...users, obj];
    setusers(updatedusers);
  }
  const onDelete = (name) => {
    let updatedarray = users.filter((element) => {
      return element.name !== name;
    });
    setusers(updatedarray);
  };

  return (
    <>
      <Form AddUserHandler={onAdduser}></Form>
      <Container>
        <br />
        <br /> <UserList userlist={users} onDeleteHandler={onDelete}></UserList>
      </Container>
    </>
  );
}

export default App;
