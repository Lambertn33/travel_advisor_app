import { StyleSheet, View, ScrollView } from "react-native";
import { DiscoverHeader, DiscoverSearch, MenuList } from "../components/discover";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverHeader />
      <DiscoverSearch />
      <ScrollView>
        <MenuList />
      </ScrollView>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 6,
  },
});
