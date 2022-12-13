import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsRunning, setGameIsRunning] = useState(false);

	function selectedNumberHandler(selectedNumber) {
		setUserNumber(selectedNumber);
		setGameIsRunning(true);
	}

	function gameOverHandler() {
		setGameIsRunning(false);
	}

	let screen = <StartGameScreen onSelectNumber={selectedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
		);
	}

	if (!gameIsRunning && userNumber) {
		screen = <GameOverScreen />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary500, Colors.secondary500]}
			style={styles.root}
		>
			<ImageBackground
				source={require("./assets/images/background.png")}
				resizeMode="cover"
				style={styles.root}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.root}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.1,
	},
});
