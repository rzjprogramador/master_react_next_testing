import { DefaultThemeDomain } from '@src/domain/contracts/default_theme'
import "styled-components"

declare module "styled-components" {
  export type DefaultTheme = DefaultThemeDomain
}
