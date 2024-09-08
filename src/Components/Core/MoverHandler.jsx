import React, { useContext } from 'react'
import { BlogContext } from '../../Context/BlogContext'

const MoverHandler = () => {
  const { BtnNextHandler } = useContext(BlogContext); 
  return (
    <div>
      <div className=' bg-black text-white p-3 flex   justify-around items-baseline '>
        <div className='  space-x-8'>
        <button onClick={()=>BtnNextHandler()}  className=' rounded-md bg-slate-400 p-2'>Next</button>
        <button className='  bg-white rounded-md text-black p-2'>Previous</button>

        </div>
        <button className='  bg-white rounded-md text-black p-2'>Page  0 of 6</button>
      
    </div>
    </div>
  )
}

export default MoverHandler