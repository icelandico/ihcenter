import React from "react"
import { SvgContainer } from "./svgicon-styles"

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  width?: string
}

const SvgIcon: React.FC<Props> = props => {
  const { Icon } = props
  return (
    <SvgContainer>
      <Icon />
    </SvgContainer>
  )
}

export default SvgIcon
