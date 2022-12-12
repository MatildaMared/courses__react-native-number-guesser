import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<PrimaryButton>Reset</PrimaryButton>
				<PrimaryButton>Start Game</PrimaryButton>
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
		backgroundColor: "#55062d",
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
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default StartGameScreen;
