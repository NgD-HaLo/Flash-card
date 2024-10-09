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
      d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
