// import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/Constants.js'

const MovieDetails = () => {
  const { tittle } = useParams()
  const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${tittle}`

  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieQuery = await fetchData(endPoint)
        if (!movieQuery.ok) {
          throw new Error('Error de transferencia de datos')
        }
        const movieJson = await movieQuery.Json()
        setMovieDetails(movieJson)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [endPoint])

  return (
    <section>
      <picture>
        <img src={movieDetails.Poster} alt={`${movieDetails.Title} poster movie`} />
      </picture>
      <aside>
        <div className='title-container'>
          <h1>{movieDetails.Title}</h1>
        </div>
      </aside>
    </section>
  )
}

MovieDetails.propTypes = {}

export default MovieDetails
