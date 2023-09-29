import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../helpers/colors";

const MenuItem = ({ menu }) => {
  return (
    <View style={styles.menu}>
      <View style={styles.menuImageContainer}>
        <Image source={menu.image} style={styles.menuImage} />
      </View>
      <Text style={styles.menuTitle}>{menu.title}</Text>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menu: {
    alignItems: "center",
    gap: 2,
  },
  menuImageContainer: {
    width: 60,
    height: 60,
  },
  menuImage: {
    width: "100%",
    height: "100%",
    objectFit: 'contain'
  },
  menuTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: Colors.primaryGreen,
  },
});
