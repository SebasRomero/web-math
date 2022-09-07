import React from 'react'
import { context, useAuth } from '../context/AuthContext'
import Alert from './Alert'
import Navigation from './Navigation'


export function Home() {
  const { user, logout, loading } = useAuth()
  const handleLogout = async () => {
    console.log("bye!")
    try {
      await logout()
      
    } catch (error) {
      console.error(error);
    }
  }
  if (loading) return <h1>Loading</h1>
  return (
    <div>
      
      <li className="nav-item">
        <button className="btn btn-dark mr-3 text-white" onClick={handleLogout}>Log out</button>
      </li>
      {/* <Alert message="Adiós, vuelve pronto!" type="alert alert-primary alert-dismissible fade show" role="alert"/> */}
    </div>
  )

}

export default Home