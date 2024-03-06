import Card from "./Card";
import "./Body.css";
const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function Body(props) {
  return (
    <>
      <ul className="list-restaurant">
        {meals.map((meal) => (
          <Card>
            <li key={meal.id}>
              <h2>{meal.name} </h2>
              <h3>{meal.description}</h3>
              <h3>{meal.price}</h3>

              <button className="addbutton">+Add</button>
            </li>
          </Card>
        ))}
      </ul>
    </>
  );
}

export default Body;
