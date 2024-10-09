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
      d="m12.021,12c-3.309,0-6-2.691-6-6S8.713,0,12.021,0s6,2.691,6,6-2.691,6-6,6Zm1.979,6.184v-4.184h-5.021v4.277c.595.346,1,.984,1,1.723,0,1.105-.895,2-2,2s-2-.895-2-2c0-.738.405-1.376,1-1.723v-4.275c-2.747.012-4.979,2.248-4.979,4.998v5h10v-3c0-1.302.839-2.402,2-2.816Zm3-4.184h-1v4.184c1.161.414,2,1.514,2,2.816v3h4v-5c0-2.757-2.243-5-5-5Zm-2,6c-.552,0-1,.448-1,1v3h2v-3c0-.552-.448-1-1-1Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
