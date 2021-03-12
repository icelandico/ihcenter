import styled from "styled-components"
import { colors } from "../../styles/colors"

export const FinderInput = styled.input`
  border: 2px solid ${colors.green};
  background-color: transparent;
  width: 100%;
  height: 50%;
  padding-left: 15px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.green};
  }
`
