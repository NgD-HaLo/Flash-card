import * as React from 'react';
import {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import { colors } from '../../../../themes/color';

const SvgComponent = ({size = 25, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={size}
    height={size}>
    <Path
      fill={color}
      d="M9.5,19c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm9.5,2.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5Zm5-14.5V15H8V7c0-1.654,1.346-3,3-3V13h2V2c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2V13h2V4c1.654,0,3,1.346,3,3Zm-7-5h-2v2h2V2ZM6,16V3c0-1.654-1.346-3-3-3H0V2H3c.552,0,1,.449,1,1v13c0,1.654,1.346,3,3,3H24v-2H7c-.552,0-1-.449-1-1Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
