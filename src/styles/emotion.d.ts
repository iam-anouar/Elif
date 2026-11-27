import "@emotion/react";
import type { Tema } from "./theme";

// Le dice a TypeScript que el "theme" de Emotion tiene la forma de nuestro tema
declare module "@emotion/react" {
  export interface Theme extends Tema {}
}