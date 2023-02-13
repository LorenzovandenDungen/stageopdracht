import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    function submitHandler(){
        if (!email || !password) { 
            setError('Voer uw email en wachtwoord in')
            return 
        }
    }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>{isLoggingIn ? 'Login' : 'Registreren'}</h1>
        {error &&<div className='w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2'>{error}</div>}
        <input value={email} onChange={(e) => setEmail (e.target.value)} type="text" placeholder='Email' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        <input value={password} onChange={(e) => setPassword (e.target.value)} type="password" placeholder='Wachtwoord' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'/>
        <button onClick={submitHandler} className='w-full max-w-[30ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300'>
            <h2 className='relative z-20'>
            INLOGGEN
            </h2>
            </button>
            <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Registreren' }</h2>

    </div>
  )
}
