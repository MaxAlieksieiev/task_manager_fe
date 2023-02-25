import {FC, ReactElement, ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';

type ThemeContenxtProviderProps = {
  children: ReactElement | ReactNode;
}

export const ThemeContenxtProvider: FC<ThemeContenxtProviderProps> =
  ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
