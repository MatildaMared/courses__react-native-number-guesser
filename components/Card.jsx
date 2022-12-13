import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function Card(props) {
	return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 16,
		borderRadius: 8,
		backgroundColor: Colors.primary700,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		alignItems: "center",
	},
});

export default Card;
