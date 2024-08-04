import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const {images, isloading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isloading && (<h2> Cargando </h2>)
      }


      <div className="card-grid">

        {images.map((image) => (
          //tambien podrias enviar todas los parametros mediante ...Image pero es medio desordenado, solo
          //solo se cuando el objeto es grande y tiene michas propiedades.
          < GiftItem 
            key={image.id}
            title={image.title}
            url={image.url}
          />

        ))} 

      </div>
    </>
  )
}
