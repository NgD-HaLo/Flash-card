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
      d="m23.121 7.122-2.414-2.415 2-2-1.414-1.414-2 2-2.414-2.414a3 3 0 0 0 -4.243 0l-2.828 2.828 4.535 4.536-6.1 6.1-4.536-4.535-2.828 2.828a3 3 0 0 0 0 4.242l2.414 2.415-2 2 1.414 1.414 2-2 2.414 2.414a3 3 0 0 0 4.243 0l2.828-2.828-4.535-4.536 6.1-6.1 4.535 4.535 2.828-2.828a3 3 0 0 0 0-4.242z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
