import Head from "next/head"
import { ThemeProvider, DefaultTheme } from "styled-components"

import Header from "@src/components/structural/Header"
import GlobalStyles from "@src/styles/global/GlobalStyles"
import { light } from "@src/styles/theme/light"
import { dark } from "@src/styles/theme/dark"
import { usePersistedStateTheme } from "@src/utils/use_persisted_state_theme"

const Home = () => {
  const [theme, setTheme] = usePersistedStateTheme<DefaultTheme>("theme", light)
  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <div>Alo Mundo - Home</div>
      </div>
    </ThemeProvider>
  )
}

export default Home
