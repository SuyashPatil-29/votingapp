"use client"
import groq from 'groq'
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import VoterDisplay from './components/VoterDisplay'
import { useStateContext } from '../../context/StateContext'
import GroupDisplay from './components/GroupDisplay'

const Page = () => {
  const [voters, setVoters] = useState([])
  const [groups, setGroups] = useState([])
    const votersData = groq`
        *[_type == "voters"][0].members
      `
    const groupsData = groq`
        *[_type == "groups"][0].leaders
      `

  useEffect(() => {
    const fetchData = async () => {
      const fetchedVoters = await client.fetch(votersData)
      setVoters(fetchedVoters)
    
    }
    const fetchGroups = async () => {
      const fetchedGroups = await client.fetch(groupsData)
      setGroups(fetchedGroups)
    }

    fetchData()
    fetchGroups()
  }, [votersData, groupsData])

  const {votes, setVotes} = useStateContext()

  console.log(votes);

  return (
    <div className=''>
      <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1 gap-4 md:mt-0 my-12 h-[400px] place-content-center max-w-[80vw] mx-auto">
        {groups.map((group) => (
          <GroupDisplay group={group} key={group.name} />
        ))}
      </div>

      <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1 gap-4 md:mt-0 my-12 place-content-center max-w-[80vw] mx-auto mb-4">
        {voters.map((voter) => (
          <VoterDisplay voter={voter} key={voter.name} />
        ))}
      </div>
    </div>
  )
}

export default Page