import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { Dimensions, Pressable, View } from "react-native";
import { IconButton, Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";

function ProductInfo() {
  type ProductType = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  };

  const [product, setProduct] = useState<ProductType>();
  const [numberOfItemsToBuy, setNumberOfItemsToBuy] = useState<number>(1);
  const { productInfo } = useLocalSearchParams();
  const HEIGHT = Dimensions.get("screen").height;
  const WIDTH = Dimensions.get("screen").width;

  // useEffect(() => {
  //   numberOfItemsToBuy < 1
  //     ? setNumberOfItemsToBuy(1)
  //     : setNumberOfItemsToBuy(numberOfItemsToBuy);
  // });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productInfo}`)
      .then((res: any) => {
        setProduct({
          id: res.data.id,
          category: res.data.category,
          description: res.data.description,
          image: res.data.image,
          price: res.data.price,
          title: res.data.title,
        });
      });
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "white" },
          headerLeft: () => (
            <Ionicons
              name="return-down-back-outline"
              size={25}
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      <ScrollView style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
        <Surface
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "white",
          }}
        >
          <Animatable.Image
            source={{ uri: product?.image }}
            width={WIDTH - 100}
            height={WIDTH / 1.5}
            resizeMode="contain"
            animation={"fadeInDownBig"}
          />
        </Surface>
        <Text variant="displaySmall" style={{ fontWeight: "bold" }}>
          {product?.title}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* price */}
          <Text
            variant="headlineMedium"
            style={{ color: Colors.light.tint, fontWeight: "bold" }}
          >
            £{product?.price}
          </Text>

          <Surface
            elevation={2}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              icon="minus"
              iconColor="black"
              disabled={numberOfItemsToBuy === 1}
              onPress={() => {
                setNumberOfItemsToBuy(numberOfItemsToBuy - 1);
              }}
            />
            <Text>{numberOfItemsToBuy}</Text>
            <IconButton
              icon="plus"
              iconColor="black"
              onPress={() => {
                setNumberOfItemsToBuy(numberOfItemsToBuy + 1);
              }}
            />
          </Surface>
        </View>
        <Text variant="bodyMedium">{product?.description}</Text>
      </ScrollView>

      <Pressable>
        <Surface
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: Colors.light.tint,
            paddingVertical: 10,
            justifyContent: "center",
            gap: 20,
            borderRadius: 30,
            position: "fixed",
            bottom: 0,
          }}
        >
          {/* <Text
            variant="headlineSmall"
            style={{ fontWeight: "400", color: Colors.light.background }}
          >
            Total : ${product?.price * numberOfItemsToBuy}
          </Text> */}
          <Text
            variant="headlineSmall"
            style={{ fontWeight: "400", color: Colors.light.background }}
          >
            <FontAwesome name="shopping-bag" size={25} />
            <Text style={{ color: Colors.light.tint }}>z</Text>
            Add To Cart
          </Text>
        </Surface>
      </Pressable>
    </>
  );
}

export default ProductInfo;
