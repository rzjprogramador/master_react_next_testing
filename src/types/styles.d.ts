import { DefaultThemeDomain } from "@src/domain/contracts/default_theme"
import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeDomain {}
}
