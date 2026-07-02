import { DURATION, MMKV_KEYS } from "@/constants";
import { setItem } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const SettingsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoading(true);

    // Simulate Logout for 250ms
    setTimeout(() => {
      setItem(MMKV_KEYS.IS_SIGNED_IN, false);
      router.replace("/sign-in");
      setIsLoading(false);
    }, DURATION.MS_250);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <StatusBar style="dark" />
      <Pressable
        className="bg-blue-500 p-5 w-56 self-center mt-10 rounded-2xl"
        onPress={handleLogout}
      >
        {isLoading ? (
          <ActivityIndicator color={"white"} size={"small"} />
        ) : (
          <View className="flex-row justify-center items-center">
            <Ionicons name="log-out" color={"white"} size={24} />
            <Text className="text-white text-center font-bold mx-2">
              Log Out
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default SettingsScreen;
