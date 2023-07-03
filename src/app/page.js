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
    <div className="grid grid-cols-4 gap-4 h-screen place-content-center w-screen pl-[250px]">
      {voters.map((voter) => (
        <VoterDisplay voter={voter} key={voter.name} />
      ))}
    </div>
  )
}

export default Page