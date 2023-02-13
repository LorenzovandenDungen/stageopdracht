import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function submitHandler(){
        if (!email || !password) { return }
    }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl'>LOGIN</h1>
        <input value={email} onChange={(e) => setEmail (e.target.value)} type="text" placeholder='Email' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        <input value={password} onChange={(e) => setPassword (e.target.value)} type="password" placeholder='Wachtwoord' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        <button className='w-full max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300'>
            <h2 className='relative z-20'>
            INLOGGEN
            </h2>
            </button>

    </div>
  )
}
