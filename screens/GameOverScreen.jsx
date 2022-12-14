import { View, StyleSheet, Image, Text } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "./../components/PrimaryButton";

function GameOverScreen(props) {
	const { numberOfRounds, userNumber, onRestart } = props;
	return (
		<View style={styles.container}>
			<Title>Game is over!</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("./../assets/images/success.png")}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text>{" "}
				rounds to guess the number{" "}
				<Text style={styles.highlight}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 32,
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 7000,
		borderWidth: 3,
		borderColor: Colors.secondary500,
		overflow: "hidden",
		margin: 16,
		alignSelf: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 18,
		textAlign: "center",
		marginBottom: 16,
	},
	highlight: {
		color: Colors.primary500,
		fontFamily: "open-sans-bold",
	},
});

export default GameOverScreen;
