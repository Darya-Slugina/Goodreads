import { Route, Link, useParams } from "react-router-dom";

// function getCurrentMatch(id) {
//     // fetch()
// }

export default function Matches() {
  // Hook -> react-router-dom
  const { matchId } = useParams();

  console.log(matchId);
  return (
    <div>
      <h2>Welcome to your matches</h2>
      <h3>You are looking at: {matchId}</h3>

      {/* <Link to="/matches/gotini">Vij Gotini: </Link>
      <Link to="/matches/negotini">Vij Ne gotini: </Link>

      <Route path="/matches/gotini">
        <h3>Gotini Matchove</h3>
      </Route>

      <Route path="/matches/negotini">
        <h3>Ne Gotini Matchove</h3>
      </Route> */}
    </div>
  );
}
