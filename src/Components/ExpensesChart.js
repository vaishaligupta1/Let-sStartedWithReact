import Chart from "./Chart";
function ExpensesChart(props) {
  let graphedarray = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "June",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "August",
      value: 0,
    },
    {
      label: "Sept",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];
  for (let exp of props.expenses) {
    let expmonth = exp.date.getMonth();
    graphedarray[expmonth].value += exp.amount;
  }

  return <Chart chartValues={graphedarray}></Chart>;
}

export default ExpensesChart;
