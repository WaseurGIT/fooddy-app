import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
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
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          className="px-6"
        >
          <View className="justify-center items-center pt-12 pb-8">
            <Text className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </Text>
            <Text className="text-gray-500 text-base">
              Login to your account
            </Text>
          </View>

          <View className="flex-1 justify-center gap-6">
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#a0aec0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
              />
            </View>

            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                Password
              </Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-xl px-4">
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
                  <Text className="text-blue-500 font-semibold">
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
                      ? "bg-blue-500 border-blue-500"
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
                <Text className="text-blue-500 font-semibold text-sm">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleLogin}
              className="bg-blue-500 rounded-xl py-4 items-center shadow-lg mt-6"
            >
              <Text className="text-white font-bold text-lg">Login</Text>
            </TouchableOpacity>

            <View className="flex-row items-center gap-3 my-2">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="text-gray-500 text-sm">Or continue with</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            <View className="flex-row gap-4">
              <TouchableOpacity className="flex-1 border border-gray-200 rounded-xl py-3 items-center">
                <FontAwesome5 name="facebook" size={24} color="#1566e8" />
                <Text className="text-gray-700 font-semibold text-sm">
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 border border-gray-200 rounded-xl py-3 items-center">
                <AntDesign name="google" size={24} color="#ed9134" />
                <Text className="text-gray-700 font-semibold text-sm">
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-center gap-2 pb-8 mt-8">
            <Text className="text-gray-600 text-base">
              Don&apos;t have an account?
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-bold text-base">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
