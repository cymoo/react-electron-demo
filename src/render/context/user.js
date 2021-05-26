import React, { useState, createContext, useMemo, useContext } from 'react'

const UserContext = createContext(null)
const initialUserState = JSON.parse(localStorage.getItem('user'))

export const UserProvider = (props) => {
  const [user, setUser] = useState(initialUserState)
  const value = useMemo(() => ({ user, setUser }), [user])
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}

const useUser = () => {
  return useContext(UserContext)
}

export default useUser
