import React, { useState } from "react";
import { View, Alert, StyleSheet, Linking } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import SelectDso from "../components/SelectDso";
import SelectDate from "../components/SelectDate";

const Home = () => {
  const navigation = useNavigation();
  const [lifting, setLifting] = useState("");
  const [cashLifting, setCashLifting] = useState("");
  const [bank, setBank] = useState("");
  const [crm, setCrm] = useState("");
  const [cash, setCash] = useState("");
  const [preDue, setPreDue] = useState("");
  const [cashSupport, setCashSupport] = useState("");
  const [returnVal, setReturnVal] = useState("");
  const [total, setTotal] = useState("");
  const [date, setDate] = useState("");
  const [dso, setDso] = useState("");

  const handleCalculate = () => {
    const fields = [
      lifting,
      cashLifting,
      preDue,
      cash,
      cashSupport,
      returnVal,
      crm,
      bank,
    ];

    if (fields.some((field) => field.trim() === "")) {
      Alert.alert("ইনপুট ত্রুটি", "অনুগ্রহ করে সব ফিল্ডে ০ দিন", [
        { text: "ঠিক আছে❤", style: "cancel" },
      ]);
      return;
    }

    const parseValue = (value) => parseFloat(value) || 0;
    const sum1 =
      parseValue(lifting) + parseValue(cashLifting) + parseValue(preDue);
    const sum2 =
      parseValue(cash) +
      parseValue(cashSupport) +
      parseValue(returnVal) +
      parseValue(crm) +
      parseValue(bank);
    const calculatedTotal = sum1 - sum2;

    const message = `
Date: *${date}*
DSO: *${dso}*
Lifting: *${lifting}*
Cash Lifting: *${cashLifting}*
Bank: *${bank}*
CRM: *${crm}*
Cash: *${cash}*
Pre_Due: *${preDue}*
Cash Support: *${cashSupport}*
Return: *${returnVal}*
    `;

    // Use state updater function to ensure the state is updated immediately
    setTotal(calculatedTotal);

    // Check the alert message based on the calculated total value
    const alertMessage = getAlertMessage(calculatedTotal);
    const detailsMessage = getDetailsMessage(calculatedTotal);

    Alert.alert(alertMessage, detailsMessage, [
      { text: "পাঠাবো না❌", style: "cancel" },
      { text: "পাঠাবো✅", onPress: () => openWhatsApp(message) },
    ]);
  };

  // Define getAlertMessage and getDetailsMessage to accept total as a parameter
  const getAlertMessage = (total) => {
    if (total < 0) return "টাকা বেশি আছে";
    if (total > 0) return "টাকা ডিউ আছে";
    return "কোন ডিউ নেই😊";
  };
  const getMessage = (total) =>
    total > 0 ? "Advance" : total < 0 ? "Due" : "😊";

  const getDetailsMessage = (total) => {
    if (total > 0) return `হিসাব চেক করুন, ${total} আপনার টাকা ডিউ আছে।`;
    if (total < 0) return `হিসাব চেক করুন, ${total} আপনার টাকা বেশি আছে।`;
    return "ধন্যবাদ😊";
  };

  const handleDateChange = (selectedDate) => setDate(selectedDate);
  const handleDsoChange = (selectedDso) => setDso(selectedDso);

  const openWhatsApp = (message) => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() =>
      Alert.alert("Error", "Make sure WhatsApp is installed on your device")
    );
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.headerText}>
          Cute Trading Konabari
        </Text>

        <SelectDate getDate={handleDateChange} />
        <SelectDso getDso={handleDsoChange} />

        <View style={styles.inputContainer}>
          <CustomInput label="Lifting" value={lifting} onChange={setLifting} />
          <CustomInput
            label="Cash Lifting"
            value={cashLifting}
            onChange={setCashLifting}
          />
          <CustomInput label="Bank" value={bank} onChange={setBank} />
          <CustomInput label="CRM" value={crm} onChange={setCrm} />
          <CustomInput label="Cash" value={cash} onChange={setCash} />
          <CustomInput label="Pre Due" value={preDue} onChange={setPreDue} />
          <CustomInput
            label="Cash Support"
            value={cashSupport}
            onChange={setCashSupport}
          />
          <CustomInput
            label="Return"
            value={returnVal}
            onChange={setReturnVal}
          />
        </View>

        <Text variant="headlineSmall" style={styles.resultText}>
          {`${getMessage()} ${total}`}
        </Text>

        <Button
          labelStyle={{ fontSize: 20 }}
          icon={"send"}
          mode="contained"
          style={styles.send}
          onPress={handleCalculate}
        >
          Send
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate("About")}
          style={{ marginTop: 100 }}
        >
          About Developer
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const CustomInput = ({ label, value, onChange }) => (
  <TextInput
    style={styles.box}
    mode="outlined"
    keyboardType="numeric"
    label={label}
    value={value}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  headerText: {
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  box: {
    width: "48%",
  },
  resultText: {
    textAlign: "center",
    color: "red",
    marginVertical: 15,
    borderWidth: 0.5,
    borderColor: "gray",
    padding: 13,
    borderRadius: 10,
  },
  send: {
    // fontSize: 50,
  },
});

export default Home;
