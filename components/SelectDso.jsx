import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropdownMenu = ({ getDso }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const phoneNumbers = [
    "01892859564",
    "01820118896",
    "01886871808",
    "01840771201",
    "01806925228",
    "01837904984",
    "01844210725",
    "01812816990",
    "01804477987",
    "01822068367",
    "01860441424",
    "01808302224",
    "01852125974",
    "01867691899",
    "01821977617",
    "01876424409",
    "01812110180",
    "01897172767",
    "01849043593",
    "01865576711",
    "01881258873",
    "01866364265",
    "01878567142",
    "01873279485",
    "01847576176",
    "01835814745",
    "01871972019",
    "01858207653",
  ];

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue); // Update local state
    getDso(itemValue); // Call the callback to update parent's state
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange} // Use the handler here
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Select DSO number" value={null} />
        {phoneNumbers.map((number, index) => (
          <Picker.Item key={index} label={number} value={number} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: "white",
    justifyContent: "center",
    height: 50,
  },
});

export default DropdownMenu;
