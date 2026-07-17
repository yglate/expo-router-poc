import { Colors, messages, sectionTypes } from "@/constants";
import { Message } from "@/types";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessagesScreen = () => {
  const [sectionType, setSectionType] = useState(sectionTypes[0]);

  const router = useRouter();

  const scrollViewRef = useRef<ScrollView>(null);
  const itemLayouts = useRef<Record<string, { x: number; width: number }>>({});

  const { width: screenWidth } = useWindowDimensions();

  const handleSearchNavigation = () => {
    router.push({
      pathname: "/(root)/search/[type]",
      params: {
        type: "DM",
      },
    });
  };

  const handleSectionLayout =
    (sectionType: string) => (e: LayoutChangeEvent) => {
      itemLayouts.current[sectionType] = {
        x: e.nativeEvent.layout.x,
        width: e.nativeEvent.layout.width,
      };
    };

  const handleSectionPress = useCallback(
    (section: (typeof sectionTypes)[number]) => {
      setSectionType(section);

      requestAnimationFrame(() => {
        const layout = itemLayouts.current[section.type];

        if (layout) {
          scrollViewRef.current?.scrollTo({
            x: Math.max(0, layout.x - screenWidth / 2 + layout.width / 2),
            animated: false,
          });
        }
      });
    },
    [screenWidth],
  );

  const renderItem = ({ item }: { item: Message }) => (
    <Pressable
      className="flex-row items-center px-5 py-4 bg-white"
      onPress={() => {
        router.push({
          pathname: "/(root)/workspace/chatHistory/[id]",
          params: {
            id: item.id,
            data: JSON.stringify(item),
            chatType: item.isGroup ? "Group" : "DM ",
            sectionType: sectionType.type,
          },
        });
      }}
    >
      <View className="flex-1 ml-4 border-b border-gray-200 pb-4">
        <View className="flex-row justify-between items-start">
          <Text
            numberOfLines={1}
            className="flex-1 text-xl font-bold text-black"
          >
            {item.name}
          </Text>
          <Text className="ml-3 text-base text-gray-500">{item.time}</Text>
        </View>
        <View className="flex-row items-center justify-between mt-1">
          <Text numberOfLines={2} className="flex-1 text-lg text-gray-700">
            {item.lastMessage}
          </Text>
          <View className="flex-row items-center ml-3">
            {item.muted && (
              <Ionicons name="volume-mute" size={18} color="#6B7280" />
            )}
            {item.unreadCount > 0 && (
              <View className="ml-2 w-7 h-7 rounded-full bg-blue-500 items-center justify-center">
                <Text className="text-white text-sm font-bold">
                  {item.unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Pressable>
  );

  const renderListHeader = useCallback(() => {
    return (
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-2 my-2.5 mx-1"
      >
        {sectionTypes.map((section) => {
          const isActiveSection = section.type === sectionType.type;

          return (
            <Pressable
              key={section.type}
              onLayout={handleSectionLayout(section.type)}
              className={`h-10 px-5 ml-2.5 ${
                isActiveSection ? "bg-blue-400" : "bg-gray-200"
              } rounded-3xl justify-center items-center`}
              onPress={() => handleSectionPress(section)}
            >
              <Text
                className={`${
                  isActiveSection
                    ? "text-white font-bold text-base"
                    : "text-gray-800 font-semibold text-base"
                }`}
              >
                {section.type}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    );
  }, [handleSectionPress, sectionType.type]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="ml-5 mt-5 font-bold text-2xl">{sectionType.header}</Text>
      <Pressable
        onPress={handleSearchNavigation}
        className="bg-gray-300 h-12 mx-2.5 mt-5 px-5 rounded-xl  items-center flex-row"
      >
        <Ionicons name="search" size={24} color={Colors.placeholderGrey} />
        <Text className="ml-2 text-xl text-gray-500">Search</Text>
      </Pressable>
      <FlatList
        contentContainerStyle={{ paddingBottom: 160 }}
        data={messages}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        renderItem={renderItem}
      />
      <Pressable
        className="absolute flex-row justify-center self-end items-center bg-blue-400 rounded-full w-16 h-16 right-5 bottom-28"
        onPress={() => {
          Alert.alert("Opening Bottom Sheet For New Message Creation");
        }}
      >
        <AntDesign name={"plus"} size={24} color={Colors.white} />
      </Pressable>
    </SafeAreaView>
  );
};

export default MessagesScreen;
