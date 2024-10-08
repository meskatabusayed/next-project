"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  // console.log(session);
  const links = [
    {
      title : "Home",
      path : '/'

    },
    {
      title : "Posts",
      path : '/posts'

    },
    {
      title : "Meals",
      path : '/meals'

    },
    {
      title : "Gallery",
      path : '/gallery'

    },
    {
      title : "About",
      path : '/about'

    },
   
  ]

  const handler = () => {
    router.push('/api/auth/signin');
  }

  if(pathName.includes('dashboard')){
    return (
      <div>
        <h1 className='text-center text-blue-100 bg-blue-800'>Dashboard Layout</h1>
      </div>
    )
  }


  return (
    
      <nav className='bg-red-50 px-6 py-4 flex justify-between items-center'>
        <h6 className='text-3xl'>Meskat</h6>
        <ul className='flex justify-between items-center space-x-4'>
            {
              links?.map((link) => <Link className={`${pathName === link.path && "text-red-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
        </ul>
        <Link href={'api/auth/signup'}>
        <button className='bg-blue-700 mr-3 p-2 text-white rounded-md font-bold'>
          SignUp
        </button>
        </Link>
        {
          session.status !== 'authenticated' ? <button onClick={handler} className='bg-blue-700 p-2 text-white rounded-md font-bold'>
          login
        </button> : <button  onClick={() => signOut()} className='bg-red-700 p-2 text-white rounded-md font-bold'>
          logout
        </button>
        }

        <div>
          <h6>{session?.data?.user?.name}</h6>
          <br />
          <h6>{session?.data?.user?.type}</h6>
          

        </div>
      </nav>
    
  )
}
