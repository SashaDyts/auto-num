export const NumbersList = ({ data }) => {
  return (
    <ul>
      {data.map(number => (
        <li key={number.number}>
          <p>{number.location}</p>
        </li>
      ))}
    </ul>
  );
};
