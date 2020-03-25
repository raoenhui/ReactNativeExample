import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, Animated } from 'react-native';
const imgs = [
    require('./image/bird/00_03.png'),
    require('./image/bird/01_03.png'),
    require('./image/bird/02_03.png'),
    require('./image/bird/03_03.png'),
    require('./image/bird/04_03.png'),
    require('./image/bird/05_03.png'),
    require('./image/bird/06_03.png'),
    require('./image/bird/07_03.png'),
    require('./image/bird/08_03.png'),
    require('./image/bird/09_03.png'),
    require('./image/bird/10_03.png'),
    require('./image/bird/11_03.png'),
    require('./image/bird/12_03.png'),
    require('./image/bird/13_03.png'),
    require('./image/bird/14_03.png'),
    require('./image/bird/15_03.png'),
    require('./image/bird/16_03.png'),
    require('./image/bird/17_03.png'),
    require('./image/bird/18_03.png')

];
const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        box: {
            flex: 1,
            width: 250,
            height: 250,
            position: 'relative',
            overflow: 'hidden',
        },
        hint: {
            flex: 1,
            marginTop: 200
        },
        imgBg: {
            flex: 1,
            height: 250,
            position: 'absolute',
            left: 0,
            top: 0
        },
        imgBg1: {
            flex: 1,
            width: 250,
            height: 250,
            // position:'left',
            bottom: 40
        }
    })



export default () => {

    const [fadeAnim] = useState(new Animated.Value(0))  // 透明度初始值设为0

    const [imgIndex, setimgIndex] = useState(0);
    const [time, settime] = useState(60);
    let myInterval;
    useEffect(() => {

        this.setAnimated();
        this.setTime();
        return () => {
            // 清除订阅
            myInterval && clearInterval(myInterval);
        };
    })
    setAnimated = () => {
        Animated.loop(
            Animated.stagger(
                16.7,
                [Animated.timing(                  // 随时间变化而执行动画
                    fadeAnim,                       // 动画中的变量值
                    {
                        toValue: -250,                   // 透明度最终变为1，即完全不透明
                        duration: 16.7,              // 让动画持续一段时间
                    }
                ), Animated.timing(                  // 随时间变化而执行动画
                    fadeAnim,                       // 动画中的变量值
                    {
                        toValue: -500,                   // 透明度最终变为1，即完全不透明
                        duration: 16.7,              // 让动画持续一段时间
                    }
                )
                ]
            )).start();
    }
    setTime = () => {
        if (myInterval === undefined) {
            myInterval = setInterval(() => {
                let i = imgIndex + 1;
                i = i % imgs.length;
                setimgIndex(i)
                setTime(time == 0 ? 60 : time - 1)
                console.log("i==", i)
            }, 100);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Animated.Image source={require('./image/bird/aBird.png')} style={{
                    ...styles.imgBg, left: fadeAnim
                }} />
                <Text style={styles.hint}>Animated结果</Text>
            </View>
            <ImageBackground source={require('./image/bird/aBird.png')} style={styles.imgBg1}>
                <Text style={styles.hint}>静态图片</Text>
            </ImageBackground>
            <ImageBackground source={imgs[imgIndex]} style={styles.imgBg1}>
                <Text style={styles.hint}>setInterval结果</Text>
            </ImageBackground>



        </View>
    )

}
