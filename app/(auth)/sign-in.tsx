import { Colors, DURATION, MMKV_KEYS } from "@/constants";
import { setItem } from "@/utils";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Required", "Both email and password are required!");
      return;
    }
    setIsLoading(true);

    // Simulate Login for 1000ms
    setTimeout(() => {
      setItem(MMKV_KEYS.IS_SIGNED_IN, true);
      router.replace("/");
      setIsLoading(false);
    }, DURATION.MS_1000);
  };

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Text className="text-2xl ml-5 mt-24">Sign In</Text>
      <Text className="text-gray-500 ml-5 mt-10 mb-2">Enter Email</Text>
      <TextInput
        className="h-12 mx-5 border border-gray-700 rounded-2xl px-5 text-black"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={Colors.placeholderGrey}
      />
      <Text className="text-gray-500 ml-5 mt-5 mb-2">Enter Password</Text>
      <TextInput
        className="h-12 mx-5 border border-gray-700 rounded-2xl px-5 text-black"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={Colors.placeholderGrey}
      />
      <Pressable
        className="bg-blue-500 p-5 w-56 self-center mt-10 rounded-2xl"
        onPress={handleLogin}
      >
        {isLoading ? (
          <ActivityIndicator color={"white"} size={"small"} />
        ) : (
          <Text className="text-white text-center font-bold">Sign In</Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default SignInScreen;
