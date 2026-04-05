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
          {/* Header */}
          <View className="justify-center items-center pt-8 pb-6">
            <Text className="text-4xl font-bold text-gray-900 mb-2">
              Create Account
            </Text>
            <Text className="text-gray-500 text-base">
              Join us to get started
            </Text>
          </View>

          {/* Form Container */}
          <View className="gap-5">
            {/* Name Input */}
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                Full Name
              </Text>
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor="#a0aec0"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-base"
              />
            </View>

            {/* Email Input */}
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

            {/* Password Input */}
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                Password
              </Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-xl px-4">
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
                  <Text className="text-blue-500 font-semibold text-sm">
                    {showPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password Input */}
            <View>
              <Text className="text-gray-800 font-semibold mb-3 text-base">
                Confirm Password
              </Text>
              <View className="flex-row items-center bg-gray-100 border border-gray-200 rounded-xl px-4">
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
                  <Text className="text-blue-500 font-semibold text-sm">
                    {showConfirmPassword ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms & Conditions */}
            <TouchableOpacity
              onPress={() => setAgreeTerms(!agreeTerms)}
              className="flex-row items-center gap-2 mt-2"
            >
              <View
                className={`w-5 h-5 rounded border-2 items-center justify-center ${
                  agreeTerms ? "bg-blue-500 border-blue-500" : "border-gray-300"
                }`}
              >
                {agreeTerms && (
                  <Text className="text-white font-bold text-xs">✓</Text>
                )}
              </View>
              <View className="flex-1">
                <Text className="text-gray-700 text-sm">
                  I agree to the{" "}
                  <Text className="text-blue-500 font-semibold">
                    Terms & Conditions
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>

            {/* Register Button */}
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-blue-500 rounded-xl py-4 items-center shadow-lg mt-4"
            >
              <Text className="text-white font-bold text-lg">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center gap-2 py-6 mt-4">
            <Text className="text-gray-600 text-base">
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/components/Login")}
            >
              <Text className="text-blue-500 font-bold text-base">Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
