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
      d="M2.094,12.006H22a2,2,0,0,1,0,4H16a10,10,0,0,0-6.556,2.45,2.189,2.189,0,0,1-2.888,0A10,10,0,0,0,1.69,16.15,2.067,2.067,0,0,1,0,14.1,2.094,2.094,0,0,1,2.094,12.006ZM1,10.174V9a9.01,9.01,0,0,1,9-9h4a9.01,9.01,0,0,1,9,9v1.148a3.984,3.984,0,0,0-1-.142H2.094A4.033,4.033,0,0,0,1,10.174ZM7,4A1,1,0,0,0,9,4,1,1,0,0,0,7,4ZM4,7A1,1,0,0,0,6,7,1,1,0,0,0,4,7ZM22,18.006H16a8,8,0,0,0-5.246,1.96,4.17,4.17,0,0,1-5.508,0,8,8,0,0,0-3.894-1.844c-.122-.021-.235-.063-.352-.094V20a4,4,0,0,0,4,4H19a4,4,0,0,0,4-4V17.864A3.939,3.939,0,0,1,22,18.006Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
