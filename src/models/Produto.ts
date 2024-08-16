import Categoria  from "./Categoria";

export default interface Produto {
  id: number;
 produto: string;
  
  categoria?: Categoria | null;
}