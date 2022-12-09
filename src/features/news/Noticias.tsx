import { useEffect, useState } from "react";
import { getMinutosTranscurridos, upperCaseTitle } from "./utils";
import { SuscribeImage } from "../../assets";
import { obtenerNoticias } from "./fakeRest";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
  BotonSuscribir,
} from "./styled";
import Modal from "./Modal";
import ListaNoticiasComponent from "./ListaNoticiasComponent";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();
      const data = respuesta.map((noticia) => {
        const titulo = upperCaseTitle(noticia.titulo);
        const minutosTranscurridos = getMinutosTranscurridos(noticia.fecha);

        return {
          id: noticia.id,
          titulo,
          descripcion: noticia.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: noticia.esPremium,
          imagen: noticia.imagen,
          descripcionCorta: noticia.descripcion.substring(0, 100),
        };
      });
      setNoticias(data);
    };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticiasComponent noticias={noticias} setModal={setModal}>
        {modal && (
          <Modal
            titulo={
              modal.esPremium ? "Suscríbete a nuestro Newsletter" : modal.titulo
            }
            descripcion={
              modal.esPremium
                ? "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
                : modal.descripcion
            }
            imagen={modal.esPremium ? SuscribeImage : modal.imagen}
            altImagen="mr-burns-excelent"
            setModal={setModal}
          >
            {modal.esPremium && (
              <BotonSuscribir
                onClick={() =>
                  setTimeout(() => {
                    alert("Suscripto!");
                    setModal(null);
                  }, 1000)
                }
              >
                Suscríbete
              </BotonSuscribir>
            )}
          </Modal>
        )}
      </ListaNoticiasComponent>
    </ContenedorNoticias>
  );
};

export default Noticias;
