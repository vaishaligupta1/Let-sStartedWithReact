import Show from "./Show";
import "./Chart.css";
function Chart(props) {
  let ValueArray = props.chartValues.map((expense) => expense.value);
  let maxval = Math.max(...ValueArray);
  console.log(ValueArray, maxval);
  return (
    <div className="chart">
      {props.chartValues.map((element) => (
        <Show
          key={element.label}
          value={element.value}
          label={element.label}
          maxValue={maxval}
        ></Show>
      ))}
    </div>
  );
}
export default Chart;
