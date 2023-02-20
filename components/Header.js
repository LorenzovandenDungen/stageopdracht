import React, { useEffect, useState } from 'react'
import Modal from './Modal'

export default function Header() {
    const [openModal, setOpenModal] = useState(false); 

    return(
      <>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
          <hl className="text-3x1 select-none sm:text-6x1">TODO LIST</hl>
          <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3x1"></i>
          </div>
          </> 
          )
        }
