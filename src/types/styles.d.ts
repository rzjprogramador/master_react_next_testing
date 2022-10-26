import { DefaultThemeDomain } from '@src/domain/styles/theme/default_theme.contract'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeDomain {}
}
