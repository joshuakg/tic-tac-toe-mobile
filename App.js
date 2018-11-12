import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/Home";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
