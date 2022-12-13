import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<View>
				<Text>Higher or lower?</Text>
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
		marginTop: 16,
	}
});

export default GameScreen;
