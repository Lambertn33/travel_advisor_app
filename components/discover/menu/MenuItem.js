import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../../helpers/colors";

const MenuItem = ({ menu, menuActive, onActivateMenu }) => {
  const activateMenu = (key) => {
    onActivateMenu(key);
  };

  return (
    <TouchableOpacity style={styles.menu} onPress={() => activateMenu(menu.key)}>
      <View
        style={
          menuActive
            ? [styles.menuImageContainer, styles.menuActive]
            : styles.menuImageContainer
        }
      >
        <Image source={menu.image} style={styles.menuImage} />
      </View>
      <Text style={styles.menuTitle}>{menu.title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menu: {
    alignItems: "center",
    gap: 2,
  },
  menuActive: {
    backgroundColor: Colors.secondaryLight,
    borderRadius: 50,
    overflow: "hidden",
  },
  menuImageContainer: {
    width: 60,
    height: 60,
  },
  menuImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  menuTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: Colors.primaryGreen,
  },
});
