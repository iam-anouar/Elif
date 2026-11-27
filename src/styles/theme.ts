export const theme = {
  colores: {
    primario: "#2f5d8a",
    primarioOscuro: "#244a6e",
    secundario: "#e0a83b",
    peligro: "#c0392b",
    exito: "#2e7d4f",
    fondo: "#f4f6f8",
    superficie: "#ffffff",
    texto: "#1f2933",
    textoSuave: "#616e7c",
    borde: "#d9dee4",
  },
  espacios: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radios: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    circulo: "50%",
  },
  medidas: {
    alturaBarra: "60px",
    anchoMenu: "220px",
  },
  fuente: "system-ui, 'Segoe UI', Roboto, sans-serif",
};

export type Tema = typeof theme;