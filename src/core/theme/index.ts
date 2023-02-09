import {ThemeContext} from 'styled-components/native';
import {useContext} from 'react';
import {device} from './device';

export {device};

const theme = Object.freeze({
  device,
});

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
