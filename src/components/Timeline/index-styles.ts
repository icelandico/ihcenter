import styled from "styled-components"
import { colors } from "../../styles/colors"
import { fonts } from "../../styles/font"
import DatePaneRight from "../../static/icons/date_r.svg"
import DatePaneLeft from "../../static/icons/date_l.svg"

export const TimelineContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 5;
  height: auto;
`

export const TimelineMenu = styled.div`
  width: 5%;
  background-color: navy;
`

export const TimelineContent = styled.div`
  min-height: 7rem;
  width: 100%;
  border-top: 1px solid ${colors.green};
  position: relative;
`
export const TimelineFrames = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const TimelineFrame = styled.div`
  width: 49.5%;
  background-size: contain;
  background-repeat: no-repeat;
`

export const TimelineFrameLeft = styled(TimelineFrame)`
  background-image: url(${DatePaneLeft});
  background-position: 100%;
`

export const TimelineFrameRight = styled(TimelineFrame)`
  background-image: url(${DatePaneRight});
`

export const TimelineYearLine = styled.div`
  height: 100%;
  outline: 1px solid red;
  background-color: darksalmon;
  opacity: 0.1;

`