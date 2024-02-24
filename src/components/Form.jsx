import { useRef, useState } from "react";
import Container from "./Container";
import ErrorModel from "./ErrorModel";
function Form(props) {
  let name = useRef();
  let age = useRef();
  const [errormessage, seterrormessage] = useState();
  const OnAddUserHandler = (event) => {
    event.preventDefault();
    console.log(typeof name.current.value);
    console.log(typeof age.current.value);
    if (name.current.value.length == 0 || age.current.value.length == 0) {
      let obj = { title: "Error", message: "Enter the correct Value" };
      seterrormessage(obj);
      return;
    }
    if (age.current.value < 1) {
      let obj = { title: "Error", message: "Age Should be positive" };
      seterrormessage(obj);
      return;
    }
    let obj = {
      name: name.current.value,
      age: age.current.value,
    };
    name.current.value = "";
    age.current.value = "";

    props.AddUserHandler(obj);
  };
  const errormessageHandler = () => {
    name.current.value = "";
    age.current.value = "";
    seterrormessage(null);
  };
  return (
    <Container>
      {errormessage && (
        <ErrorModel
          title={errormessage.title}
          message={errormessage.message}
          errorhandler={errormessageHandler}
        ></ErrorModel>
      )}
      <form onSubmit={OnAddUserHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input type="text" class="form-control" ref={name} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age(Years)
          </label>
          <input type="number" class="form-control" ref={age} />
        </div>

        <button type="submit" class="btn btn-primary">
          Add User
        </button>
      </form>
    </Container>
  );
}
export default Form;
