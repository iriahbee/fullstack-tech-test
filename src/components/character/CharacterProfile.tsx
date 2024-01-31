/** @format */

import { ICharacter, ILocation, IEpisode } from '@/types/types'
import Image from 'next/image'


interface CharacterProps {
  character: ICharacter
  location: ILocation
  episode: IEpisode
}

export default function CharacterProfile({
  character,
  location,
  episode
}: CharacterProps) {

  const residentCount = location.residents.length
  const episodeCount = episode.length
  const firstEpisode = episode[0]
  const firstCharacterCount = firstEpisode.characters.length
  const lastEpisode = episode.length > 0 ? episode[episode.length - 1] : null
  const lastCharacterCount = lastEpisode.characters.length

  return (
    <div className=" flex flex-col-2 gap-10 pl-20  bg-white">
      <div>
        <Image
          className=" rounded-full"
          src={character.image}
          alt={''}
          width={300}
          height={300}
        />
        <div>
          <h2 className="mt-8 font-sans font-bold text-4xl">
            Locations Details:
          </h2>
          <p className=" text-xl pt-4"> Name: {location.name} </p>
          <p className=" text-xl "> Type: {location.type} </p>
          <p className=" text-xl "> Dimension: {location.dimension} </p>
          <p className=" text-xl "> No.of Residents: {residentCount} </p>
        </div>
        <div>
          <h2 className="mt-8 font-sans font-bold text-4xl">
            Episodes &#123;{episodeCount}&#125; :
          </h2>
          <p className=" text-xl pt-4"> First Appearance: {firstEpisode.name}  & {firstEpisode.episode}</p>
          <p className=" text-xl "> First Appearance AirDate: {firstEpisode.air_date} </p>
          <p className=" text-xl "> First Appearance Character Count: {firstCharacterCount} </p>
          <p className=" text-xl "> Last Appearance: {lastEpisode.name} & {lastEpisode.episode} </p>
          <p className=" text-xl "> Last Appearance Air Date: {lastEpisode.air_date} </p>
          <p className=" text-xl "> Last Appearance Character Count: {lastCharacterCount} </p>
          
        </div>
      </div>
      <div className="pt-10">
        <h2 className="font-sans font-bold text-6xl">{character.name}</h2>
        <p className=" text-2xl pt-6"> Status: {character.status} </p>
        <p className=" text-2xl "> Orgin: {character.origin.name} </p>
      </div>
      <div></div>
    </div>
  )
}
