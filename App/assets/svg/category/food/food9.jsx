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
      d="M23,13a3,3,0,0,0-3-3H19V8H11v5a3,3,0,0,1-6,0V8H1V21a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V20h4Zm-2,5H19V12h1a1,1,0,0,1,1,1ZM7,6H2A4,4,0,0,1,5.765,2.007a4.515,4.515,0,0,1,7.508.061A4.012,4.012,0,0,1,18,6H9v7a1,1,0,0,1-2,0Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
