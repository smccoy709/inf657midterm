import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "./AddItem";

const ShoppingList = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const images = [
    {
      id: "0",
      image:
        "https://images.squarespace-cdn.com/content/v1/5eecc807ed0b34634531b2eb/1645802422007-G7SB4ZC8NVZBZBEUZRU8/FOIC_NZICBLOG1.jpg",
      name: "Ice Cream",
    },
    {
      id: "1",
      image:
        "https://pintsizedbaker.com/wp-content/uploads/2013/06/fudge-brownies-homemade-ecipe.jpg",
      name: "Brownies",
    },
    {
      id: "2",
      image:
        "https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg",
      name: "Cakes",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/31747_sfs-lemon-meringue-pie-3-sq",
      name: "Pies",
    },
    {
      id: "4",
      image:
        "https://img.freepik.com/premium-photo/cake-macaron-macaroon-stack-turquoise-background-colorful-mint-pink-almond-cookies-pastel-colors_93314-4586.jpg",
      name: "Macarons",
    },
  ];
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  }
  const decreaseQuantity = (item) => {
    if(item.quantity == 1){
      dispatch(removeFromCart(item));
    }else{
      dispatch(decrementQuantity(item));
    }
  }
  return (
    <SafeAreaView>
          <ScrollView>
      <Text style={styles.appTitleStyle}>
        Scotty's Bakery!
      </Text>
      {images.map((item) => (
        <Pressable
          key={item.id}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ margin: 10 }}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 8 }}
              source={{ uri: item.image }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            {cart.some((value) => value.id == item.id) ? (
              <Pressable onPress={() => removeItemFromCart(item)}>
                <Text style={styles.addToCartText}>
                  REMOVE FROM CART
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => addItemToCart(item)}>
                <Text style={styles.addToCartText}>
                  ADD TO CART
                </Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      ))}
      <Text style={styles.cartHeadingStyle}>
        Your Cart Items
      </Text>
      {cart.map((item,index) => (
        <View style={{padding:10}} key={index}>
          <Text>{item.name}</Text>
          <Image style={styles.imageStyle}
              source={{ uri: item.image }}/>
          <Pressable
            style={{
              flexDirection: "row",
              marginTop:20,
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable onPress={() => decreaseQuantity(item)}>
              <Text
                style={styles.textStyle}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
            <Text
                style={styles.textStyle}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable onPress={() => increaseQuantity(item)}>
            <Text
                style={styles.textStyle}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 10,
  },
  appTitleStyle: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },
  cartHeadingStyle: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
  },
  addToCartText: {
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 6,
  }
});

export default ShoppingList;