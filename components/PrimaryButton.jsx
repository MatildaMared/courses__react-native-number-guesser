import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
				android_ripple={{ color: "#5f0632" }}
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
		backgroundColor: "#72063c",
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
