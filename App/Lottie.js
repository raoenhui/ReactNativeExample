import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex:1
        }
    })

export default class Lottie extends Component {
    render() {
        return (
   
            <LottieView
                source={require('./json/test.json')}
                autoPlay={true}
                style={styles.container} />
  
        )
    }
}
