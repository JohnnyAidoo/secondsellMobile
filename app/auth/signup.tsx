import { View } from "react-native";
import { Button, Divider, Surface, Text, TextInput } from "react-native-paper";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { Link, Stack } from "expo-router";
//@ts-ignore
import Svg from "../../assets/images/wave.svg";
function SignUp() {
  const HEIGHT = Dimensions.get("window").height;
  const WIDTH = Dimensions.get("window").width;
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.light.tint },
          headerLeft: () => <></>,
        }}
      />

      <View
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            justifyContent: "space-around",
            paddingHorizontal: 20,
            marginBottom: 150,
          }}
        >
          <View
            style={{ gap: 10, backgroundColor: "transparent", width: "100%" }}
          >
            <Text
              variant="headlineLarge"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Create An Account
            </Text>
            <TextInput
              placeholder="name"
              mode="outlined"
              outlineStyle={{
                borderRadius: 30,
                borderColor: "transparent",
                backgroundColor: Colors.light.background,
              }}
              style={{ width: "100%" }}
              activeOutlineColor={Colors.light.tint}
            />
            <TextInput
              placeholder="email"
              mode="outlined"
              outlineStyle={{
                borderRadius: 30,
                borderColor: "transparent",
                backgroundColor: Colors.light.background,
              }}
              style={{ width: "100%" }}
              activeOutlineColor={Colors.light.tint}
            />
            <TextInput
              placeholder="password"
              outlineStyle={{
                borderRadius: 30,
                borderColor: "transparent",
                backgroundColor: Colors.light.background,
              }}
              mode="outlined"
              style={{ width: "100%" }}
              activeOutlineColor={Colors.light.tint}
            />
            <Button
              buttonColor={Colors.light.tint}
              mode="contained"
              style={{ paddingVertical: 5, borderRadius: 15 }}
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
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              You Already have an Account?{" "}
              <Link href={"/auth/login"}>
                <Text variant="bodyLarge" style={{ color: Colors.light.tint }}>
                  Login
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>

      <Svg
        style={{
          width: WIDTH,
          height: 150,
          position: "absolute",
          top: 0,
          marginTop: -50,
        }}
      ></Svg>
    </>
  );
}

export default SignUp;
