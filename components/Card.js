import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/customColors";

function Card({ children }) {
  return <View style={styles.Card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  Card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
