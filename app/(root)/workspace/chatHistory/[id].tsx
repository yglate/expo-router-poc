import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatHistoryScreen = () => {
  const { id: channelId, channel } = useLocalSearchParams<{
    id: string;
    channel?: string;
  }>();
  const router = useRouter();
  const parsedChannel = channel ? JSON.parse(channel) : null;

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
        <Pressable
          onPress={() => {
            router.navigate({
              pathname: "/(root)/workspace/channelDetails/[id]",
              params: {
                id: parsedChannel.id,
                channel: JSON.stringify(parsedChannel),
              },
            });
          }}
        >
          <Text className="ml-10">{parsedChannel.channelName}</Text>
        </Pressable>
      </View>
      <View className="border border-gray-400 my-5" />
      <View className="justify-center items-center mt-20">
        <Text className="text-2xl font-bold mb-5">ChatHistoryScreen</Text>
        {parsedChannel ? (
          <View className="mt-4 items-center">
            <Text>For Channel With Id : {channelId}</Text>
            <Text>Channel Name: {parsedChannel.channelName}</Text>
            <Text>Channel Type: {parsedChannel.type}</Text>
          </View>
        ) : (
          <Text className="mt-4">No channel data provided</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChatHistoryScreen;
