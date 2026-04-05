import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Navbar = () => {
  return (
    <View className="w-full">
      <View className="flex-row items-center justify-center gap-8">
        <View className="flex-row items-center gap-10 bg-white shadow-md py-4 px-5 rounded-3xl">
          <TouchableOpacity>
            <FontAwesome name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cube-sharp" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="pie-chart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/components/Profile")}>
            <FontAwesome name="user" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="bg-green-500 p-3 rounded-full">
          <Ionicons name="add" size={26} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
