import { StyleSheet, View } from "react-native";
import { menus } from "./menus";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const renderMenus = () => {
    return menus.map((menu, key) => {
      return <MenuItem key={key} menu={menu} />;
    });
  };
  return <View style={styles.menuContainer}>{renderMenus()}</View>;
};

export default MenuList;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'flex-end'
  },
});
