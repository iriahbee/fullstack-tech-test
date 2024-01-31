/** @format */

import { useQuery, gql } from '@apollo/client'
import ProfileCard from '@/components/profile/ProfileCard'
import Header from '@/components/header/Header'

const getCharacters = gql`
  query Characters($name: String!) {
    characters(filter: { status: "Alive", name: $name }) {
      info {
        count
      }
      results {
        name
        gender
        species
        image
        id
      }
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(getCharacters, {
    variables: { name: 'Morty' }
  })
  return (
    <div className=" bg-white min-h-full">
      <Header />
      <div className="ml-24 pb-16 mt-10 grid grid-cols-6 gap-12">
        {data?.characters.results.map((p) => (
          <ProfileCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  )
}
