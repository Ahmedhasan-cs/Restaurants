import React from 'react';
import {View} from 'react-native';
import Svg, {Line} from 'react-native-svg';

const DottedLine = (): JSX.Element => (
  <View style={{alignItems: 'center', marginVertical: 10}}>
    <Svg height="1" width="100%">
      <Line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="#ccc"
        strokeWidth="1" // Slightly thicker for visibility
        strokeDasharray="4, 3" // Dot size & spacing
        color={'#000'}
      />
    </Svg>
  </View>
);

export default DottedLine;
