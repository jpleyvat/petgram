import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Svg = styled.svg`
  width: 500px;
  // margin-left: 10px;
  // margin-top: -30px;
`

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
