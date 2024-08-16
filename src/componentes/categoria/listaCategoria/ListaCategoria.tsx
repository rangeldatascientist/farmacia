import { Dna } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { listar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/cardCategoria';
import { useEffect, useState } from 'react';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias);
    } catch (error: any) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;