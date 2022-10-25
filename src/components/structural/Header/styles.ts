import styled from "styled-components"

// import { HeaderStructure } from "@src/styles/_customs/definers/header_structure"

export const Container = styled.div`
  height: 3.75rem;
  background: ${(props) => props.theme.colors.primary};
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`
