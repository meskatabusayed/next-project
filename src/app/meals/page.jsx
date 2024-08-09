import React from 'react'

const page = () => {
  return (
    <div className='p-12'>
      <h1>Choose Your Meals</h1>
      <p>Choose meals of your choice by serching...</p>
      <input type="text" placeholder='search meals...'/>
      <button className='bg-blue-700 p-2 text-white rounded-md font-bold'>Search</button>
    </div>
  )
}

export default page;
