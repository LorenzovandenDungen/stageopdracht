import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function UserDashboard() {
const { userInfo } = useAuth()
const [addTodo, setAddTodo] = useState(false)
const [todo, setTodo] = useState('')
return (
    <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5'>
        <input 
            type="text" 
            placeholder="Enter todo" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
            className="outline-none p-3 text-base sm:text-lg text-slate-900"
        />
        {userInfo && (
            <>
                {/* Your code here */}
            </>
        )}
        <button 
            className="text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30"
        >
            ADD TODO
        </button>
    </div>
)


}
