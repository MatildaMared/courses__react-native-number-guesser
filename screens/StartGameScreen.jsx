import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function StartGameScreen(props) {
	const { onSelectNumber } = props;
	const [number, setNumber] = useState("");

	function numberChangeHandler(enteredText) {
		setNumber(enteredText);
	}

	function resetInputHandler() {
		setNumber("");
	}

	function confirmHandler() {
		const chosenNumber = parseInt(number);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number!",
				"Number has to be a number between 1 and 99.",
				[{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
			);
		}

		onSelectNumber(chosenNumber);
	}

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<Text style={styles.text}>Enter a number between 1 and 99</Text>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={number}
					onChangeText={numberChangeHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={confirmHandler}>Start Game</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 16,
		marginTop: 48,
	},
	numberInput: {
		height: 48,
		width: 48,
		fontSize: 32,
		borderBottomColor: Colors.secondary500,
		borderBottomWidth: 2,
		color: Colors.secondary500,
		marginVertical: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonContainer: {
		flex: 1,
	},
	text: {
		color: Colors.secondary400,
		fontFamily: "open-sans",
	},
});

export default StartGameScreen;
