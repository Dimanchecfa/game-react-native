import io from "socket.io-client";

const socket = io("http://localhost:8080");

socket.on("fromServer", (data) => {
  console.log("Message from server: " + data);
});
socket.on("connection", () => {
  console.log("New client connected");
  socket.emit("fromServer", { data: "Welcome to the socket.io server" });
});
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GameBoard } from "./src/screens/gameboard";

export default function App() {
  console.log("App started");

  return <GameBoard />;
}

const styles = StyleSheet.create({});
