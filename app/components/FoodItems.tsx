import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import foods from "../data/foods.json";

const FoodItems = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Pasta",
    "Chicken",
    "Fries",
    "Dessert",
    "Meat",
    "Seafood",
    "Sandwich",
    "Juice & Smoothies",
  ];

  const handleCategories = (category: string) => {
    const filteredFoods =
      category === "All"
        ? foods
        : foods.filter((food) => food.category === category);
    setFilteredFoods(filteredFoods);
    setActiveCategory(category);
  };

  return (
    <View>
      <View className="flex items-center">
        <Text className="font-semibold text-lg">Popular Foods</Text>
      </View>
      <View className="flex-row items-center gap-1">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 8 }}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategories(item)}>
              <Text
                className={`text-md font-semibold rounded-md px-5 mr-2 py-2 ${
                  activeCategory === item
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          data={filteredFoods}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 190 }}
          ListEmptyComponent={() => (
            <View className="flex-1 justify-center items-center mt-10">
              <Text className="text-gray-500 text-lg font-semibold">
                No items found
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View className="mx-5 my-3 bg-white rounded-2xl overflow-hidden shadow-md">
              <View className="relative">
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: 180,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />

                <View className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full flex-row items-center shadow">
                  <Text className="text-xs font-semibold">
                    ⭐ {item.rating}
                  </Text>
                </View>
              </View>

              <View className="p-4">
                <Text className="text-lg font-bold text-gray-800">
                  {item.name}
                </Text>

                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-[#FF7F50] font-semibold text-base">
                    ${item.price}
                  </Text>

                  <View className="bg-[#FF7F50]/10 px-3 py-1 rounded-full">
                    <Text className="text-[#FF7F50] text-xs font-medium">
                      Popular
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FoodItems;
