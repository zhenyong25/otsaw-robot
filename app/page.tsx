import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center '>
      <div className='bg-gray-100 w-1/2 mx-auto rounded-md'>
        <form className='w-1/2 mx-auto my-7'>
          <div className='font-bold text-center text-lg'>OTSAW Robot</div>
          <div className='my-2'>Email</div>
          <input type='email' className='rounded-full w-full'></input>
          
          <div className='my-2'>Password</div>
          <input type="password" className='rounded-full w-full'></input>  

          <div className='my-4 flex justify-center items-center'>
            <button className='p-2 my-4 rounded-md bg-gray-400 text-white hover:bg-blue-500'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
