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
  z-index: 6;
  flex-basis: 15%;
  padding: 0.5rem 0;
  // overflow: hidden;
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
  padding: 1rem 1rem 1rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 70%;
  width: 100%;
  z-index: 5;
`

export const MainContainerMenu = styled.div`
  width: 5.5%;
  height: 100%;
  border-left: 1px solid ${colors.green};
  position: relative;
`

export const MainContainerBox = styled.div`
  width: 5.5%;
  height: 100%;
  border-left: 1px solid ${colors.green};
  position: relative;
`

export const MainContainerInnerContent = styled.div`
  -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
  -moz-box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
  box-shadow: 0px 0px 40px 0px rgba(0, 57, 63, 0.8);
  width: 100%;
  height: 95%;
  flex: 2;
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
  outline: 0.1rem solid ${colors.green};
  max-height: 70%;
`
