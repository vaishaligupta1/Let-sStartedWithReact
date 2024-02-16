function Filter(props) {
  const FilterHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <div>
      <label>filter by year</label>
      <select onChange={FilterHandler} value={props.filterYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default Filter;
