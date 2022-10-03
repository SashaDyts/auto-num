import { ListItem, Error } from './NumberList.styled';

export const NumbersList = ({ data, whatToSearch }) => {
  return data.length === 0 ? (
    <Error>Не знайдено</Error>
  ) : (
    <ul>
      {data.map(number =>
        whatToSearch === 'location' ? (
          <ListItem key={number.number}>
            <p>{number[whatToSearch]}</p>
          </ListItem>
        ) : (
          <ListItem key={number.number}>
            <p>{number.location} :</p>
            <p>{number[whatToSearch].join(',').slice(6)}</p>
          </ListItem>
        )
      )}
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

// (
//         <ListItem key={number.number}>
//           <p>{number[whatToSearch]}</p>
//         </ListItem>
//       )
