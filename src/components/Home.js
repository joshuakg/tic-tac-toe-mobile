import React, { Component } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Board from "./Board";
import { connect } from "react-redux";
import * as Actions from '../actions'

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width};
  height: ${height};
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
  width: 35%;
  height: 7%;
  border-radius: 20px;
  background-color: #1d3133;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonPlaceHolder = styled.View`
  width: 35%;
  height: 7%;
`

const Restart = styled.Text`
  color: #fafafa;
  font-size: 20px;
  font-weight: 600;
`;

class Home extends Component {
  render() {
    return (
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
        {this.props.winner !== null || this.props.gridLock ? (
          <RestartButton onPress={this.handleStateReset} activeOpacity={0.5}>
            <Restart>new game</Restart>
          </RestartButton>
        ) : (
          <ButtonPlaceHolder/>
        )}
      </Container>
    );
  }

  handleStateReset = () => {
    this.props.dispatch(Actions.resetState())
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
