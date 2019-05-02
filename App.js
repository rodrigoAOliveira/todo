import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, FlatList } from 'react-native';
import Item from "./src/componentes/Item"
export default class App extends React.Component {
  state = {
    todoList: [
      {key:"key1", value: "teste1", check: false },
      {key:"key2", value: "teste2", check: true },
    ]
  }
  _renderItem = ({ item, index }) => <Item
     value={item.value}
    check={item.check}
  />

  render() {
    const { todoList } = this.state
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 40 }}>
          <FlatList
            data={todoList}
            keyExtractor={i => String(i.key)}
            renderItem={this._renderItem}
          />
        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({

});
