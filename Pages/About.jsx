import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Rasel.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.header}>About Me</Text>
      <Text style={styles.content}>
        I am Rasel Hossain, a passionate React Developer with experience in
        building a variety of websites, web apps, and mobile apps using React
        and React Native. I am always eager to learn new things and continue
        growing in the world of development. Thanks for visiting!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f4f8", // Light background color for a clean look
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20, // Making the image circular
    marginBottom: 20,
    borderColor: "#ddd", // Adding border to the image for polish
    borderWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10, // Adding shadow for a more 3D effect
    elevation: 8, // Shadow for Android devices
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333", // Darker color for contrast
    marginBottom: 10,
    textAlign: "center", // Center header text
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify", // Center the content
    color: "#555", // Softer font color for better readability
    paddingHorizontal: 20, // Add padding to make the text more readable
  },
});

export default About;
