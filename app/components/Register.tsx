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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = () => {
    console.log("Register with:", { name, email, password, confirmPassword });
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
              <FontAwesome name="user-plus" size={48} color="#ea580c" />
            </View>
            <Text className="text-4xl font-bold text-gray-900 mb-1">
              Join Fooddy
            </Text>
            <Text className="text-lg text-orange-600 font-semibold mb-4">
              Order & Enjoy Delicious Meals
            </Text>
            <Text className="text-gray-500 text-base">Create your account</Text>
          </View>

          {/* form */}
          <View className="gap-5">
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                👤 Full Name
              </Text>
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor="#a0aec0"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                className="bg-white border-2 border-orange-200 rounded-xl px-4 py-3 text-gray-900 text-base"
              />
            </View>

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
                  placeholder="Create a password"
                  placeholderTextColor="#a0aec0"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  className="flex-1 py-3 text-gray-900 text-base"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text className="text-orange-500 font-semibold text-sm">
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                🔐 Confirm Password
              </Text>
              <View className="flex-row items-center bg-white border-2 border-orange-200 rounded-xl px-4">
                <TextInput
                  placeholder="Confirm your password"
                  placeholderTextColor="#a0aec0"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  className="flex-1 py-3 text-gray-900 text-base"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Text className="text-orange-500 font-semibold text-sm">
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setAgreeTerms(!agreeTerms)}
              className="flex-row items-center gap-2 mt-2"
            >
              <View
                className={`w-5 h-5 rounded border-2 items-center justify-center ${
                  agreeTerms
                    ? "bg-orange-500 border-orange-500"
                    : "border-gray-300"
                }`}
              >
                {agreeTerms && (
                  <Text className="text-white font-bold text-xs">✓</Text>
                )}
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-sm">
                  I agree to the{" "}
                  <Text className="text-orange-600 font-semibold">
                    Terms & Conditions
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleRegister}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl py-4 px-6 items-center justify-center shadow-2xl mt-4 active:shadow-lg active:scale-95"
              activeOpacity={0.8}
            >
              <View className="flex-row items-center justify-center gap-2">
                <FontAwesome name="user-circle" size={20} color="black" />
                <Text className="font-bold text-lg">
                  Create Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center gap-2 py-4 px-4 bg-orange-100 rounded-2xl">
            <Text className="text-gray-600 text-base">
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/components/Login")}
            >
              <Text className="text-orange-600 font-bold text-base underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
