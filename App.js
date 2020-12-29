import React from 'react';
import { StyleSheet, View } from 'react-native';
import OnlineShoppingScreen from './OnlineShoppingScreen';
import AddToCartScreen from './AddToCartScreen'
import PaymentSuccessfulScreen from './PaymentSuccessfulScreen'

export default function App() {
	return (
		<View style={styles.container}>
			<OnlineShoppingScreen />
      {/* <AddToCartScreen /> */}
      {/* <PaymentSuccessfulScreen /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { 
    marginTop: 80,
    marginHorizontal: 30
	},
});
