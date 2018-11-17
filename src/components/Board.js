import React from "react";
import { Dimensions, Image, Text } from "react-native";
import styled from "styled-components";
import * as Actions from "../actions";
import { connect } from "react-redux";
// import Player1Symbol from "./assets/O.png";
// import Player2Symbol from "./assets/X.png";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  width: ${width - width / 10};
  height: ${width - width / 10};
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Grid = styled.TouchableOpacity`
  width: 33.33%;
  height: 33.33%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const Icon = styled.Image`
  width: 50%;
  height: 50%;
`;

class Board extends React.Component {
  render() {
    return (
      <Container>      
        {this.props.board.map((content, index) => {
          return (
            <Grid
              activeOpacity={content.value === null ? 0.5 : 1}
              key={index}
              onPress={() => {
                this.props.winner === null ?
                this.playerAction(content.uri, index)
                : null
              }}
            >
              <Icon source={content.uri} />
            </Grid>
          );
        })}
        <LeftVertical />
        <RightVertical />
        <TopHorizontal />
        <BottomHorizontal />
      </Container>
    );
  }

  playerAction = (uri, index) => {
    const { turn, dispatch } = this.props;
    if (uri !== null) return;
    dispatch(Actions.playerTurn(index, turn));
  };
}

const stateToProps = state => {
  return {
    board: state.board,
    turn: state.turn,
    winner: state.winner
  };
};

export default connect(stateToProps)(Board);
