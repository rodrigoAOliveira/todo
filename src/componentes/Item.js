import React from "react"
import { StyleSheet, Text, TouchableOpacity, CheckBox } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <Text>{this.props.value}</Text>
                <CheckBox
                  onPress={() => {!this.props.check}}
                    style={{paddingRight:30}}
                    value={this.props.check}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

});
