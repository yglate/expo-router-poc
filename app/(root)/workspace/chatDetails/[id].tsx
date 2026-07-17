import { NavigationList, NavigationStackParamList } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ChatDetailsScreenParams =
  NavigationStackParamList[NavigationList.CHAT_HISTORY_SCREEN];

const ChatDetailsScreen = () => {
  const {
    id: chatId,
    data,
    chatType,
    sectionType,
  } = useLocalSearchParams<ChatDetailsScreenParams>();
  const router = useRouter();
  const parsedData = data ? JSON.parse(data) : null;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border border-gray-400 my-5" />
      <Pressable onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={24} className="ml-2" />
      </Pressable>
      <View className="border border-gray-400 my-5" />
      <View className="justify-center items-center mt-20">
        <Text className="text-2xl font-bold mb-5">Chat Info Screen</Text>
        {parsedData ? (
          <View className="mt-4 items-center mx-10">
            <Text className="mt-4 items-center mx-10">
              Chat Type : {chatType}
            </Text>
            <Text className="mt-4 items-center mx-10">
              For {chatType} With Id : {chatId}
            </Text>
            <Text className="mt-4 items-center mx-10">
              {chatType} Name:{" "}
              {chatType === "Channel"
                ? parsedData.channelName
                : parsedData.name}
            </Text>
            {parsedData.lastMessage && (
              <Text className="mt-4 items-center mx-10">
                Last Message : {parsedData.lastMessage}
              </Text>
            )}
            {parsedData.type && (
              <Text className="mt-4 items-center mx-10">
                {chatType} Type: {parsedData.type}
              </Text>
            )}
            {!!sectionType && (
              <Text className="mt-4 items-center mx-10">
                {chatType}(From Messages)Section Type: {sectionType}
              </Text>
            )}
          </View>
        ) : (
          <Text className="mt-4">No data provided</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChatDetailsScreen;
