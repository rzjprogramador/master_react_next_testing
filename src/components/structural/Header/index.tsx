import React, { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { shade } from "polished"

import { Container } from "@src/components/structural/Header/styles"

type HeaderProps = {
  toogleTheme(): void
}
// type HeaderProps = () => JSX.Element

const Header = ({ toogleTheme }: HeaderProps) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <>
      <Container>
        Header
        <Switch
          onChange={toogleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </Container>
    </>
  )
}

export default Header
