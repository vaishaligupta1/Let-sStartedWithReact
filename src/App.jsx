import { useState } from "react";
import Header from "./components/Header";
import RestaurantSummary from "./components/RestaurantSummary";
import Card from "./components/Card";
import Body from "./components/Body";
import Modal from "./components/Modal";
import VerifyItem from "./components/VerifyItem";

function App() {
  const [modal, setModal] = useState(null);
  function AddHandler(meal) {
    console.log(meal);
    setModal(meal);
  }
  function onCloseHandler() {
    console.log("click");
    setModal(null);
  }
  return (
    <>
      <Header></Header>

      <Body AddHandler={AddHandler} />
      <VerifyItem item={modal} onCloseHandler={onCloseHandler} />
    </>
  );
}

export default App;
