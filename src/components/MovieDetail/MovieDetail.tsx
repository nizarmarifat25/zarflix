import React from 'react'
import { MovieDetailWrapper } from './MovieDetailElement'
import Link from 'next/link'

const MovieDetail = () => {
  return (
    <MovieDetailWrapper>
        <Link href='/'>Kembali</Link>
    </MovieDetailWrapper>
  )
}

export default MovieDetail