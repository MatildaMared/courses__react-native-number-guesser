import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function Title(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: "rgba(211, 179, 74, 0.15)",
		borderRadius: 8,
		overflow: "hidden",
	},
	text: {
		textAlign: "center",
		fontFamily: "open-sans-bold",
		color: Colors.secondary400,
		fontSize: 18,
	},
});

export default Title;
