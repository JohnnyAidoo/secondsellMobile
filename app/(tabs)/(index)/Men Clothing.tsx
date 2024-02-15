import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, ScrollView } from "react-native";
import { Surface, Text } from "react-native-paper";
import Colors from "../../../constants/Colors";
import CardComp from "../../../components/cardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { View } from "../../../components/Themed";

export default function MenCloths() {
  type ProductType = {
    id: number;
    title: string;
    category: string;
    price: string | number;
    description: string;
    image: string;
    rating: any;
  };

  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
  ]);
  const [Ad, setAd] = useState<ProductType>();

  const WIDTH = Dimensions.get("screen").width;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res: any) => {
        setProducts(res.data);
      });
    setAd(products[Math.floor(Math.random() * 4)]);
  }, []);
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
                variant="displayMedium"
                style={{ fontWeight: "bold", color: Colors.light.tint }}
              >
                New
              </Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUpBig"}>
              <Text variant="displayMedium" style={{ fontWeight: "bold" }}>
                Arrivals
              </Text>
              <Text>{Ad?.title}</Text>
            </Animatable.View>
          </View>
          <View style={{ width: "50%", backgroundColor: "white" }}>
            <Animatable.Image
              resizeMethod="scale"
              resizeMode="center"
              animation="fadeInLeftBig"
              style={{ width: WIDTH / 2.5, height: "auto", aspectRatio: 1 }}
              source={{
                uri: Ad?.image,
              }}
            />
          </View>
        </Surface>

        <FlatList
          scrollEnabled={false}
          style={{ width: WIDTH, padding: 10 }}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Animatable.View animation={"fadeInDown"} delay={index * 100}>
              <CardComp
                id={item.id}
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price as string}
                image={item.image}
              />
            </Animatable.View>
          )}
          data={products}
        />
      </ScrollView>
    </>
  );
}
