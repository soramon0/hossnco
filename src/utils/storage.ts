import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.log(error);
	}
};