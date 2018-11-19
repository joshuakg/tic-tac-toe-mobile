import React from "react";
import styled from "styled-components";
import X from "../../assets/X.png";
import O from "../../assets/O.png";

const Grid = styled.TouchableOpacity`
  width: 33.33%;
  height: 33.33%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.Image`
  width: 50%;
  height: 50%;
`;

const GridComponent = props => (
  <Grid
    {...props}
    onPress={() => {
      props.onPress(props.x, props.y);
    }}
  >    
    <Icon source={props.value === null ? null : props.value ? X : O} />
  </Grid>
);

export default GridComponent;
