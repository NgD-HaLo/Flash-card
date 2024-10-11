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
      d="M14,2a2,2,0,0,1-4,0A2,2,0,0,1,14,2Zm5.8,16.66a4.976,4.976,0,0,1-3.8-.085,5,5,0,0,1-4,0,5,5,0,0,1-4,0,4.967,4.967,0,0,1-3.795.085A4.44,4.44,0,0,1,2.518,19l.45,2.527A3,3,0,0,0,5.921,24H18.08a3,3,0,0,0,2.953-2.475L21.482,19A4.44,4.44,0,0,1,19.8,18.66ZM15.14,4.448a4,4,0,0,1-6.28,0C4.072,5.783,0,9.959,0,14.5a2.509,2.509,0,0,0,4.167,1.851A2.971,2.971,0,0,0,8,16.22a2.99,2.99,0,0,0,4,0,2.99,2.99,0,0,0,4,0,2.971,2.971,0,0,0,3.833.131A2.509,2.509,0,0,0,24,14.5C24,9.959,19.928,5.783,15.14,4.448Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;