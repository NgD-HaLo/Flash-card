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
      d="M24,16.5V17H9a4.554,4.554,0,0,1,4.5-5h6A4.5,4.5,0,0,1,24,16.5Zm-5.8,4.329a1,1,0,0,1-1.109,0L14.343,19H9a4.555,4.555,0,0,0,4.5,5h6A4.554,4.554,0,0,0,24,19h-3.05ZM7,16.5v3a6.469,6.469,0,0,0,1.832,4.51h-2.3A5.005,5.005,0,0,1,1.572,19.63L.059,7.572A3.02,3.02,0,0,1,3,4.017H9.617L9.79,2.633A3,3,0,0,1,12.765.006H16a1,1,0,0,1,0,2H12.765c-1.09,0-1.027,1.245-1.134,2.012H14a3.017,3.017,0,0,1,2.928,3.652L16.635,10H13.5A6.506,6.506,0,0,0,7,16.5Zm4.38-10.482L11.133,8h3.74l.085-.675A1.011,1.011,0,0,0,14,6.016ZM9.118,8l.249-1.986H3a1.006,1.006,0,0,0-.977,1.216l.1.77Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
