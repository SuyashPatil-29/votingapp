"use client"
import Image from 'next/image'
import React from 'react'
import urlFor from '../../../sanity/lib/urlFor'
import { useStateContext } from '../../../context/StateContext'
import { toast } from 'react-hot-toast'

const VoterDisplay = ({ voter }) => {
  const { votes, setVotes } = useStateContext()

  const handleVoteClick = () => {
    const existingVote = votes.find((vote) => vote.name === voter.name)
    const audio = new Audio("assets/beep-07a.wav")

    audio.play()

    if (existingVote) {
      const updatedVotes = votes.map((vote) => {
        if (vote.name === voter.name) {
          return {
            ...vote,
            votes: vote.votes + 1
          }
        }
        return vote
      })
      setVotes(updatedVotes)
    } else {
      const updatedVotes = [...votes, { name: voter.name, votes: voter.votes + 1 }]
      setVotes(updatedVotes)
    }

    toast.success("Vote added")
    
  }

  return (
    <div onClick={handleVoteClick} className='bg-white/75 flex flex-col justify-between items-center gap-3 py-5 rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out'>
      <Image src={urlFor(voter.image).url()} alt={voter.name} width={100} height={100} />
      <h1 className='text-2xl text-black'>{voter.name}</h1>
    </div>
  )
}

export default VoterDisplay