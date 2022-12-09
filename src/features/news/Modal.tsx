import React from "react";
import { INoticiasNormalizadas } from "./Noticias";
import { CloseButton as Close } from "../../assets";
import {
  CloseButton,
  ContenedorModal,
  CotenedorTexto,
  DescripcionModal,
  ImagenModal,
  TarjetaModal,
  TituloModal,
} from "./styled";

interface IModalProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  children: React.ReactNode;
  setModal: (modal: INoticiasNormalizadas | null) => void;
  altImagen: string;
}

const Modal = ({
  titulo,
  descripcion,
  imagen,
  children,
  setModal,
  altImagen,
}: IModalProps) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={imagen} alt={altImagen} />
        <CotenedorTexto>
          <TituloModal>{titulo}</TituloModal>
          <DescripcionModal>{descripcion}</DescripcionModal>
          {children}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default Modal;
