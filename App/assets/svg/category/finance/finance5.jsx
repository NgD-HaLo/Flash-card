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
      d="m0,8v-1C0,4.243,2.243,2,5,2h1v-1c0-.552.448-1,1-1s1,.448,1,1v1h8v-1c0-.552.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5v1H0Zm19.33,6.627c.382-.372.771-.814,1.052-1.294.346-.59-.115-1.333-.799-1.333h-3.167c-.684,0-1.144.743-.799,1.333.281.48.67.922,1.052,1.294-2.495.779-4.67,3.581-4.67,6.387,0,1.649,1.343,2.986,3,2.986h6c1.657,0,3-1.337,3-2.986,0-2.806-2.174-5.608-4.67-6.387Zm-9.33,6.387c0-2.697,1.506-5.424,3.7-7.065-.314-.799-.253-1.716.185-2.479.52-.907,1.489-1.47,2.531-1.47H0v9c0,2.757,2.243,5,5,5h6.021c-.632-.835-1.021-1.862-1.021-2.986Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;