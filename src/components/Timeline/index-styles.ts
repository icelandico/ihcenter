import styled from "styled-components"
import { colors } from "../../styles/colors"
import { fonts } from "../../styles/font"

export const TimelineContainer = styled.div`
  display: flex;
  min-height: 9rem;
  //outline: 1px solid rgb(196, 177, 8);
  width: 100%;
  z-index: 5;
`

export const TimelineMenu = styled.div`
  width: 5%;
  background-color: navy;
`

export const TimelineContent = styled.div`
  width: 100%;
  //background-color: #a98daa;
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

export const TimelineFrameLeft = styled.div`
  width: 49%;
  border-right: 1px solid red;
  border-bottom: 1px solid red;
 -webkit-mask-image: radial-gradient(circle 10px at 100% 100%, transparent 0, transparent 20px, black 21px);
`

export const TimelineFrameRight = styled.div`
  width: 49%;
  border-left: 1px solid red;
  border-bottom: 1px solid red;
  background-color: #ccc;
  -webkit-mask-image: radial-gradient(circle 10px at 0 100%, transparent 0, transparent 20px, black 21px);
  background-image: url("../../static/icons/date_r.svg");
  background-size: contain;
`