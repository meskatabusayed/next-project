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
      {
        postData?.map((post) => (
            <div key={post.it} className='border-2 p-6'>
                <h6>{post.title}</h6>
                <h6>{post.description}</h6>

            </div>
        ))
      }
    </div>
  )
}

export default page
