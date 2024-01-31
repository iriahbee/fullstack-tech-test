/** @format */

import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import CharacterHeader from '@/components/character/CharacterHeader'
import CharacterProfile from '@/components/character/CharacterProfile'

const getCharacterById = gql`
  query Morty($id: ID!) {
    character(id: $id) {
      name
      status
      image
      origin {
        name
      }
      location {
        name
        type
        dimension
        id
        residents {
          id
        }
      }
      episode {
        id
        name
        air_date
        characters {
          id
        }
        episode
      }
    }
  }
`

export default function Character() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(getCharacterById, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const { character } = data
  const { location, episode } = character

  return (
    <>
      <div>
        <CharacterHeader />
        <CharacterProfile
          character={character}
          location={location}
          episode={episode}
        />
      </div>
    </>
  )
}
