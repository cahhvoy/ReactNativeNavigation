import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'

export default class Welcome extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Dashboard')}
            />
            <Button title="Sign Up" onPress={() => alert('button pressed')} />
          </View>
        )
    }
}

const styles = StyleSheet.create({})
