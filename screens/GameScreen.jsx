import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
	const random = Math.floor(Math.random() * (max - min)) + min;

	if (random === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return random;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
	const { userNumber, gameOverHandler } = props;
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			gameOverHandler();
		}
	}, [currentGuess, userNumber, gameOverHandler]);

	function nextGuessHandler(direction) {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess - 1;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);

		setCurrentGuess(newNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<Card>
				<Text style={styles.text}>Higher or lower?</Text>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonsContainer}>
					<PrimaryButton onPress={() => nextGuessHandler("lower")}>
						Lower
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler("higher")}>
						Higher
					</PrimaryButton>
				</View>
			</Card>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
		marginTop: 16,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	text: {
		color: Colors.secondary400,
	},
});

export default GameScreen;
