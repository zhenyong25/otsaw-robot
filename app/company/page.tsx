'use client'

import React from 'react'
import {useState, useEffect} from 'react'

const Company = () => {

  const [robots, setRobot] = useState(false); 
  const [modal, setModal] = useState(false); 
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <>
    {isClient &&
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='font-bold text-lg mt-12'>Company</div>
                <div className='flex justify-end my-4'>
                    <button className='p-2 rounded-full bg-gray-400 text-white text-sm'>Add Company</button>
                </div>
                <table className='w-full border-gray-500'>
                    <tr className='justify-between bg-gray-200 font-normal'>
                        <th>Company ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className=''>
                                <button className='p-2 m-2 rounded-md bg-blue-500 text-white text-sm'>Edit</button>
                                <button className='p-2 mt-2 rounded-md bg-red-600 text-white text-sm'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </table>
                <div>
                    
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default Company