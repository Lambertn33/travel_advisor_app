import { StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { Images } from "../../helpers/images";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const HomeImage = () => {
  return (
    <Animatable.Image
      animation="fadeIn"
      easing="ease-in-out"
      style={styles.image}
      source={Images.heroImage}
    />
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  image: {
    objectFit: "contain",
    height: deviceHeight,
    width: deviceWidth,
  },
});
