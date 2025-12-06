import React from 'react';
import Svg, { Circle, G } from 'react-native-svg';

export const CircleFilled = () => {
  return (
    <Svg width={528} height={528} viewBox="0 0 528 528">
      <G
        id="Ellipse_2"
        fill="none"
        stroke="#ef9f5a"
        strokeWidth="58"
        opacity="1"
        style={{ mixBlendMode: 'screen', isolation: 'isolate' }}
      >
        <Circle cx="264" cy="264" r="264" stroke="none" />
        <Circle cx="264" cy="264" r="235" fill="none" />
      </G>
    </Svg>
  );
};
