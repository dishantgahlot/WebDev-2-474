import React, { useEffect, useState } from 'react'
import './App.css'
import Forms from './components/Forms'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {

    fetchData()

  }, [])

  async function fetchData() {

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )

    const data = await response.json()

    // first user only
    setUser(data[0])
  }

  return (
    <div>

      {user ? (

        <Forms
          name={user.name}
          email={user.email}
          id={user.id}
        />

      ) : (

        <h1>Loading...</h1>

      )}

    </div>
  )
}

export default App