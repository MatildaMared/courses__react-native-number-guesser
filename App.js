import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsRunning, setGameIsRunning] = useState(false);
	const [numberOfRounds, setNumberOfRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	function selectedNumberHandler(selectedNumber) {
		setUserNumber(selectedNumber);
		setGameIsRunning(true);
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsRunning(false);
		setNumberOfRounds(numberOfRounds);
	}

	function restartGame() {
		setUserNumber(null);
		setNumberOfRounds(0);
	}

	let screen = <StartGameScreen onSelectNumber={selectedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
		);
	}

	if (!gameIsRunning && userNumber) {
		screen = (
			<GameOverScreen
				userNumber={userNumber}
				numberOfRounds={numberOfRounds}
				onRestart={restartGame}
			/>
		);
	}

	return (
		<LinearGradient
			onLayout={onLayoutRootView}
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
