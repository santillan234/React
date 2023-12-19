import { Link } from 'react-router-dom';

export default function Apis () {
  return (
    <>
      <Link to="/apis/cat"><h2>App de Gatitos</h2></Link>
      <Link to="/apis/peliculas"><h2>App de Peliculas</h2></Link>
      <Link to="/apis/breaking-bad"><h2>App de Breaking Bad</h2></Link>
    </>
  )
}