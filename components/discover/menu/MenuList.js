import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { menus } from "./menus";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [activeType, setActiveType] = useState("hotels");

  const activateMenuHandler = (key) => setActiveType(key);

  const renderMenus = () => {
    return menus.map((menu) => {
      return (
        <MenuItem
          menuActive={activeType === menu.key}
          onActivateMenu={activateMenuHandler}
          key={menu.key}
          menu={menu}
        />
      );
    });
  };
  return <View style={styles.menuContainer}>{renderMenus()}</View>;
};

export default MenuList;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});
