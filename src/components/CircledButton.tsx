import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import ButtonOpacity from './ButtonOpacity';
import useTheme from '../context/useTheme';

interface Props {
	text?: string;
	iconName?: string;
}

const CircledButton: React.FC<Props> = ({
	children,
	text,
	iconName,
	...props
}) => {
	const { colors } = useTheme();

	return (
		<ButtonOpacity
			width={90}
			height={90}
			borderRadius={45}
			justifyContent='center'
			alignItems='center'
			{...props}
		>
			{children ? (
				children
			) : (
				<LinearGradient
					colors={[colors.gradientStart, colors.gradientEnd]}
					end={{ x: 0.99, y: 0.99 }}
					style={styles.innerCircle}
				>
					<Feather name={iconName!} size={45} color='white' />
				</LinearGradient>
			)}
		</ButtonOpacity>
	);
};

CircledButton.defaultProps = {
	iconName: 'arrow-right',
};

export default CircledButton;

const styles = StyleSheet.create({
	innerCircle: {
		width: 75,
		height: 75,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 75,
	},
});
