import { DefaultThemeDomain } from '@src/domain/styles/theme/default_theme.contract'
import { color } from '@src/domain/styles/custom_colors/colors'

export const darkTheme: DefaultThemeDomain = {
  title: 'dark',
  colors: {
    primary: color.dark.dark,
    secundary: color.dark.medio2,
    terciary: color.dark.medio2,
    background: color.dark.medio2,
    text: color.clean.clean,
  },
}
