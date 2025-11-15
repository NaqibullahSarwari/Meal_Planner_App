import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

export default function Index() {
  const [text, setText] = useState<string>("");
  return (
    <View style={tw`flex justify-center items-center`}>
      <View
          style={tw`flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full mt-12`}
        >
          <Image
            source={require("../assets/lamp-icon.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <Text style={tw`font-semibold text-[#000000] text-4xl pt-8`}>Let's get started</Text>
        <Text style={tw`text-[#9CA3AF] font-semibold text-lg pt-4`}>Sign up or login to your account.</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={tw`bg-gray-200 h-20 w-40`}
            placeholder="Enter your Email"
            value={text}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={tw`bg-gray-200 h-20 w-40`}
            placeholder="Enter your Password"
            value={text}
          />
        </View>
        <View>
          <TouchableOpacity style={tw`bg-[#000000]`}>
            <Text style={tw`text-[#FFFFFF]`}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center my-6 px-4">
          <Text className="mx-4 text-gray-400 text-sm">or continue with</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>
    </View>
  );
}
