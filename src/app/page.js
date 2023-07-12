"use client"
import groq from 'groq'
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import VoterDisplay from './components/VoterDisplay'
import { useStateContext } from '../../context/StateContext'

const Page = () => {
  const [voters, setVoters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const votersData = groq`
        *[_type == "voters"][0].members
      `
      const fetchedVoters = await client.fetch(votersData)
      setVoters(fetchedVoters)
    }

    fetchData()
  }, [])

  const {votes, setVotes} = useStateContext()

  console.log(votes);

  return (
    <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1 gap-4 md:mt-0 my-12 min-h-screen place-content-center max-w-[80vw] mx-auto">
      {voters.map((voter) => (
        <VoterDisplay voter={voter} key={voter.name} />
      ))}
    </div>
  )
}

export default Page