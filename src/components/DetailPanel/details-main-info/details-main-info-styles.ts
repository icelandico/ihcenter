import styled from "styled-components"
import { colors } from "../../../styles/colors"
import wikiIcon from "../../../static/icons/wiki.svg"

export const DetailsTopContainer = styled.div`
  position: relative;
  margin-top: -4rem;
`

export const ElementTitle = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  border-bottom: 1px solid ${colors.lightBrown};
  padding-bottom: 1rem;
  margin: 0 auto 1rem;
  width: 75%;
`

export const ElementDate = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${colors.lightBrown};
`

export const MainImage = styled.div`
  position: relative;
  top: -50px;
  width: 16rem;
  border: 0.5rem solid ${colors.darkGreen};
  height: 16rem;
  border-radius: 50%;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6x-rKSUYJJ6aa673JE2ZsjVcvhoIL6v3tAI_1X8Br56U4VrrL&s");
  background-size: cover;
  margin: 0 auto;
`

export const DetailsContainer = styled.div`
  height: 62%;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  margin-bottom: 1rem;
  padding: 0 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: gray;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 0.5rem;
    border: 0.3rem solid ${colors.darkYellow};
  }
`

export const DetailsText = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightBrown};
  padding-bottom: 2rem;
`

export const DetailsWikipedia = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  background-image: url(${wikiIcon});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  bottom: 1.8rem;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`
