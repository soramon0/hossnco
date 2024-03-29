import React, { useRef, useState } from 'react';
import { Transitioning, TransitioningView } from 'react-native-reanimated';
import { useLocalization } from '../../context/Localization';
import { Slide } from '../../utils/animations';
import Signup from './Signup';
import Signin from './Signin';
import ForgotPassword from './ForgotPassword';
import Box from '../../components/Box';
import Text from '../../components/Text';
import ButtonOpacity from '../../components/ButtonOpacity';

const BoardingForm = () => {
	const { t } = useLocalization();
	const tabOneRef = useRef<TransitioningView>();
	const tabTwoRef = useRef<TransitioningView>();
	const tabThreeRef = useRef<TransitioningView>();

	const [showSignup, setShowSignup] = useState(false);
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	const toggleForgotPassword = () => {
		tabTwoRef.current?.animateNextTransition();
		setShowForgotPassword((state) => !state);
	};

	return (
		<Box paddingHorizontal='xl'>
			<Box
				height='99%'
				maxHeight={450}
				minHeight={370}
				backgroundColor='mainBackground'
				top='-8%'
				paddingVertical='lg'
				paddingHorizontal='xxl'
				borderRadius={30}
				elevation={2}
			>
				<Box flexDirection='row' justifyContent='space-between'>
					<ButtonOpacity
						borderBottomWidth={!showSignup ? 1 : 0}
						onPress={() => {
							tabOneRef.current?.animateNextTransition();
							setShowSignup(false);
							setShowForgotPassword(false);
						}}
					>
						<Text paddingBottom='xs'>{t('onBoarding.signin')}</Text>
					</ButtonOpacity>
					<ButtonOpacity
						borderBottomWidth={showSignup ? 1 : 0}
						onPress={() => {
							tabTwoRef.current?.animateNextTransition();
							setShowSignup(true);
						}}
					>
						<Text paddingBottom='xs'> {t('onBoarding.signup')}</Text>
					</ButtonOpacity>
				</Box>

				<Box marginTop='xl'>
					<Transitioning.View
						// @ts-ignore
						ref={tabOneRef}
						transition={<Slide type='scale' />}
					>
						{!showSignup && !showForgotPassword && (
							<Signin toggleForgotPassword={toggleForgotPassword} />
						)}
					</Transitioning.View>

					<Transitioning.View
						// @ts-ignore
						ref={tabTwoRef}
						transition={<Slide type='fade' />}
					>
						{showSignup && <Signup />}
					</Transitioning.View>

					<Transitioning.View
						// @ts-ignore
						ref={tabThreeRef}
						transition={<Slide type='scale' />}
					>
						{showForgotPassword && !showSignup && (
							<ForgotPassword toggleForgotPassword={toggleForgotPassword} />
						)}
					</Transitioning.View>
				</Box>
			</Box>
		</Box>
	);
};

export default BoardingForm;
