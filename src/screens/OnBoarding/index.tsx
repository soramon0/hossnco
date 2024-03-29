import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalization } from '../../context/Localization';
import Box from '../../components/Box';
import Text from '../../components/Text';
import useTheme from '../../hooks/useTheme';
import BoardingForm from './BoardingForm';

const OnBoardingScreen = () => {
	const { colors } = useTheme();
	const { t } = useLocalization();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Box flex={1}>
				<Box height='30%' minHeight={210}>
					<LinearGradient
						style={styles.headerContainer}
						colors={[colors.gradientStart, colors.gradientEnd]}
						end={{ y: 0.99, x: 0.99 }}
					>
						<Text color='textWhite' fontSize={35}>
							{t('greeting')}
						</Text>
						<Text color='textWhite' fontSize={12} marginTop='sm'>
							{t('onBoardingIntro')}
						</Text>
					</LinearGradient>
				</Box>

				<Box height='60%'>
					<BoardingForm />
				</Box>

				<Box
					height='10%'
					justifyContent='center'
					alignItems='center'
					paddingVertical='xl'
				>
					<Text>HOSS & COMPANY</Text>
				</Box>
			</Box>
		</TouchableWithoutFeedback>
	);
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
	headerContainer: {
		height: '100%',
		paddingHorizontal: '8%',
		paddingTop: '10%',
	},
});
