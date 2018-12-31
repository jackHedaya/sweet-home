import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import Main from "./components/major/Main"

export default class App extends React.Component {
  render() {
    return (
     <NativeRouter>
       <Route to="/" component={Main}></Route>
     </NativeRouter>
    );
  }
}