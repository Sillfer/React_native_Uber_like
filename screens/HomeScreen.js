import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text :{
        color : 'red'
    }
});
