import React, {useState, useEffect} from 'react';
import  ReactDom from 'react-dom'

export default function Modal(props) {
     const { setOpenModal } = props;
     const [_document, set_document] = useState(null)

     useEffect(() => {
      setDocument(document)
  }, [])
  
  if (!_document) return null;
  
  return ReactDOM.createPortal(
      <div className='fixed inset-0 bg-white text-slate-900 flex flex-col'>
          <div className="flex items-center justify-end border-b border-solid border-slate-900 p-4"> 
              <h1>MENU</h1> 
              <i className="fa-solid fa-xmark" onClick={() => setOpenModal(false)}></i>  
          </div>
          <div className="p-4 flex flex-col gap-3">
              <h2>Logout</h2>
          </div>
      </div>,
      _document.getElementById('portal')
  )
}
