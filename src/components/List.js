function List({ listItems }) {
  return (
    <ul>
      {listItems.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
}

export default List;
