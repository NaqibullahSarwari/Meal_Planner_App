import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import React from "react";
import InputEmail from "./ui/InputEmail";
import ButtonUI from "./ui/ButtonUI";
import HeaderText from "./ui/HeaderText";
import InputPassword from "./ui/InputPassword";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6]`}>
        <HeaderText />
        <View style={tw`flex justify-center items-center`}>
          <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-2`}>
            Already have an account?
          </Text>
          <Text
            onPress={() => router.push("/login-screen")}
            style={tw`text-black font-bold text-[19px] pt-1 pl-2`}
          >
            Log in to your account
          </Text>
        </View>
        <InputEmail />
        <InputPassword /> 
        <ButtonUI />
        <View style={tw`flex-row justify-center items-center my-6 px-4`}>
          <Text style={tw`text-[#6B7280] font-semibold text-xl`}>
            or continue with
          </Text>
        </View>
      </View>
    </>
  );
}
