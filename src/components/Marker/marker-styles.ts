import styled from "styled-components"

export const CustomMarker = styled.div<{
  color: string
}>`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid ${props => props.color};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const CustomPopup = styled.div<{
  color: string
}>`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: ${props => props.color};
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 0 0 -15px;

  div {
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
    background-repeat: no-repeat;
    background-size: 90%;
    position: relative;
    top: 2px;
  }

`
