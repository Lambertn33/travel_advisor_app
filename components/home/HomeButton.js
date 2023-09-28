import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const HomeButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
    backgroundColor: "#00bcc9",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },
});
