import tw from "twrnc";
import ForgotPassword from "../components/ForgotPasswordScreen";
import { View } from "react-native";

export default function ForgotPasswordScreen() {
  return (
    <View style={tw`flex-1`}>
      <ForgotPassword />
    </View>
  );
}