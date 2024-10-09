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
      d="M20.04,4h0c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,1.03,.39,1.97,1.03,2.68l-6.37,6.37c-.71-.65-1.66-1.05-2.7-1.05-2.21,0-4,1.79-4,4s1.77,3.98,3.96,4h0c0,2.21,1.79,4,4,4s4-1.79,4-4c0-1.03-.39-1.97-1.03-2.68l6.37-6.37c.71,.65,1.66,1.05,2.7,1.05,2.21,0,4-1.79,4-4s-1.77-3.98-3.96-4Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
