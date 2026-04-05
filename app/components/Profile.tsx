import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Text>Profile</Text>
      <View className="flex-1"></View>
      <SafeAreaView edges={["bottom"]} className="">
        <Navbar />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Profile;
