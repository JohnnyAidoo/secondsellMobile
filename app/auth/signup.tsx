import { View } from "react-native";
import { Button, Divider, Surface, Text, TextInput } from "react-native-paper";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
function SignUp() {
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;
  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }}
      >
        <Text
          variant="headlineLarge"
          style={{
            fontWeight: "bold",
            color: Colors.light.tint,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Second Sell
        </Text>
        <Text variant="labelLarge" style={{ textAlign: "left" }}>
          Sign up
        </Text>
        <View
          style={{ gap: 10, backgroundColor: "transparent", width: "100%" }}
        >
          <TextInput
            placeholder="name"
            mode="outlined"
            style={{ width: "100%" }}
            activeOutlineColor={Colors.light.tint}
          />
          <TextInput
            placeholder="password"
            mode="outlined"
            style={{ width: "100%" }}
            activeOutlineColor={Colors.light.tint}
          />
          <Button
            buttonColor={Colors.light.tint}
            mode="contained"
            style={{ paddingVertical: 5 }}
          >
            SIGN IN
          </Button>
        </View>

        {/* divider and or */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Divider bold style={{ borderColor: "black", width: 100 }} />
          <Text>or</Text>
          <Divider bold style={{ borderColor: "black", width: 100 }} />
        </View>
        {/*  */}
        <View>
          <Text style={{ textAlign: "center" }}>
            You Already have an Account? <Button mode="text">Log in</Button>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
