import styled from "styled-components"
import { colors } from "../../styles/colors"
import { chooseColor } from "../../utils/articleTypeColor";

export const FinderInput = styled.input`
  border: 0.2rem solid ${colors.green};
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.green};
  }
`
export const FinderResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: auto;
  max-height: 21rem;
  background-color: ${colors.green};
  border: 0.1rem solid ${colors.green};
  border-top: transparent;
  overflow-y: auto;
`

export const FinderContainer = styled.div`
  width: 100%;
  height: 3rem;
  position: relative;
`

export const SingleResult = styled.div<{
  type: string
}>`
  width: 100%;
  height: 3rem;
  border-bottom: 0.1rem solid ${colors.darkGreen};
  border-left: 0.5rem solid ${props => chooseColor(props.type)};
  color: ${colors.lightBrown};
  padding: 0.5rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background-color: ${colors.darkGreen};
    // color: ${colors.green};
  }

  &:nth-last-child {
    border-bottom: none;
  }
`
