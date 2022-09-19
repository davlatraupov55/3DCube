import React, { Component } from 'react';
import {
  PanResponder,
  View,
  Text,
  LogBox
} from 'react-native';
import { transformOrigin, rotateXY, rotateXZ } from "./utils"
import { WIDTH } from "./consts"
import CardFirst from './cards/CardFirst';
import CardThird from './cards/CardThird';
import CardFive from './cards/CardFive';
import CardSix from './cards/CardSix';
import CardFour from './cards/CardFour';
import CardSecond from './cards/CardSecond';


LogBox.ignoreAllLogs()

const styles = {
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'

  },
  rectangle: {
    position: 'absolute',
    width: WIDTH / 1.2,
    height: WIDTH / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default class Cube extends Component {


  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: this.handlePanResponderMove.bind(this)
  });

  handlePanResponderMove(e, gestureState) {
    const { dx, dy } = gestureState;
    const origin = { x: 0, y: 0, z: -(WIDTH / 1.2) / 2 };

    let matrix = rotateXY(dx, dy);
    transformOrigin(matrix, origin);
    this.refViewFront.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });


    matrix = rotateXY(dx + 180, dy);
    transformOrigin(matrix, origin);
    this.refViewBack.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });

    matrix = rotateXY(dx + 90, dy);
    transformOrigin(matrix, origin);
    this.refViewRight.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });

    matrix = rotateXY(dx - 90, dy);
    transformOrigin(matrix, origin);
    this.refViewLeft.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });

    matrix = rotateXZ(dx, dy - 90);
    transformOrigin(matrix, origin);
    this.refViewTop.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });

    matrix = rotateXZ(-dx, dy + 90);
    transformOrigin(matrix, origin);
    this.refViewBottom.setNativeProps({ style: { transform: [{ perspective: 5200 }, { matrix: matrix }] } });
  }




  renderLeft() {
    return (


      <View
        ref={component => this.refViewRight = component}
        style={[styles.rectangle, { backgroundColor: 'blue' }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 2</Text>

        <CardSecond />

      </View>
    )
  }



  renderRight() {
    return (
      <View
        ref={component => this.refViewLeft = component}
        style={[styles.rectangle, { backgroundColor: 'green', }]}
        {...this.panResponder.panHandlers}
      >

        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 4</Text>
        <CardFour />

      </View>
    )
  }

  renderFront() {
    return (
      <View
        ref={component => this.refViewFront = component}
        style={[styles.rectangle, { backgroundColor: 'yellow', }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 1</Text>

        <CardFirst />


      </View>
    )
  }

  renderBack() {
    return (
      <View
        ref={component => this.refViewBack = component}
        style={[styles.rectangle, { backgroundColor: 'red', }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 3</Text>

        <CardThird />

      </View>
    )
  }

  renderTop() {
    return (
      <View
        ref={component => this.refViewTop = component}
        style={[styles.rectangle, { backgroundColor: 'dodgerblue', }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 5</Text>

        <CardFive />

      </View>
    )
  }

  renderBottom() {
    return (
      <View
        ref={component => this.refViewBottom = component}
        style={[styles.rectangle, { backgroundColor: 'gray', }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={{ fontSize: WIDTH / 20, color: 'black' }} >Вопрос 6</Text>

        <CardSix />

      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBottom()}
        {this.renderBack()}
        {this.renderLeft()}
        {this.renderRight()}
        {this.renderTop()}
        {this.renderFront()}
      </View>
    );
  }
}