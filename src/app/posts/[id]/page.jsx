
import React from 'react'

const getPost = async(id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  
  return data;
}

export const generateMetadata = async({params}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await res.json();
  

  return {
    title : ` ${data.title}`,
    description : `${data.body}`,
    keywords : `${data.body.split(" ")}`
  }

}


const page = async ({params}) => {
  const {title , body} = await getPost(params.id);

  return (
    <div>
      <h6>Title : {title}</h6>
      <h6>Body : {body}</h6>
    </div>
  )
}

export default page;
