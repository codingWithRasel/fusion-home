import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const SelectDate = ({ getDate }) => {
  const [selectDate, setSelectDate] = useState(
    new Date().toLocaleDateString("en-GB").replace(/\//g, "-")
  );

  useEffect(() => {
    getDate(selectDate);
  }, [selectDate]);

  return (
    <TextInput
      label="Date"
      mode="outlined"
      keyboardType="numeric"
      value={selectDate}
      onChangeText={(text) => setSelectDate(text)}
    />
  );
};

export default SelectDate;
