"use client"

import { HeaderListProps } from '../../../types'
import { HeaderList } from './MovieListElement'
import Link from 'next/link'

const Header = ({title, url} : HeaderListProps) => {
  return (
    <HeaderList>
        <h1>{title}</h1>
        <Link href={url}>Lihat Selengkapnya</Link>
    </HeaderList>
  )
}

export default Header