import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SectionListScreen = () => {
  const { type: sectionType } = useLocalSearchParams<{
    type: string;
  }>();
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
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
        <Text className="text-2xl font-bold mb-5">SectionListScreen</Text>
        <View className="mt-4 items-center">
          <Text>For Section With Type : {sectionType}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SectionListScreen;
