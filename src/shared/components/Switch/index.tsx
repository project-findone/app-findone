import React, { useState } from 'react';

import {
  Text, View, TouchableOpacity,
} from 'react-native';

interface SwitchProps {
  selectionMode: any;
  option1: any;
  option2: any;
  onSelectSwitch: any;
}

const CustomSwitch: React.FC<SwitchProps> = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = (val: any) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={{
          height: 50,
          width: '96%',
          backgroundColor: '#E9EDF0',
          borderRadius: 100,
          borderColor: '#E9EDF0',
          borderWidth: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode === 1 ? 'white' : '#E9EDF0',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: getSelectionMode === 1 ? '#1ABFCA' : 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode === 2 ? 'white' : '#E9EDF0',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: getSelectionMode === 2 ? '#1ABFCA' : 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;
