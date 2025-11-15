import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import tw from "twrnc";
import SendCode from "./ui/SendCode";

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <>
      <View>
        <Text
          style={tw`font-semibold text-[#000000] font-[Roboto] pl-8 text-[35px] pt-8`}
        >
          Forgot Password?
        </Text>
        <View style={tw`mt-8`}>
          <TextInput
            style={tw`bg-[#FFFFFF] ml-8 mt-1 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-gray-400 shadow-md`}
            placeholder="Enter your Email"
          />
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={tw`items-center`}
        >
          <Text style={tw`mt-4 text-[#6B7280] font-semibold text-xl`}>
            Back to login
          </Text>
        </TouchableOpacity>
        <View style={tw`flex justify-bottom items-bottom`}>
          <SendCode />
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;
