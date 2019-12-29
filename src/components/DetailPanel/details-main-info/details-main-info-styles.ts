import styled from "styled-components"
import { colors } from "../../../styles/colors"

export const DetailsTopContainer = styled.div`
  margin-top: -40px;
`

export const ElementTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  border-bottom: 1px solid ${colors.lightBrown};
  margin-bottom: 10px;
  padding-bottom: 10px;
`

export const ElementDate = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${colors.lightBrown};
`

export const MainImage = styled.div`
  position: relative;
  top: -50px;
  width: 160px;
  border: 6px solid ${colors.darkGreen};
  height: 160px;
  border-radius: 50%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6x-rKSUYJJ6aa673JE2ZsjVcvhoIL6v3tAI_1X8Br56U4VrrL&s");
  background-size: cover;
  margin: 0 auto;
`

export const DetailsContainer = styled.div`
  max-height: 60%;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  scrollbar-width: thin;
  scrollbar-color: teal red;

  &::-webkit-scrollbar-track {
    background: gray;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 6px;
    border: 3px solid red;
  }

  &::after {
    /* content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    /* box-shadow: inset 0px -65px 55px 0px rgba(0, 57, 63, 0.9); 
    background: linear-gradient(transparent 550px, white); */
  }
`

export const DetailsText = styled.p`
  font-size: 16px;
  color: ${colors.lightBrown};
`
