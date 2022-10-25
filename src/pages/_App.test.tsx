import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import Home from "@src/pages"

describe("<Home />", () => {
  test("deve renderizar a Home com o texto: Alo Mundo - Home", () => {
    const { debug, getByText } = render(<Home />)
    // debug()

    expect(getByText("Alo Mundo - Home")).toBeInTheDocument()
  })
})
