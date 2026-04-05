// import { Stack } from "expo-router";
// import "../global.css";
// export default function RootLayout() {
//   return (
//     <Stack>
//       {" "}
//       <Stack.Screen name="index" options={{ title: "Home" }} />{" "}
//       <Stack.Screen
//         name="components/Profile"
//         options={{ title: "Profile", headerTitleAlign: "center" }}
//       />{" "}
//     </Stack>
//   );
// }

import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./components/Navbar";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <View className="flex-1">
          <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen
              name="components/Profile"
              options={{ title: "Profile" }}
            />
          </Stack>
        </View>

        <SafeAreaView edges={["bottom"]} className="bg-white shadow-md">
          <Navbar />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
