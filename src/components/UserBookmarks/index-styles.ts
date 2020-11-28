import styled from "styled-components"
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
  width: 65%;
  border: 1px solid darkgoldenrod;
  height: 3rem;
  top: 100%;
  right: 0;
`

export const RecentItem = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-color: peru;
  border-radius: 50%;
`