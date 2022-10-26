import { DefaultThemeDomain } from '@src/domain/styles/theme/default_theme.contract'
import { color } from '@src/domain/styles/custom_colors/colors'

export const lightTheme: DefaultThemeDomain = {
  title: 'light',
  colors: {
    primary: color.blue.medio,
    secundary: color.red.dark,
    terciary: color.gold.medio,
    background: color.clean.clean,
    text: color.dark.medio,
  },
}
