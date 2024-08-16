import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Categoria</div>
              <div className='hover:underline'>Cadastrar categoria</div>
              <div className='hover:underline'>Produto</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar