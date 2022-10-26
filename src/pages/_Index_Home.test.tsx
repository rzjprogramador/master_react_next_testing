import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Head from '@src/pages'
import Home from '@src/pages'

describe.todo('Document', () => {
  test('deve mostrar titulo da Home definido no Head via Document', () => {
    const { debug, getByText } = render(<Head />)
    // debug()

    expect(getByText('Bem vindo a Home2')).toBeInTheDocument()
  })
  // TODO : TESTAR TITULO DO HEAD
})

describe('<Home />', () => {
  test('deve renderizar a Home com o texto: Alo Mundo - Home', () => {
    const { debug, getByText } = render(<Home />)
    // debug()

    expect(getByText('Alo Mundo - Home')).toBeInTheDocument()
  })
})
