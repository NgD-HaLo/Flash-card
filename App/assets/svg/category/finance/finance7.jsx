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
      d="M16.582,13h-2.582v-2h4.62c.802-.648,1.795-1,2.843-1,.918,0,1.794,.27,2.537,.773V5c0-1.654-1.346-3-3-3H3C1.346,2,0,3.346,0,5V22H10v-2.419l6.582-6.581Zm-2.582-6h6v2h-6v-2Zm-5.644,6.24l-3.041-.507c-1.342-.223-2.315-1.373-2.315-2.733,0-1.654,1.346-3,3-3v-1h2v1c1.654,0,3,1.346,3,3h-2c0-.551-.448-1-1-1h-2c-.552,0-1,.449-1,1,0,.378,.271,.698,.644,.76l3.041,.507c1.342,.223,2.315,1.373,2.315,2.733,0,1.654-1.346,3-3,3v1h-2v-1c-1.654,0-3-1.346-3-3h2c0,.551,.448,1,1,1h2c.552,0,1-.449,1-1,0-.378-.271-.698-.644-.76Zm15.645,1.298c0,.678-.264,1.316-.744,1.795l-7.667,7.667h-3.59v-3.59l7.668-7.667c.99-.99,2.6-.99,3.59,0,.479,.479,.744,1.117,.744,1.795Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
