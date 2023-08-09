"use client"
import Image from 'next/image'
import React from 'react'
import urlFor from '../../../sanity/lib/urlFor'
import { useStateContext } from '../../../context/StateContext'
import { toast } from 'react-hot-toast'

const GroupDisplay = ({group}) => {

  const { votes, setVotes } = useStateContext()

  const handleVoteClick = () => {
    const existingVote = votes.find((vote) => vote.name === group.name)
    const audio = new Audio("assets/beep-07a.wav")

    audio.play()

    if (existingVote) {
      const updatedVotes = votes.map((vote) => {
        if (vote.name === group.name) {
          return {
            ...vote,
            votes: vote.votes + 1
          }
        }
        return vote
      })
      setVotes(updatedVotes)
    } else {
      const updatedVotes = [...votes, { name: group.name, votes: group.votes + 1 }]
      setVotes(updatedVotes)
    }

    toast.success("Vote added")
    
  }

  return (
    <div onClick={handleVoteClick} className='flex flex-col justify-between items-center gap-3'>
      <Image src={urlFor(group.image).url()} alt={group.name} width={100} height={100} />
      <h1 className='text-2xl text-white'>{group.name}</h1>
    </div>
  )
}

export default GroupDisplay