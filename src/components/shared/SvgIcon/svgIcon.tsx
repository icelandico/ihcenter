import React, { FunctionComponent } from "react"
import { SvgContainer } from "./svgicon-styles"

interface IProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
}

const SvgIcon: FunctionComponent<IProps> = props => {
  const { Icon } = props
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  )
}

export default SvgIcon
