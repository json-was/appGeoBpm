import React from 'react';
import {View, Text} from 'react-native';
import {Heart, bpmStyles} from './Pulsaciones.style';

interface Props {
  bpm: number;
}

export const Pulsaciones = (props: Props) => {
  return (
    <View style={
        (props.bpm < 100)
          ? bpmStyles.bpmContainer
          : bpmStyles.bpmContainerAlert
      }>
      <Heart />
      <Text style={bpmStyles.bpmNum}>{props.bpm}</Text>
      <Text style={bpmStyles.bpmText}>BPM</Text>
    </View>
  );
};
