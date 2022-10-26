import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from '@src/components/structural/Header/styles'
import { color } from '@src/domain/styles/custom_colors/colors'

type HeaderProps = {
  toogleTheme(): void
}
// type HeaderProps = () => JSX.Element

const Header = ({ toogleTheme }: HeaderProps) => {
  const { title } = useContext(ThemeContext)

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
          offColor={color.exporadic.colorReactSwitch.off}
          onColor={color.exporadic.colorReactSwitch.on}
        />
      </Container>
    </>
  )
}

export default Header
