"use client"

import React from 'react'
import {useState, useEffect} from 'react'

const Robot = () => {

  const [robots, setRobot] = useState(false); 
  const [edit, setEdit] = useState(false); 
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
                <div className='font-bold text-lg mt-12'>Robots</div>
                <div className='flex justify-end my-4'>
                    <button onClick={() =>setModal(true)} className='p-2 rounded-full bg-gray-400 text-white text-sm'>Add Robots</button>
                </div>
                <table className='w-full border-gray-500'>
                    <tr className='justify-between bg-gray-200 font-normal'>
                        <th>Robot ID</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturing Date</th>
                        <th>Status</th>
                        <th>Current Location</th>
                        <th>Company ID</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className=''>
                                <button onClick={()=>setEdit(true)} className='p-2 m-2 rounded-md bg-blue-500 text-white text-sm'>Edit</button>
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

        {modal &&
          <div className="fixed inset-6 w-3/4 md:w-1/3 md:inset-x-1/3 drop-shadow z-10">
          <div className="relative bg-white rounded-lg shadow my-2">
            <button
              type="button"
              onClick={()=>setModal(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            
            {/* ADD ROBOT FORM  */}
            <form className='w-5/6 mx-auto'>
                  <div className='text-center text-lg font-bold py-2'>
                    Robots
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3 ">
                      <div className='font-semibold'>Name</div>
                      <input
                        id="name"
                        type="text"
                        placeholder=""
                        className="border"
                      />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Model</div>
                      <select className="border">
                        <option>TRANSCAR</option>
                        <option>CAMELLO</option>
                        <option>O-R3</option>
                        <option>ASR</option>
                        <option>ROSIE</option>
                        <option>O-RX</option>
                        <option>TREX</option>
                        <option>AIRGUARD</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Manufacturing Date</div>
                      <input id="manufacture-date" type="date" className="border" value="" />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Status</div>
                      <select className="border" >
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Current Location</div>
                      <input id="password" placeholder="" className="border" />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Company ID</div>
                      <input id="password" placeholder="" className="border" />
                    </div>
                  </div>
                      
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inset-x-1/2 justify-center my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add Robot
                    </button>
                  </div>
              </form> 
          </div>
      </div>}

      {edit &&
          <div className="fixed inset-6 w-3/4 md:w-1/3 md:inset-x-1/3 drop-shadow z-10">
          <div className="relative bg-white rounded-lg shadow my-2">
            <button
              type="button"
              onClick={()=>setEdit(false)}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            
            {/* ADD ROBOT FORM  */}
            <form className='w-5/6 mx-auto'>
                  <div className='text-center text-lg font-bold py-2'>
                    Robots
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3 ">
                      <div className='font-semibold'>Name</div>
                      <input
                        id="name"
                        type="text"
                        placeholder=""
                        className="border"
                      />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Model</div>
                      <select className="border">
                        <option>TRANSCAR</option>
                        <option>CAMELLO</option>
                        <option>O-R3</option>
                        <option>ASR</option>
                        <option>ROSIE</option>
                        <option>O-RX</option>
                        <option>TREX</option>
                        <option>AIRGUARD</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Manufacturing Date</div>
                      <input id="manufacture-date" type="date" className="border" value="" />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Status</div>
                      <select className="border" >
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Current Location</div>
                      <input id="password" placeholder="" className="border" />
                    </div>
                  </div>

                  <div className="grid w-full items-center gap-2 my-2">
                    <div className="flex flex-col space-y-3">
                      <div className='font-semibold'>Company ID</div>
                      <input id="password" placeholder="" className="border" />
                    </div>
                  </div>
                      
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inset-x-1/2 justify-center my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Save Changes
                    </button>
                  </div>
              </form> 
          </div>
      </div>}
    </>
  )
}

export default Robot