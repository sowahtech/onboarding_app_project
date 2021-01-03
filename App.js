import React from 'react';
import { StyleSheet, View } from 'react-native';
import OnlineShoppingScreen from './src/screen/OnlineShoppingScreen';
import AddToCartScreen from './src/screen/AddToCartScreen'
import PaymentSuccessfulScreen from './src/screen/PaymentSuccessfulScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>

			<Stack.Navigator>
				<Stack.Screen 
					options = {{
						title: "Screen 1/3",
						headerStyle: {
							backgroundColor: "#DC90EC",
							height: 70
						},
						headerTintColor: "white",
						headerTitleAlign: "center",
						headerRight: ()=>{
							return <AntDesign style={{marginRight: 10}}
										name="arrowright" size={24} color="white" />
						}
					}}

					name="OnlineShopping" component={OnlineShoppingScreen} />
				<Stack.Screen 
					options = {{
						title: "Screen 2/3",
						headerStyle: {
							backgroundColor: "#DC90EC",
							height: 70
						},
						headerTintColor: "white",
						headerTitleAlign: "center",
						
					}}
					name="AddToCart" component={AddToCartScreen} />
				<Stack.Screen 
					options = {{
						title: "Screen 3/3",
						headerStyle: {
							backgroundColor: "#DC90EC",
							height: 70
						},
						headerTintColor: "white",
						headerTitleAlign: "center",
						
					}}
					name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
			</Stack.Navigator>

		</NavigationContainer>
	);
}

