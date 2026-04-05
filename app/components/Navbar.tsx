import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (path: string) => pathName === path;

  return (
    <View className="w-full items-center py-3">
      <View className="flex-row items-center justify-center gap-8">
        <View className="flex-row items-center gap-10 bg-white shadow-md py-4 px-5 rounded-3xl">
          <TouchableOpacity onPress={() => router.push("/")}>
            <FontAwesome
              name="home"
              size={24}
              color={isActive("/") ? "#FF7F50" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cube-sharp" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="pie-chart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/components/Profile")}
          >
            <FontAwesome
              name="user"
              size={24}
              color={isActive("/components/Profile") ? "#FF7F50" : "black"}
            />
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
