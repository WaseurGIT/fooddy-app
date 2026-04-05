import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodItems from "./components/FoodItems";
import Navbar from "./components/Navbar";

export default function Index() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <View className="flex-row items-center justify-between gap-3 mx-5 mb-5">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("./data/jennifer.webp")}
            style={{ width: 30, height: 30, borderRadius: 30 }}
          />
          <View>
            <Text className="text-xl font-semibold">
              Hi <Text className="text-[#FF7F50]">Jennifer</Text>
            </Text>
            <Text>jenniferlawrence@gmail.com</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-semibold text-xl">
            Fo<Text className="text-[#FF7F50]">od</Text>dy
          </Text>
          <MaterialIcons name="fastfood" size={22} color="#FF7F50" />
        </View>
      </View>

      <View className="flex-1">
        <View className="">
          <FoodItems />
        </View>
      </View>

      <SafeAreaView edges={["bottom"]} className="">
        <Navbar />
      </SafeAreaView>
    </SafeAreaView>
  );
}
