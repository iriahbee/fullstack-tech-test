/** @format */

import Link from 'next/link'

export default function CharacterHeader() {
  return (
    <div className="text-left pl-20 pt-20 pb-28 bg-slate-200">
      <h1 className="text-6xl font-bold text-black">Rick and Morty</h1>
      <div className="mt-4">
        <Link href={'/'} className="link text-2xl pt-10">
          {' '}
          &lt; Back to Character Listing{' '}
        </Link>
      </div>
    </div>
  )
}
