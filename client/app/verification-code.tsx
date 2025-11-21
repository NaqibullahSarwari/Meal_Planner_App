import tw from "twrnc";
import { View } from "react-native";
import VerificationCodeScreen from "../components/VerificationCodeScreen"

export default function verificationCodeScreen() {
  return (
    <View style={tw`flex-1`}>
      <VerificationCodeScreen />
    </View>
  );
}