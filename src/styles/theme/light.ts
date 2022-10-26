import { DefaultTheme } from 'styled-components'
import { lightTheme } from '@src/domain/styles/theme/light'

export const light: DefaultTheme = {
  title: lightTheme.title,
  colors: {
    primary: lightTheme.colors.primary,
    secundary: lightTheme.colors.secundary,
    terciary: lightTheme.colors.terciary,
    background: lightTheme.colors.background,
    text: lightTheme.colors.text,
  },
}
