import styled from "styled-components"
import { colors } from "../styles/colors"

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
`
export const MainContainerLeft = styled.div`
  flex: 2;
  padding-left: 2rem;
  display: flex;
  width: 65%;
  height: 100%;
  position: relative;
  flex-direction: column;
`

export const MainContainerTopMenu = styled.div`
  width: 100%;
  z-index: 2;
  flex-basis: 15%;
  padding: 0.5rem 0;
  overflow: hidden;
`

export const MainContainerLeftGradient = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  background-image: linear-gradient(
    135deg,
    #007260 8.33%,
    rgb(0, 57, 63) 8.33%,
    rgb(0, 57, 63) 50%,
    #007260 50%,
    #007260 58.33%,
    rgb(0, 57, 63) 58.33%,
    rgb(0, 57, 63) 100%
  );
  background-size: 16.97px 16.97px;
  width: 6rem;
  -webkit-box-shadow: inset -60px 0px 40px 0px rgba(0, 56, 61, 0.8);
  -moz-box-shadow: inset -60px 0px 40px 0px rgba(0, 56, 61, 0.8);
  box-shadow: inset -60px 0px 50px 5px rgba(0, 56, 61, 0.95);
`
