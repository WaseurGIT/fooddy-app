import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./Navbar";
import { router } from "expo-router";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => {
          console.log("User logged out");
        },
        style: "destructive",
      },
    ]);
  };

  const handleUpdateProfile = () => {
    Alert.alert("Update Profile", "Navigate to profile edit screen");
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="flex-1 px-6 py-8">
        <View className="flex items-center">
          <Text className="text-2xl font-bold text-gray-800 mb-8">Profile</Text>
        </View>

        <View className="items-center mb-8">
          <Image
            source={require("../data/jennifer.webp")}
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </View>

        <View className="bg-gray-50 rounded-2xl p-6 mb-8">
          <View className="mb-6">
            <Text className="text-gray-600 text-sm font-semibold mb-2">
              Full Name
            </Text>
            <Text className="text-gray-900 text-lg font-semibold">
              {user.name}
            </Text>
          </View>

          <View>
            <Text className="text-gray-600 text-sm font-semibold mb-2">
              Email Address
            </Text>
            <Text className="text-gray-900 text-lg">{user.email}</Text>
          </View>
        </View>

        <View className="gap-4">
          <TouchableOpacity
            onPress={handleUpdateProfile}
            className="bg-blue-500 rounded-lg py-4 items-center"
          >
            <Text className="text-white text-lg font-semibold">
              Update Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>router.replace("/components/Login")}
            className="bg-red-500 rounded-lg py-4 items-center"
          >
            <Text className="text-white text-lg font-semibold">Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-red-500 rounded-lg py-4 items-center"
          >
            <Text className="text-white text-lg font-semibold">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navbar */}
      <SafeAreaView edges={["bottom"]} className="">
        <Navbar />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Profile;
