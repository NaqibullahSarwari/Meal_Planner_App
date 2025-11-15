import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";


const ButtonUI = () => {
  return (
    <View style={tw`mt-8`}>
      <TouchableOpacity
        style={tw`flex justify-center items-center bg-[#000000] w-95 h-20 rounded-xl`}
      >
        <Text style={tw`text-[#FFFFFF] font-medium text-2xl`}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonUI;
