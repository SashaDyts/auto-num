import { ListItem, Error } from './NumberList.styled';

export const NumbersList = ({ data }) => {
  return data.length === 0 ? (
    <Error>Не знайдено</Error>
  ) : (
    <ul>
      {data.map(number => (
        <ListItem key={number.number}>
          <p>{number.location}</p>
        </ListItem>
      ))}
    </ul>
  );

  // return (
  // <ul>
  //   {data.map(number => (
  //     <li key={number.number}>
  //       <p>{number.location}</p>
  //     </li>
  //   ))}
  // </ul>
  // );
};
