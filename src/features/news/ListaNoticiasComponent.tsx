import React from 'react'
import { INoticiasNormalizadas } from "./Noticias";

import { BotonLectura, DescripcionTarjetaNoticia, FechaTarjetaNoticia, ImagenTarjetaNoticia, ListaNoticias, TarjetaNoticia, TituloTarjetaNoticia } from './styled';

interface IListaProps {
    noticias: Array<INoticiasNormalizadas>;
    children: React.ReactNode;
    setModal: (modal: INoticiasNormalizadas | null) => void;
  }
  
function ListaNoticiasComponent({children, noticias, setModal }:IListaProps) {
  return (
    <div>
         <ListaNoticias>
        {noticias.map((noticia) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticia)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
     {children}
      </ListaNoticias>
    </div>
  )
}

export default ListaNoticiasComponent;
