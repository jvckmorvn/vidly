import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m !== movie);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return <h4 className="p-3">There are no movies in the database.</h4>;

    return (
      <React.Fragment>
        <h4 className="p-3">Showing {count} movies in the database...</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate (£/Day)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;

// {this.movies.map((movie) => (
//   <Movie key={movie.id} onDelete={this.handleDelete} movie={movie} />
// ))}
