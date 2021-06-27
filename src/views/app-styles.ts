import styled from "styled-components"
import { colors } from "../styles/colors"

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
`
export const MainContainerLeft = styled.div`
  display: grid;
  grid-template-rows: 12rem 1fr 12rem;
  padding-left: 2rem;
  width: 65%;
  height: 100%;
  position: relative;
`

export const MainContainerTopMenu = styled.div`
  width: 100%;
  z-index: 6;
  padding: 0.5rem 0 0 5%;
`

export const MainContainerLeftGradient = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  background-image: linear-gradient(
    135deg,
    ${colors.green} 8.33%,
    rgb(0, 57, 63) 8.33%,
    rgb(0, 57, 63) 50%,
    ${colors.green} 50%,
    ${colors.green} 58.33%,
    rgb(0, 57, 63) 58.33%,
    rgb(0, 57, 63) 100%
  );
  background-size: 16.97px 16.97px;
  width: 6rem;
  -webkit-box-shadow: inset -60px 0px 40px 0px rgba(0, 56, 61, 0.8);
  -moz-box-shadow: inset -60px 0px 40px 0px rgba(0, 56, 61, 0.8);
  box-shadow: inset -60px 0px 50px 5px rgba(0, 56, 61, 0.95);
`

export const MainContainerContent = styled.div`
  grid-template-columns: 1fr 95%;
  display: grid;
  padding: 0 1rem 1rem 0;
  border-top: 1px solid ${colors.green};
  border-left: 1px solid ${colors.green};
  grid-template-rows: 2.5rem 1fr;
  width: 100%;
  z-index: 5;
`

export const MainContainerMenu = styled.div`
  height: 100%;
  position: relative;
`

export const MainContainerBox = styled.div`
  height: 100%;
  border-left: 1px solid ${colors.green};
  position: relative;
`

export const MainContainerInnerContent = styled.div`
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
  box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
`

export const MainContainerRight = styled.div`
  flex: 1;
  background-image: linear-gradient(
          135deg,
          ${colors.green} 8.33%,
          rgb(0, 57, 63) 8.33%,
          rgb(0, 57, 63) 50%,
          #007260 50%,
          #007260 58.33%,
          rgb(0, 57, 63) 58.33%,
          rgb(0, 57, 63) 100%
  );
  background-size: 10.97px 10.97px;
  width: 100%;
  height: 100%;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
`

export const MainContainerRightBox = styled.div`
  flex-basis: 70%;
  border: 0.1rem solid ${colors.green};
  max-height: 70%;
  margin-top: 12rem;
`
