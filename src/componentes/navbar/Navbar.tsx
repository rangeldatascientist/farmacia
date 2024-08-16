import { Link, } from 'react-router-dom'

function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categoria</Link>
              <Link to='/categorias/criar' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'>Produto</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar