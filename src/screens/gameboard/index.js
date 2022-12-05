import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { WIDTH } from "../../utils/constant/app.constant";

export const GameBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View styles={styles.box_row}>
          <View style={styles.box}>
            <View style={[styles.circle, styles.red]}></View>
            <View style={[styles.circle, styles.red]}></View>
            <View style={[styles.circle, styles.red]}></View>
            <View style={[styles.circle, styles.red]}></View>
          </View>
          <View style={styles.v_line}>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.green]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.circle, styles.green]}></View>
            <View style={[styles.circle, styles.green]}></View>
            <View style={[styles.circle, styles.green]}></View>
            <View style={[styles.circle, styles.green]}></View>
          </View>
        </View>
        <View styles={styles.middle_row}>
          <View style={styles.h_line}>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
            </View>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
            </View>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell, styles.red]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
            </View>
          </View>
          <View style={styles.ludo_board}></View>
          <View style={styles.h_line}>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
            </View>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell]}></View>
            </View>
            <View style={styles.h_line_row}>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell]}></View>
              <View style={[styles.h_line_cell, styles.yellow]}></View>
              <View style={[styles.h_line_cell]}></View>
            </View>
          </View>
        </View>
        {/* <View styles={styles.box_row}>
          <View style={styles.box}>
            <View style={[styles.circle, styles.blue]}></View>
            <View style={[styles.circle, styles.blue]}></View>
            <View style={[styles.circle, styles.blue]}></View>
            <View style={[styles.circle, styles.blue]}></View>
          </View>
          <View style={styles.v_line}>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell, styles.blue]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
            <View style={styles.v_line_row}>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell]}></View>
              <View style={[styles.v_line_cell]}></View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={[styles.circle, styles.yellow]}></View>
            <View style={[styles.circle, styles.yellow]}></View>
            <View style={[styles.circle, styles.yellow]}></View>
            <View style={[styles.circle, styles.yellow]}></View>
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameContainer: {
    width: WIDTH * 0.85,
    height: WIDTH * 0.85,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "red",
    flexDirection: "row",
  },
  box_row: {
    width: WIDTH * 0.85,
    height: WIDTH * 0.35,
    borderWidth: 1,
    borderColor: "black",
  },
  box: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.35,
    backgroundColor: "blue",
  },
  // v_line: {
  //   height: WIDTH * 0.35,
  //   width: WIDTH * 0.1,
  //   backgroundColor: "#ed4541",
  // },
  // circle: {
  //   height: WIDTH * 0.05,
  //   width: WIDTH * 0.05,
  //   borderRadius: WIDTH * 0.05,
  //   margin: 5,
  // },
});
