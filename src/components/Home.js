import React, { Component } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import styled from "styled-components";
import Board from "./Board";
import { connect } from "react-redux";
import * as Actions from "../actions";
import { AdMobInterstitial } from "expo-ads-admob";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width};
  height: 100%;
  background-color: #7acfd3;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;
const TopMessageContainer = styled.View`
  width: ${width};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: #1d3133;
  opacity: 0.8;
`;

const RestartButton = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: #1d3133;
  opacity: ${props => (props.isVisible ? "0.7" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Restart = styled.Text`
  color: #fafafa;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 2px;
`;

class Home extends Component {
  handleStateReset = async () => {
    try {
      AdMobInterstitial.setAdUnitID("ca-app-pub-8371010681825945/3386608954");
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      this.props.dispatch(Actions.resetState());
    } catch (error) {
      this.props.dispatch(Actions.resetState());
    }
  };

  get isButtonHidden() {
    return this.props.winner !== null || this.props.gridLock;
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "#7acfd3" }}>
        <Container>
          <TopMessageContainer>
            <Message>
              {this.props.gridLock
                ? "Whoops! Grid Lock!"
                : this.props.winner === null
                ? this.props.turn
                  ? "X's turn"
                  : "O's turn"
                : this.props.winner
                ? "X won"
                : "O won"}
            </Message>
          </TopMessageContainer>
          <Board />
          <RestartButton
            disabled={!this.isButtonHidden}
            isVisible={this.isButtonHidden}
            onPress={this.handleStateReset}
            activeOpacity={0.5}
          >
            <Restart>new game</Restart>
          </RestartButton>
        </Container>
      </SafeAreaView>
    );
  }
}

const stateToProps = state => {
  return {
    winner: state.winner,
    turn: state.turn,
    gridLock: state.gridLock
  };
};

export default connect(stateToProps)(Home);
