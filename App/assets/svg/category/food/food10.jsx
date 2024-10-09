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
      d="M13.025,3V1a1,1,0,0,1,2,0V3A1,1,0,0,1,13.025,3Zm-3,1a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,10.025,4Zm-4,0a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,6.025,4ZM24,13.143A3.983,3.983,0,0,1,20,17H17.525a6.875,6.875,0,0,1-5.742,3H8.216a6.877,6.877,0,0,1-5.808-3.088C.992,14.653-2.453,6.371,3,6L17,6a3.1,3.1,0,0,1,2.882,4C22.353,10,24,11.205,24,13.143Zm-2,0c.088-.927-1.25-1.224-2.458-1.143a16.82,16.82,0,0,1-.954,3H20A1.984,1.984,0,0,0,22,13.143ZM19,22H1a1,1,0,0,0,0,2H19A1,1,0,0,0,19,22Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
