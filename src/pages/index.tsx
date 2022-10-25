import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { useState } from "react"

import Header from "@src/components/structural/Header"
import GlobalStyles from "@src/styles/global/GlobalStyles"
import { light } from "@src/styles/theme/light"
import { dark } from "@src/styles/theme/dark"

export default function Home() {
  const [theme, setTheme] = useState(light)
  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <>
      <Head>
        <title>Bem vindo a Home</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <div>Alo Mundo - Home</div>
      </ThemeProvider>
    </>
  )
}
