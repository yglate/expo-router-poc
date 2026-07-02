import { Colors, DURATION, MMKV_KEYS } from "@/constants";
import { setItem } from "@/utils";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignup = () => {
    if ((!email || !password) && password === confirmPassword) {
      Alert.alert(
        "Required",
        "Both email and password are required! & Password and Confirm Password Should Match",
      );
      return;
    }
    setIsLoading(true);

    // Simulate Sign Up for 1000ms
    setTimeout(() => {
      setItem(MMKV_KEYS.IS_SIGNED_IN, true);
      router.replace("/");
      setIsLoading(false);
    }, DURATION.MS_1000);
  };

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Text className="text-2xl ml-5 mt-24">Sign Up</Text>
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
      <Text className="text-gray-500 ml-5 mt-5 mb-2">Confirm Password</Text>
      <TextInput
        className="h-12 mx-5 border border-gray-700 rounded-2xl px-5 text-black"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor={Colors.placeholderGrey}
      />
      <Pressable
        className="bg-blue-500 p-5 w-56 self-center mt-10 rounded-2xl"
        onPress={handleSignup}
      >
        {isLoading ? (
          <ActivityIndicator color={"white"} size={"small"} />
        ) : (
          <Text className="text-white text-center font-bold">Sign Up</Text>
        )}
      </Pressable>
      <View className="flex-row justify-center gap-1 mt-10">
        <Text className="text-gray-500">Already have an account?</Text>
        <Link href="/sign-in" replace>
          <Text className="text-blue-600 font-bold">Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
