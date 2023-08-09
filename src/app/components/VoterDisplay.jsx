import Image from 'next/image'
import React from 'react'
import urlFor from '../../../sanity/lib/urlFor'

const VoterDisplay = ({ voter }) => {

  return (
    <div className='bg-white/75 flex flex-col justify-between items-center gap-3 py-5 rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out'>
      <Image src={urlFor(voter.image).url()} alt={voter.name} width={100} height={100} />
      <h1 className='text-2xl text-black'>{voter.name}</h1>
    </div>
  )
}

export default VoterDisplay