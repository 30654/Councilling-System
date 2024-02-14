import React, { useState } from 'react'

const FetchRegistrations = () => {
      const     res,setRes  =useState(null)
if  ( res==null  ) return <button onClick={()=>fetchData()} >Get Registrations</button>

        axios.get('http://localhost:8080/retrive',{})
        then()          
    return (
    <div>FetchRegistrations</div>
  )
}
export default FetchRegistrationsfce
