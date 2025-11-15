import { Text, View, Image, TextInput, Button } from "react-native";
import React, { useState } from 'react';
import tw from "twrnc";

export default function Index() {
  const [text, setText] = useState<string>('');
  return (
    <View style={tw`flex justify-center items-center`}>
      <View>
        <View style={tw`flex justify-center items-center w-24 h-24 bg-gray-200 rounded-full`}>
          <Image
            source={require("../assets/lamp-icon.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <Text>Let's get started</Text>
        <Text>Sign up or login to your account.</Text>
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
        Button
        </View>
      </View>
    </View>
  );
}
