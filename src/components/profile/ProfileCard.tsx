/** @format */

import { ICharacterCore } from '@/types/types'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ProfileCard({
  id,
  name,
  gender,
  species,
  image
}: ICharacterCore) {
  const router = useRouter()

  return (
    <div>
      <div className=" rounded-none">
        <Image src={image} alt="" width={144} height={144} />
      </div>
      <div className="font-sans mt-3 mb-3 text-sm">
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
      </div>
      <div className="">
        <button
          type="button"
          onClick={() => router.push(`/character/${id}`)}
          className=" btn btn-secondary rounded-none w-36 text-white"
        >
          View Profile
        </button>
      </div>
    </div>
  )
}
