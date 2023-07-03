"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [votes, setVotes] = useState([])

  useEffect(() => {
    const storedVotes = localStorage.getItem('votes')
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes))
  }, [votes])

  return (
    <Context.Provider value={{ votes, setVotes }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)