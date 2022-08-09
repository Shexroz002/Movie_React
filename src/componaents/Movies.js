import Movie from "./Movie";
export default function Movies(props) {
  const {movies = []} = props;

  return(
    <div className="movies">
    {movies.length ? movies.map(move=>(
      <Movie key={move.ImdbID} {...move} />
    )):<h1>Nothing Found</h1>}
    </div>
  )
}