import styled from "styled-components";
import { Input } from "antd";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c5e4e7;
  justify-content: center;
`;
export const FirstConatiner = styled.div``;
export const SecContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 646px;
  background-color: white;
  border-radius: 10px;
  gap: 10px;
`;
export const HeadingSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 3px;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`;
export const TextSection = styled.div`
  font-family: IBM Plex Mono;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.div`
  font-family: IBM Plex Mono;
  font-size: 20px;
  font-weight: 500;
  color: #b48372;
`;

export const SPlTextSection = styled.div`
  display: flex;
  width: 12vw;
  font-size: 29px;
  font-weight: 600;
  justify-content: center;
  font-family: IBM Plex Mono;
  color: #406667;
`;
export const BottomTextSection = styled.div`
  display: flex;
  justify-content: center;
  width: 12vw;
  font-size: 29px;
  font-weight: 600;
  font-family: IBM Plex Mono;
  color: #406667;
`;
export const RightConatiner = styled.div`
  width: 36vw;
  min-height: 546px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 23px;
`;
export const LeftContainer = styled.div`
  width: 36vw;
  min-height: 546px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FirstRightConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33vw;
  padding: 20px;
`;
export const InputSection = styled.div`
  padding: 17px 5px 0px 0px;
`;
export const TipSection = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 20px;
`;

export const MidSection = styled.div`
  padding: 20px;
`;
export const LastSection = styled.div`
  padding: 20px;
`;

export const LastInputSection = styled.div`
  padding-top: 20px;
`;
export const LeftDarkContainer = styled.div`
  width: 33vw;
  min-height: 436px;
  background-color: #00474b;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const TopTextDetails = styled.div`
  width: 29vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
export const MidTextDetails = styled.div`
  width: 29vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;
export const TextInRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const BottomText = styled.div`
  font-family: IBM Plex Mono;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;

  font-family: IBM Plex Mono;
  font-size: 32px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;

  font-family: IBM Plex Mono;
  font-size: 50px;
  font-weight: 500;
  color: #21c3ac;
`;

export const FirstText = styled.div`
  font-family: IBM Plex Mono;
  font-size: 20px;
  font-weight: 500;

  color: #ffffff;
`;
export const SecTextForDetails = styled.div`
  font-family: IBM Plex Mono;
  font-size: 16px;
  font-weight: 500;

  color: #649ba0;
`;
export const ButonContainer = styled.div`
  width: 397px;
  height: 55px;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const SelectTipContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  background-color: #00474b;

  &.selected {
    background-color: #9fe8dd;
    color: #00474b;
  }
`;

export const ButtonText = styled.div`
  width: 397px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9fe8df;
  border-radius: 10px;
  font-family: IBM Plex Mono;
  font-size: 17px;
  font-weight: 700;
  /* pointer-events: ${(props) => (props.isDisable ? "none" : "auto")}; */

  &.disable {
    color: #004849;
    background-color: #0d686d;
    pointer-events: none;
  }
`;
export const StyledNumberInput = styled(Input)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
