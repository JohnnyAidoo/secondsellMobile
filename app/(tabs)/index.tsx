import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, ScrollView } from "react-native";
import { Surface, Text } from "react-native-paper";
import { View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import CardComp from "../../components/cardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";

export default function TabOneScreen() {
  type ProductType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };

  const [products, setProducts] = useState<ProductType[]>();
  const WIDTH = Dimensions.get("screen").width;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setProducts(res.data);
    });
  });
  return (
    <>
      <StatusBar />
      <ScrollView style={{ backgroundColor: Colors.light.background }}>
        <Surface
          style={{
            width: WIDTH,
            display: "flex",
            flexDirection: "row",
            marginLeft: 30,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "50%", backgroundColor: "white" }}>
            <Animatable.View animation={"fadeInDownBig"}>
              <Text
                variant="displayLarge"
                style={{ fontWeight: "bold", color: Colors.light.tint }}
              >
                New
              </Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUpBig"}>
              <Text variant="displayLarge" style={{ fontWeight: "bold" }}>
                Arrivals
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                soluta, ipsa aspernatur obcaecati! Reprehenderit, accusamus?
              </Text>
            </Animatable.View>
          </View>
          <View style={{ width: "50%" }}>
            <Animatable.Image
              animation="fadeInLeftBig"
              style={{ width: WIDTH / 2.5, height: "auto", aspectRatio: 1 }}
              source={{
                uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              }}
            />
          </View>
        </Surface>

        <FlatList
          scrollEnabled={false}
          style={{ width: WIDTH, padding: 10 }}
          numColumns={2}
          renderItem={({ item }) => (
            <CardComp
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          )}
          data={products}
        />
      </ScrollView>
    </>
  );
}
