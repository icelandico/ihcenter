import styled from "styled-components"
import { colors } from "../../../styles/colors"
import wikiIcon from "../../../static/icons/wiki.svg"

export const DetailsTopContainer = styled.div`
  position: relative;
  margin-top: -4rem;
`

export const ElementTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  width: 75%;
  font-family: "Alegreya", sans-serif;
  font-weight: 800;
`

export const ElementDate = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${colors.lightBrown};
  font-family: "Krub", sans-serif;
`

export const ElementLink = styled.a`
  position: absolute;
  height: 3rem;
  width: 3rem;
  background-image: url(${wikiIcon});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
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

export const BookmarkContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 2.3rem;
  height: 3rem;
  width: 50%;
`

export const Bookmark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  stroke: ${colors.green};
  fill: none;
  transition: 0.1s;

  svg {
    transition: 0.3s;
  }
  
  &:hover {
    stroke: ${colors.lightBrown};
  }
`

export const DetailsContainer = styled.div`
  height: 62%;
  overflow-y: auto;
  margin-top: 2rem;
  padding-right: 1rem;
  text-align: justify;

  &::-webkit-scrollbar {
    display: none;
  }

`

export const DetailsText = styled.p`
  font-size: 1.5rem;
  color: ${colors.lightBrown};
  padding-bottom: 2rem;
  font-family: "Alegreya", sans-serif;
`

export const WikiLinkContainer = styled.div`
  height: 3rem;
  width: 100%;
  position: relative;

  &:before {
    content: "";
    width: 90%;
    border: 1px solid ${colors.lightBrown};
    position: absolute;
    right: 0;
    top: 50%;
  }
`
