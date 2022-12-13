import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
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
		<View style={styles.inputContainer}>
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
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginHorizontal: 24,
		borderRadius: 8,
		marginTop: 48,
		backgroundColor: Colors.primary700,
		elevation: 8,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		alignItems: "center",
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
});

export default StartGameScreen;
