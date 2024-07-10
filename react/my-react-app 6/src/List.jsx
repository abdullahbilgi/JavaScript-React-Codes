import PropType from "prop-types";

function List(props) {
  /* const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "cocount", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ]; */

  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //fruits.sort((a, b) => a.calories - b.calories);

  //const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
  /* const listItems = highCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  )); */

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List.propTypes = {
  category: PropType.string,
  items: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      name: PropType.string,
      calories: PropType.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
