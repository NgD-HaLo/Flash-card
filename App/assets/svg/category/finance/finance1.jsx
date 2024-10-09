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
      d="M12,0C5.383,0,0,5.383,0,12c.603,15.898,23.4,15.894,24,0,0-6.617-5.383-12-12-12Zm1,17v1c-.005,1.308-1.995,1.307-2,0v-1h-.268c-1.067,0-2.063-.574-2.598-1.499-.277-.479-.113-1.09,.364-1.366,.479-.279,1.091-.113,1.366,.364,.179,.31,.511,.501,.867,.501h2.268c.997,.065,1.443-1.55,.356-1.76l-3.041-.507c-3.502-.649-2.748-5.753,.685-5.733v-1c.006-1.308,1.995-1.307,2,0v1h.268c1.067,0,2.063,.575,2.598,1.5,.277,.478,.113,1.089-.364,1.366-.48,.277-1.091,.113-1.366-.365-.179-.309-.511-.5-.867-.5h-2.268c-.997-.065-1.442,1.55-.356,1.76l3.041,.507c3.502,.649,2.748,5.753-.685,5.733Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
