import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import { Colors } from "../../helpers/colors";

const HomeButton = ({ onNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <Animatable.View
        animation={"pulse"}
        easing="ease-in-out"
        iterationCount={"infinite"}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go</Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
  },

  button: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryGreen,
  },
  buttonText: {
    color: Colors.primaryLight,
    fontSize: 24,
    fontWeight: "800",
  },
});
