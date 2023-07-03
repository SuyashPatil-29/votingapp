"use client"
import React from 'react'
import { useStateContext } from '../../../context/StateContext'

const Page = () => {
    const {votes, setVotes} = useStateContext()

    const handleClearLocalStorage = () => {
        setVotes([])
        localStorage.removeItem('votes')
      }
  return (
    <div>
       {votes.map(voter => {
        return (
            <div key={voter.name} className='flex flex-col items-center justify-center text-white'>
                {voter.name} :
                {voter.votes}
            </div>
        )
       })}

       <button onClick={handleClearLocalStorage}>Clear To Set Votes to 0</button>
    </div>
  )
}

export default Page