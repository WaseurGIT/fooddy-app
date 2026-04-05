import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login with:", { email, password, rememberMe });
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-orange-50 to-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="px-6"
        >
          <View className="justify-center items-center pt-8 pb-4">
            <View className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full p-6 mb-4 shadow-lg">
              <FontAwesome name="cutlery" size={56} color="#ea580c" />
            </View>
            <Text className="text-4xl font-bold text-gray-900 mb-1">
              Fooddy
            </Text>
            <Text className="text-lg text-orange-600 font-semibold mb-4">
              Order & Enjoy Delicious Meals
            </Text>
            <Text className="text-gray-500 text-base">Sign in to continue</Text>
          </View>

          <View className="flex-1 justify-center gap-5">
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                📧 Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#a0aec0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-white border-2 border-orange-200 rounded-xl px-4 py-3 text-gray-900 text-base"
              />
            </View>

            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                🔐 Password
              </Text>
              <View className="flex-row items-center bg-white border-2 border-orange-200 rounded-xl px-4">
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor="#a0aec0"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className="flex-1 py-3 text-gray-900 text-base"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text className="text-orange-500 font-semibold">
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row justify-between items-center">
              <TouchableOpacity
                onPress={() => setRememberMe(!rememberMe)}
                className="flex-row items-center gap-2"
              >
                <View
                  className={`w-5 h-5 rounded border-2 items-center justify-center ${
                    rememberMe
                      ? "bg-orange-500 border-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  {rememberMe && (
                    <Text className="text-white font-bold text-xs">✓</Text>
                  )}
                </View>
                <Text className="text-gray-700 text-sm">Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text className="text-orange-600 font-semibold text-sm">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              className="bg-orange-500 rounded-2xl py-4 px-6 items-center justify-center shadow-2xl mt-4 active:shadow-lg active:scale-95"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center gap-2">
                <FontAwesome name="sign-in" size={20} color="black" />
                <Text className=" font-bold text-lg">
                  Login to Fooddy
                </Text>
              </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3 my-4">
              <View className="flex-1 h-px bg-orange-200" />
              <Text className="text-gray-500 text-sm font-semibold">
                Or continue with
              </Text>
              <View className="flex-1 h-px bg-orange-200" />
            </View>

            <View className="flex-row gap-4">
              <TouchableOpacity
                className="flex-1 border-2 border-orange-200 bg-white rounded-2xl py-4 items-center shadow-md active:shadow-sm active:scale-95"
                activeOpacity={0.8}
              >
                <FontAwesome5 name="facebook" size={26} color="#1566e8" />
                <Text className="text-gray-700 font-semibold text-xs mt-2">
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 border-2 border-orange-200 bg-white rounded-2xl py-4 items-center shadow-md active:shadow-sm active:scale-95"
                activeOpacity={0.8}
              >
                <AntDesign name="google" size={26} color="#ed9134" />
                <Text className="text-gray-700 font-semibold text-xs mt-2">
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-center gap-2 pb-8 mt-6 bg-orange-100 rounded-2xl px-4 py-3">
            <Text className="text-gray-600 text-base">
              Don&apos;t have an account?
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/components/Register")}
            >
              <Text className="text-orange-600 font-bold text-base underline">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
