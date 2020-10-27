import styled from "styled-components"
import { colors } from "../../styles/colors"
import DatePaneRight from "../../static/icons/date_r.svg"
import DatePaneLeft from "../../static/icons/date_l.svg"

export const TimelineContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 5;
  height: auto;
`

export const TimelineContent = styled.div`
  min-height: 7rem;
  width: 95%;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    width: 33%;
    z-index: 10;
    pointer-events: none;
  }

  &:before {
    left: 0;
    background: linear-gradient(to right, rgba(0, 57, 63, 1), transparent);
  }

  &:after {
    right: 0;
    background: linear-gradient(to left, rgba(0, 57, 63, 1), transparent);
  }
`

export const TimelineFrames = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
  //pointer-events: none;
`

const TimelineFrame = styled.div`
  width: 49.5%;
  background-size: contain;
  background-repeat: no-repeat;
  border-top: 0.1rem solid ${colors.green};
`

export const TimelineFrameLeft = styled(TimelineFrame)`
  background-image: url(${DatePaneLeft});
  background-position: 100%;
`

export const TimelineFrameRight = styled(TimelineFrame)`
  background-image: url(${DatePaneRight});
`
