import React, { useState } from "react";
import { Button, Text, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { increaseCount, decreaseCount, addCount } from "../actions";

export const CounterScreen = ({}) => {
  const [value, setValue] = useState("10");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const onChangeValue = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <Text style={{ fontSize: 20 }}>Counter = {count}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeValue}
        keyboardType="number-pad"
        type="numeric"
      />
      <Button title="Increment" onPress={() => dispatch(increaseCount())} />
      <Button title="Decrement" onPress={() => dispatch(decreaseCount())} />
      <Button
        title={`Increment ${value}`}
        onPress={() => dispatch(addCount(Number(value)))}
      />
    </View>
  );
};
