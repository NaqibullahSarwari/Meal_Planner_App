import React from "react";
import tw from "twrnc";
import { View, Text, Image } from "react-native";

const ScanResultsScreen = () => {
  return (
    <>
      <View style={tw`bg-[#F3F4F6]`}>
        <View>
          <Image></Image>
          <Text style={tw`font-semibold text-[#000000] text-[35px] pt-8`}>
            Organic Whole Milk
          </Text>
          <Text style={tw`text-gray-400 font-semibold text-[22px] pt-2`}>
            Good & Gather
          </Text>
        </View>
        <View
          style={tw`bg-white w-95 h-28 rounded-3xl shadow:bg-gray-400 shadow-lg`}
        >
          <Text style={tw`font-semibold text-[#000000] text-[24px] pt-8`}>
            Ingredients
          </Text>
          <Text style={tw`text-gray-400 font-semibold text-[22px] pt-2`}>
            Organic Grade A Milk, Vitamin D3.
          </Text>
        </View>
        <View
          style={tw`bg-white w-95 h-32 rounded-3xl shadow:bg-gray-400 shadow-lg mt-4`}
        >
          <Text style={tw`font-semibold text-[#000000] text-[26px] pl-6 pt-8`}>
            Nutrition Facts
          </Text>
          <Text style={tw`font-normal text-[#000000] text-[24px] pt-4 pl-6`}>
            Calories
            <Text style={tw`font-bold text-[#000000] text-[24px] pl-50`}>
              120
            </Text>
          </Text>
          <View
            style={tw`border-gray-300 border-2 border-t-0 border-l-0 border-r-0 pt-3 w-85 ml-5`}
          ></View>
        </View>
        <View style={tw`bg-white`}></View>
        <View style={tw`bg-white`}></View>
      </View>
    </>
  );
};

export default ScanResultsScreen;
