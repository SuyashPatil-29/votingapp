import Image from 'next/image'
import React from 'react'
import urlFor from '../../../sanity/lib/urlFor'

const GroupDisplay = ({group}) => {
  return (
    <div className='flex flex-col justify-between items-center gap-3'>
      <Image src={urlFor(group.image).url()} alt={group.name} width={100} height={100} />
      <h1 className='text-2xl text-white'>{group.name}</h1>
    </div>
  )
}

export default GroupDisplay