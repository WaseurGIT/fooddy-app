import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <View className="flex-1">
          <StatusBar style="dark" hidden={false} />
          <Stack>
            <Stack.Screen
              name="index"
              options={{ title: "Home", headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="login"
              options={{ title: "Login", headerTitleAlign: "center" }}
            />
            <Stack.Screen
              name="components/Profile"
              options={{ title: "Profile", headerTitleAlign: "center" }}
            />
          </Stack>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
