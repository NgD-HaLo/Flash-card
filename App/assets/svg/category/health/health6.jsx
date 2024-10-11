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
      d="m24,4v2h-4.031l-3.257,3.908-2.416-5.799-1.261,1.891h-7.035v-2h5.965L14.704-.109l2.584,6.201,1.743-2.092h4.969ZM5.5,14c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM2,4H0v20h2v-3h20v3h2v-8H2V4Zm19,4h-.095l-3.334,4h-2.155l-1.667-4h-1.75c-1.657,0-3,1.343-3,3v3h15v-3c0-1.657-1.343-3-3-3Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;