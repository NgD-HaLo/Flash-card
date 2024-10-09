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
      d="m0,11v-5C0,2.692,2.692,0,6,0s6,2.692,6,6v5H0ZM0,13v5C0,21.308,2.692,24,6,24s6-2.692,6-6v-5H0Zm14-7v5.886l5.923-3.162-2.398-4.492c-1.08-2.023-3.143-3.188-5.287-3.228,1.1,1.37,1.762,3.106,1.762,4.996Zm9.281,9.013l-2.398-4.492-6.883,3.674v3.805c0,1.325-.329,2.572-.901,3.674,1.797,2.277,5.023,3.02,7.67,1.607,2.972-1.587,4.099-5.296,2.513-8.268Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
