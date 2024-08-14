import { getServerSession } from 'next-auth'
import React from 'react'

const page = () => {
     const session = getServerSession();
  return (
    <div>
      This is About Page
    </div>
  )
}

export default page

