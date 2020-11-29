import styled, { css } from "styled-components/macro"
import { keyframes } from "styled-components";
import { colors } from "../../styles/colors"

export const UserBookmarksContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 6rem;
  margin-left: 3rem;
  border-bottom: 0.1rem solid ${colors.lightBrown};
  border-left: 0.1rem solid ${colors.lightBrown};
`

export const UserBookmarksText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export const OptionsText = styled.p`
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  color: ${colors.lightBrown};

  &:first-child {
    border-bottom: 0.2rem solid ${colors.green};
  }
`

export const UserRecentlyViewedItems = styled.div`
  display: flex;
  flex-basis: 85%;
  justify-content: flex-end;
`

export const UserBookmarksItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 65%;
  height: 3rem;
  top: 75%;
  right: 0;
`

const bookmarkLoader = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(51, 217, 178, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
  }
`

export const UserStorageItem = styled.div<{ isActive?: boolean }>`
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${colors.green};
  border-radius: 50%;
  background-size: cover;
  transform: scale(1);
  cursor: ${props => !props.isActive ? "not-allowed" : "pointer"};
  animation: ${props =>
    !props.isActive ? css`2s infinite ${bookmarkLoader}` : "none"};
`
