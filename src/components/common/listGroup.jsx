import React from "react";

const ListGroup = (props) => {
  const genres = props.genres;
  // const genres = props.genres;
  // console.log(genres);
  // console.log(genres);
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
      {/* <li>{genres[0].name}</li> */}
    </ul>
  );

  // return (
  //   {genres.map((genre) => (
  //     <li key={genre._id} className="list-group-item">
  //       {genre.name}
  //     </li>
  //   ))}
  // );
};

export default ListGroup;
