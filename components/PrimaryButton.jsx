import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton(props) {
	const { onPress, children } = props;

	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.innerContainer]
						: styles.innerContainer
				}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={styles.text}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		borderRadius: 8,
		margin: 4,
		overflow: "hidden",
	},
	innerContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 16,
		paddingHorizontal: 32,
		elevation: 2,
	},
	text: {
		color: "#FFF",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.5,
	},
});

export default PrimaryButton;
