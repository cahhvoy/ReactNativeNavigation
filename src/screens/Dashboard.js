import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Dashboard extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DashboardScreen</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({})
