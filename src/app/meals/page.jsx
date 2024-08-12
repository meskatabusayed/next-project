import Meals from '@/components/Meals';
import React from 'react'
import styles from './styles.module.css';

export const metadata = {
  title : {
    absolute : "meajs"
  },
  description: "this is meals page",
  keywords : ["meal" , "meals done" , "Meskat"]
};



const page = () => {
  return (
    <div className='p-12'>
      <h1>Choose Your Meals</h1>
      <p className={styles.tomato}>Choose meals of your choice by serching...</p>
      <Meals/>
    </div>
  )
}

export default page;
