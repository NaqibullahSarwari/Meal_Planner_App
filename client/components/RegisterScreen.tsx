import { Text, View } from "react-native";
import tw from "twrnc";
import React from "react";
import InputEmail from "./ui/InputEmail";
import ButtonUI from "./ui/ButtonUI";
import HeaderText from "./ui/HeaderText";
import InputPassword from "./ui/InputPassword";

export default function Register() {

  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6]`}>
        <HeaderText/>
        <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-4`}>
          Sign up or login to your account.
        </Text>
        <InputEmail/>
        <InputPassword/>
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
