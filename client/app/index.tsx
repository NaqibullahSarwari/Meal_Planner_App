import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function Index() {
  const [text, setText] = useState<string>("");
  return (
    <>
      <View style={tw`flex justify-center items-center bg-[#F3F4F6]`}>
        <View
          style={tw`flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full mt-12`}
        >
          <Image
            source={require("../assets/lamp-icon.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <Text style={tw`font-semibold text-[#000000] text-[45px] pt-8`}>
          Let's get started
        </Text>
        <Text style={tw`text-[#9CA3AF] font-semibold text-[19px] pt-4`}>
          Sign up or login to your account.
        </Text>
        <View style={tw`mt-8`}>
          <Text style={tw`text-[#6B7280] text-xl font-semibold`}>Email</Text>
          <TextInput
            style={tw`bg-[#FFFFFF] mt-1 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-black shadow-xl`}
            placeholder="Enter your Email"
            value={text}
          />
        </View>
        <View style={tw`mt-4`}>
          <Text style={tw`text-[#6B7280] text-xl font-semibold`}>Password</Text>
          <TextInput
            style={tw`bg-[#FFFFFF] mt-1 text-[#D1D5DB] text-lg pl-4 font-semibold h-20 w-95 rounded-xl shadow:bg-black shadow-xl`}
            placeholder="Enter your Password"
            value={text}
          />
          <Text style={tw`text-[#6B7280] font-semibold text-xl mt-2`}>
            Forgot Password?
          </Text>
        </View>
        <View style={tw`mt-4`}>
          <TouchableOpacity
            style={tw`flex justify-center items-center bg-[#000000] w-95 h-20 rounded-xl`}
          >
            <Text style={tw`text-[#FFFFFF] font-semibold text-2xl`}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center items-center my-6 px-4`}>
          <Text style={tw`text-[#6B7280] font-semibold text-xl`}>
            or continue with
          </Text>
        </View>
      </View>
    </>
  );
}
