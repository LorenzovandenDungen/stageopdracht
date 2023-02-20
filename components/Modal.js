import React from 'react';

export default function Modal(props) {
  const { setOpenModal } = props;

  return (
    <div className='fixed inset-0 bg-white text-slate-900 flex flex-col'>
      <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
        <h1>MENU</h1>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className='p-4 flex flex-col gap-3'>
        <h2>Logout</h2>
      </div>
    </div>
  )
}
