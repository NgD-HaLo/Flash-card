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
      d="M21.326,5.045c-.461-1.223-1.642-2.045-2.938-2.045h-.388v-1h-2v1H8v-1h-2v1h-.388c-1.297,0-2.478,.822-2.938,2.045C.454,10.947,0,17.455,0,18.875c0,1.723,1.402,3.125,3.125,3.125,2.689,0,5.244-4.681,6.103-7h5.545c.858,2.319,3.413,7,6.103,7,1.723,0,3.125-1.402,3.125-3.125,0-1.42-.454-7.928-2.674-13.83ZM7.5,11c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Zm9,0c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
