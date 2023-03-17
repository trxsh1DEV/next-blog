import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // Fazendo merge agregar/juntar com o default theme do styled components
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
