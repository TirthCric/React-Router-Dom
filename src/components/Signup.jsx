import React from 'react'

function Signup() {
  return (
    <div className='w-full h-[90.5vh] flex items-center justify-center '>
            <div className='text-center p-6 border-2 rounded-xl'>
                <h2 className='text-3xl text-green-500 mb-6'>Sign Up</h2>
                <form action="" className='p-2'>
                    <div className='flex flex-col text-left text-lg text-gray-600 mb-2 '>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" id="nameId" placeholder='name' className='border-2 rounded-xl px-2 py-1 mt-1 placeholder:text-base' />
                    </div>
                    <div className='flex flex-col text-left text-lg text-gray-600 mb-2 '>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder='example@gmail.com' className='border-2 rounded-xl px-2 py-1 mt-1 placeholder:text-base' />
                    </div>
                    <div className='flex flex-col text-left text-lg text-gray-600 mb-2 '>
                        <label htmlFor="">Password</label>
                        <input type="password" name="pass" id="pass" placeholder='password' className='border-2 rounded-xl px-2 py-1 mt-1 placeholder:text-base'/>
                    </div>

                    <button onClick={(e) => e.preventDefault() } className='px-8 py-2 bg-green-500 text-white mt-4  rounded-xl'>Sign Up</button>
                </form>
            </div>
        </div>
  )
}

export default Signup