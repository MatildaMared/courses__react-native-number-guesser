import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
	return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: Colors.secondary400,
		textAlign: "center",
		padding: 16,
		backgroundColor: "rgba(211, 179, 74, 0.15)",
		borderRadius: 8,
		overflow: "hidden",
	},
});

export default Title;
