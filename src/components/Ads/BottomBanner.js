import React from "react";
import styled from "styled-components";
import { Platform } from 'react-native'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from "expo";

const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: ${Platform.isPad ? 'auto' : '50px'};
`;

export const BottomBanner = props => (
  <Container>
    <AdMobBanner
      bannerSize={Platform.isPad ? "smartBannerPortrait" : "banner"} 
      adUnitID="ca-app-pub-8371010681825945/4941519159"
    />
  </Container>
);
