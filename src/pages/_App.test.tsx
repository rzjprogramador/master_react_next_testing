import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import App from "@src/pages/_App"

describe("App", () => {
  test("deve renderizar o App com o texto: Alo mundo", () => {
    const { debug, getByText } = render(<App />)
    // debug()

    expect(getByText("Alo mundo")).toBeInTheDocument()
  })
})
