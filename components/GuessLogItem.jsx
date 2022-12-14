import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function GuessLogItem(props) {
	const { round, guess } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.number}>Round #{round}</Text>
			<Text style={styles.guess}>
				Opponent's Guess: <Text style={styles.bold}>{guess}</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginBottom: 16,
		backgroundColor: "rgba(87, 20, 43, .6)",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	number: {
		fontFamily: "open-sans-bold",
		color: Colors.secondary500,
	},
	guess: {
		fontFamily: "open-sans",
		color: Colors.secondary400,
	},
	bold: {
		fontFamily: "open-sans-bold",
	},
});

export default GuessLogItem;
