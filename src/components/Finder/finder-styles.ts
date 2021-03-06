import styled from "styled-components"
import { colors } from "../../styles/colors"
import { chooseColor } from "../../utils/articleTypeColor"

export const FinderInput = styled.input`
  border: 0.2rem solid ${colors.green};
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  color: ${colors.white};
  transition: 0.25s;

  &::placeholder {
    color: ${colors.green};
  }

  &:focus {
    border-color: ${colors.lightBrown};
    outline: none;
  }
`
export const FinderResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: auto;
  max-height: 21rem;
  background-color: ${colors.darkGreen};
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
  isActive: boolean
}>`
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: 0.1rem solid ${colors.green};
  color: ${colors.lightBrown};
  padding: 0.5rem 0 0.5rem 0.25rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.15s;
  background-color: ${props => (props.isActive ? colors.green : "transparent")};

  &:nth-last-child {
    border-bottom: none;
  }
`

export const ResultIcon = styled.div`
  width: 2rem;
  margin-right: 0.75rem;
`

export const ResultText = styled.span`
  display: inline-block;
  line-height: 2rem;
`

export const ClearInput = styled.span`
  position: absolute;
  right: 2rem;
  top: 0.75rem;
  cursor: pointer;
  background: ${colors.lightBrown};

  &:before {
    content: "";
    height: 1.5rem;
    border-left: 3px solid ${colors.lightBrown};
    position: absolute;
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    height: 1.5rem;
    border-left: 3px solid ${colors.lightBrown};
    position: absolute;
    transform: rotate(-45deg);
  }
`
