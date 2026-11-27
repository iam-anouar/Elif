import { Global, css, useTheme } from "@emotion/react";

function EstilosGlobales() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: ${theme.fuente};
          background: ${theme.colores.fondo};
          color: ${theme.colores.texto};
        }
      `}
    />
  );
}

export default EstilosGlobales;