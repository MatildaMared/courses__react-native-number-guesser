import { useState, useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	Alert,
	FlatList,
	useWindowDimensions,
} from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

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
	const [rounds, setRounds] = useState([initialGuess]);
	const { width } = useWindowDimensions();

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	useEffect(() => {
		if (currentGuess === userNumber) {
			gameOverHandler(rounds.length);
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
		setRounds((currentRounds) => [newNumber, ...currentRounds]);
	}

	let content = (
		<Card>
			<Text style={styles.text}>Higher or lower?</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View style={styles.buttonsContainer}>
				<PrimaryButton onPress={() => nextGuessHandler("lower")}>
					<Feather name="minus" size={16} color="white" />
				</PrimaryButton>
				<PrimaryButton onPress={() => nextGuessHandler("higher")}>
					<Feather name="plus" size={16} color="white" />
				</PrimaryButton>
			</View>
		</Card>
	);

	if (width > 500) {
		content = (
			<>
				<Text style={[styles.text, { marginTop: 16 }]}>Higher or lower?</Text>
				<View style={styles.buttonsContainerWide}>
					<PrimaryButton onPress={() => nextGuessHandler("lower")}>
						<Feather name="minus" size={16} color="white" />
					</PrimaryButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<PrimaryButton onPress={() => nextGuessHandler("higher")}>
						<Feather name="plus" size={16} color="white" />
					</PrimaryButton>
				</View>
			</>
		);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<FlatList
				data={rounds}
				keyExtractor={(item) => item.toString()}
				renderItem={(itemData) => (
					<GuessLogItem
						round={rounds.length - itemData.index}
						guess={itemData.item}
					>
						{itemData.item}
					</GuessLogItem>
				)}
			/>
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
		fontFamily: "open-sans",
		textAlign: "center",
	},
	buttonsContainerWide: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default GameScreen;
