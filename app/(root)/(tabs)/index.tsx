import { Colors } from "@/constants";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeTabScreen = () => {
  const sectionMenu = [
    "Unread",
    "Threads",
    "Mentions",
    "Saved",
    "Draft & Sent",
  ];

  const channelsList = [
    { id: "id_channel_1", channelName: "Channel 1", type: "Public" },
    { id: "id_channel_2", channelName: "Channel 2", type: "Private" },
    { id: "id_channel_3", channelName: "Channel 3", type: "Public" },
    { id: "id_channel_4", channelName: "Channel 4", type: "Public" },
    { id: "id_channel_5", channelName: "Channel 5", type: "Private" },
  ];

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white gap-4">
      {sectionMenu.map((section) => (
        <Pressable
          onPress={() => {
            router.push({
              pathname: "/(root)/workspace/sectionList/[type]",
              params: {
                type: section,
              },
            });
          }}
          key={section}
          className="w-56 bg-blue-500 px-2.5 py-5 rounded-2xl items-center"
        >
          <Text className="text-white">{section} Section</Text>
        </Pressable>
      ))}
      <View className="border border-gray-300 w-full" />

      {channelsList.map((channel) => (
        <Pressable
          onPress={() => {
            router.push({
              pathname: "/(root)/workspace/chatHistory/[id]",
              params: {
                id: channel.id,
                data: JSON.stringify(channel),
                chatType: "Channel",
              },
            });
          }}
          key={channel.id}
          className="flex-row justify-center items-center px-10 py-2"
        >
          <FontAwesome
            name={channel.type === "Private" ? "lock" : "hashtag"}
            size={14}
          />
          <Text className="ml-1">{channel.channelName}</Text>
        </Pressable>
      ))}
      <Pressable
        className="flex-row justify-center self-end items-center bg-blue-400 rounded-full w-16 h-16 mr-10"
        onPress={() => {
          Alert.alert("Opening Bottom Sheet For Create Section");
        }}
      >
        <AntDesign name={"plus"} size={24} color={Colors.white} />
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeTabScreen;
