import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
  const { type: searchType } = useLocalSearchParams<{
    type: string;
  }>();
  const router = useRouter();

  const handleGoBack = () => {
    // TODO: Handle Active Bottom Tab Persist
    if (searchType === "DM") {
      router.navigate("/(root)/(tabs)/messages");
      return;
    }
    router.navigate("/(root)/(tabs)/search");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border border-gray-400 my-5" />
      <View className="flex-row items-center">
        <Pressable onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={24} className="ml-2" />
        </Pressable>
      </View>
      <View className="border border-gray-400 my-5" />
      <View className="justify-center items-center mt-20">
        <Text className="text-2xl font-bold mb-5">Search Screen</Text>
        <View className="mt-4 items-center">
          <Text>Search With Type : {searchType}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
