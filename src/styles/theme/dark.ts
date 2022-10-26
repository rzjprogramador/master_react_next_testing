import { darkTheme } from '@src/domain/styles/theme/dark'
import { DefaultTheme } from 'styled-components'

export const dark: DefaultTheme = {
  title: darkTheme.title,
  colors: {
    primary: darkTheme.colors.primary,
    secundary: darkTheme.colors.secundary,
    terciary: darkTheme.colors.terciary,
    background: darkTheme.colors.background,
    text: darkTheme.colors.text,
  },
}
