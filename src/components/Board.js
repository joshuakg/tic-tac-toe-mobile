import React from "react";
import { Dimensions, Platform } from "react-native";
import styled from "styled-components";
import * as Actions from "../actions";
import { connect } from "react-redux";
import Grid from "./Grid/Grid";

const { width } = Dimensions.get("window");

const Container = styled.View`
  width: ${props => props.isPad ? width - width / 2 : width - width / 10};
  height: ${props => props.isPad ? width - width / 2 : width - width / 10};
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Vertical = styled.View`
  height: 100%;
  width: 2%;
  position: absolute;
  background-color: #1d3133;
  border-radius: 10px;
  opacity: 0.3;
`;
const Horizontal = styled.View`
  height: 2%;
  width: 100%;
  position: absolute;
  background-color: #1d3133;
  border-radius: 10px;
  opacity: 0.3;
`;

const LeftVertical = styled(Vertical)`
  left: 32%;
`;
const RightVertical = styled(Vertical)`
  right: 32%;
`;
const TopHorizontal = styled(Horizontal)`
  top: 32%;
`;
const BottomHorizontal = styled(Horizontal)`
  bottom: 32%;
`;

class Board extends React.Component {
  render() {
    return (
      <Container isPad={Platform.isPad}>
        {this.props.board.map((content, index) => {
          let y = index
          return content.map((content, index) => {
            return (
              <Grid
                onPress={this.dispatchPlayerAction}
                activeOpacity={content === null ? 0 : 1}
                key={index}
                value={content}
                y={y}      
                x={index}          
              />
            );
          });
        })}
        <LeftVertical />
        <RightVertical />
        <TopHorizontal />
        <BottomHorizontal />
      </Container>
    );
  }

  dispatchPlayerAction = (x, y) => {
    const { turn, dispatch, board } = this.props;
    if (board[y][x] !== null) return;
    dispatch(Actions.handlePlayerAction(x, y));
  };
}

const stateToProps = state => {
  return {
    board: state.board,
    turn: state.turn
  };
};

export default connect(stateToProps)(Board);
