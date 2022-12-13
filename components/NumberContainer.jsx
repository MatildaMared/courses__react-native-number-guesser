import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NumberContainer(props) {
	const { children } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(75, 5, 40, .5)",
		padding: 16,
		borderRadius: 10000000,
		width: 150,
		height: 150,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		marginVertical: 16,
	},
	text: {
		color: Colors.secondary500,
		fontSize: 48,
		fontWeight: "bold",
	},
});

export default NumberContainer;
