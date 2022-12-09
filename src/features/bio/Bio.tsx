import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";
import { StyledButton, StyledBioContainer, StyledContenedorBotones, StyledBioImg, StyledBioNombre, StyledBioDescripcion } from "./styles";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <StyledButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        bioActiva={bioActiva.id === nombre}
      >{nombre}</StyledButton>
    ));
  };

  return (
    <StyledBioContainer>
      <StyledContenedorBotones>{crearBotones()}</StyledContenedorBotones>
      <div>
        <div>
          <StyledBioImg
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className={styles.bioImagen}
          />
        </div>
        <div>
          <StyledBioNombre>{bioActiva.nombre}</StyledBioNombre>
          <StyledBioDescripcion>{bioActiva.descripcion}</StyledBioDescripcion>
        </div>
      </div>
    </StyledBioContainer>
  );
};

export default Bio;
