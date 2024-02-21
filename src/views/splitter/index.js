import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

import {
  MainContainer,
  FirstConatiner,
  SecContainer,
  HeadingSection,
  TextSection,
  RightConatiner,
  LeftContainer,
  FirstRightConatiner,
  InputSection,
  MidSection,
  TipSection,
  LastSection,
  LastInputSection,
  LeftDarkContainer,
  TopTextDetails,
  MidTextDetails,
  TextInRow,
  BottomText,
  FirstText,
  SecTextForDetails,
  ButonContainer,
  BottomTextSection,
  SPlTextSection,
  SelectTipContainer,
  ButtonText,
  StyledNumberInput,
  ErrorMessage,
} from "../../styles/views/splitter";

const defaultTipState = [
  { percentage: "5%", isCustom: false, isClick: false },
  { percentage: "10%", isCustom: false, isClick: false },
  { percentage: "15%", isCustom: false, isClick: false },
  { percentage: "25%", isCustom: false, isClick: false },
  { percentage: "50%", isCustom: false, isClick: false },
  { percentage: "Custom", isCustom: false, isClick: false },
];

export const SplitterView = () => {
  const initialState = {
    billAmount: "",
    tipPercentage: null,
    customTipAmount: "",
    numberOfPeople: "",
    tipAmountPerPerson: 0,
    totalAmountPerPerson: 0,
    tip: defaultTipState,
  };

  const [state, setState] = useState(initialState);

  const handleTipClick = (clickedPercentage) => {
    setState((prev) => ({
      ...prev,
      tipPercentage: parseFloat(clickedPercentage),
      tip: prev.tip.map((item) => ({
        ...item,
        isClick: item.percentage === clickedPercentage,
        isCustom:
          item.percentage === "Custom" && item.percentage === clickedPercentage,
      })),
    }));
  };

  const handleCalculateTip = () => {
    let tipAmount = 0;

    const selectedTip = state.tip.find((item) => item.isClick);

    if (selectedTip) {
      if (selectedTip.isCustom && state.customTipAmount !== "") {
        tipAmount = parseFloat(state.customTipAmount);
      } else {
        tipAmount =
          (parseFloat(state.billAmount) * parseFloat(selectedTip.percentage)) /
          100;
      }
    }

    const totalAmount = parseFloat(state.billAmount) + tipAmount;
    const numberOfPeopleFloat = parseFloat(state.numberOfPeople);

    setState((prev) => ({
      ...prev,
      tipAmountPerPerson: tipAmount / numberOfPeopleFloat,
      totalAmountPerPerson: totalAmount / numberOfPeopleFloat,
    }));
  };

  const handleReset = () => {
    setState(initialState);
  };

  const tipAmountPerPersonText = isNaN(state.tipAmountPerPerson)
    ? "$0.00"
    : `$${state.tipAmountPerPerson.toFixed(2)}`;

  const totalAmountPerPersonText = isNaN(state.totalAmountPerPerson)
    ? "$0.00"
    : `$${state.totalAmountPerPerson.toFixed(2)}`;

  const allPropertiesHaveValues = Object.values(state).every(
    (value) => value !== ""
  );

  const isAnyTipClicked = state.tip
    .filter((tip) => tip.percentage !== "Custom")
    .some((tip) => tip.isClick);

  const numberOfPeopleIsZero = state.numberOfPeople === "0";

  useEffect(() => {
    handleCalculateTip();
  }, [
    state.billAmount,
    state.tipPercentage,
    state.customTipAmount,
    state.numberOfPeople,
  ]);

  return (
    <MainContainer>
      <FirstConatiner>
        <HeadingSection>
          <SPlTextSection>SPLT </SPlTextSection>
          <BottomTextSection>TTER</BottomTextSection>
        </HeadingSection>
      </FirstConatiner>
      <SecContainer>
        <RightConatiner>
          <FirstRightConatiner>
            <TextSection>Bill</TextSection>
            <InputSection>
              <StyledNumberInput
                prefix={"$"}
                type="number"
                placeholder="0"
                value={state.billAmount}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, billAmount: e.target.value }))
                }
              />
            </InputSection>
          </FirstRightConatiner>
          <MidSection>
            <TextSection>Select Tip %</TextSection>
            <TipSection>
              {state.tip.map((item, index) => (
                <div key={item.key || index}>
                  <SelectTipContainer
                    onClick={() => handleTipClick(item.percentage)}
                    className={item.isClick ? "selected" : ""}
                  >
                    {item.isCustom === true ? (
                      <StyledNumberInput
                        type="number"
                        placeholder="Custom Tip Amount"
                        value={state.customTipAmount}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            customTipAmount: e.target.value,
                          }))
                        }
                        prefix={"$"}
                      />
                    ) : (
                      item.percentage
                    )}
                  </SelectTipContainer>
                </div>
              ))}
            </TipSection>
          </MidSection>
          <LastSection>
            <TextSection>
              <div>Number of People</div>
              <ErrorMessage>
                {numberOfPeopleIsZero && "Can,t be zero"}
              </ErrorMessage>
            </TextSection>

            <LastInputSection>
              <StyledNumberInput
                placeholder="0"
                type="number"
                status={numberOfPeopleIsZero ? "error" : ""}
                value={state.numberOfPeople}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    numberOfPeople: e.target.value,
                  }))
                }
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </LastInputSection>
          </LastSection>
        </RightConatiner>
        <LeftContainer>
          <LeftDarkContainer>
            <TopTextDetails>
              <TextInRow>
                <FirstText>Tip Amount</FirstText>
                <SecTextForDetails>/Person</SecTextForDetails>
              </TextInRow>
              <BottomText>{tipAmountPerPersonText}</BottomText>
            </TopTextDetails>
            <MidTextDetails>
              <TextInRow>
                <FirstText>Total</FirstText>
                <SecTextForDetails>/Person</SecTextForDetails>
              </TextInRow>
              <BottomText>{totalAmountPerPersonText}</BottomText>
            </MidTextDetails>
            <ButonContainer>
              <ButtonText
                onClick={handleReset}
                className={
                  !allPropertiesHaveValues && !isAnyTipClicked ? "disable" : ""
                }
              >
                Reset
              </ButtonText>
            </ButonContainer>
          </LeftDarkContainer>
        </LeftContainer>
      </SecContainer>
    </MainContainer>
  );
};
