import React from 'react'


export default function User(props) {
  const {data}=props
  return (
    <div>
      <h1>User</h1>
      <h4>{data.name}</h4>
      <h4>{data.Age}</h4>
 


    </div>

  )
}
