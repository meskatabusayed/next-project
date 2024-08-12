import Link from 'next/link';
import React from 'react'

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data
    

}


const page = async () => {
    const postData = await getPosts();
    
  return (
    <div>
      <h6 className='text-center text-3xl font-bold'>All Posts</h6>
      <div className='grid grid-cols-3 gap-5'>
      {
        postData?.map((post) => (
            <div key={post.id} className='border-2 p-6 border-red-600'>
                <h1>{post.id}</h1>
                <h6>title : {post.title}</h6>
                <h6>body : {post.body}</h6>
                <button className='bg-blue-700 p-2 text-white rounded-md font-bold'><Link href={`/posts/${post.id}`}>See Deatils</Link></button>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default page
