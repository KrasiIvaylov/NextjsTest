import styled from "styled-components";


import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
  SectionInnerHeading,
  SectionParagraph,
} from "~/components";

export const StyledContainer = styled(({height, ...props }) => (
  <SectionContainer {...props} />
))`
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  margin-top: 100px
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin-bottom: 0;
  @media only screen and (min-width: 2560px) {
    font-size: 70px;
    margin-bottom: 32px;
  }
  @media only screen and (min-width: 341px) and (max-width: 580px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 340px) {
    font-size: 24px;
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin-bottom: 70px;
  margin-top: 30px;
  @media only screen and (min-width: 2560px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 341px) and (max-width: 580px) {
    font-size: 12.5px;
    line-height: 0;
  }
  @media only screen and (max-width: 340px) {
    font-size: 12px;
    line-height: 0;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 50%;
  width: 320px;
  @media only screen and (min-width: 2560px) {
    width: 640px;
    height: auto;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 224;
  }
`;

export const StyledCardTitle = styled((props) => <SectionInnerHeading {...props} />)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 17px;
  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
  
  @media only screen and (min-width: 2560px) {
    font-size: 32px;
    line-height: 32px;
    padding-top: 32px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 580px) {
    font-size: 13px;
  }
`;

export const StyledCardDescription = styled((props) => <SectionParagraph {...props} />)`
  font-size: 13px;
  margin-top: 0;
  padding-right: 17;
  @media only screen and (min-width: 2560px) {
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 18px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    font-size: 10px;
    line-height: 17px;
  }
  @media only screen and (max-width: 580px) {
    font-size: 9px;
    line-height: 17px;
  }
`;

export const StyledIconImage = styled(({ ...props }) => <div {...props} />)`
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  padding: 50px 40px;
  margin: auto 0;
  @media only screen and (min-width: 2560px) {
    max-width: 56px;
    max-height: 56px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    max-width: 32px;
    max-height: 32px;
    padding: 32px 32px;
  }
  @media only screen and (max-width: 580px) {
    max-width: 32px;
    max-height: 32px;
    padding: 32px 32px;
  }
`;

export const StyledSubSection = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  @media only screen and (min-width: 2560px) {
    width: 80%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 60%;
  }
  @media only screen and (max-width: 1023px) {
    flex-wrap: wrap;
    width: 60%;
  }
  @media only screen and (min-width: 769px) and (max-width: 980px) {
    width: 75%;
  }
  @media only screen and (min-width: 501px) and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 17px;
  margin-left: 50px;
  width: 90%;
  
  @media only screen and (min-width: 2560px) {
    width: 42%;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 50%;
  }
  @media only screen and (max-width: 1023px){
    dispay: flex;
    align-items: center;
    width: 70%;
    margin: 1rem 0;
  }
  @media only screen and (min-width: 851px) and (max-width: 985px) {
    width: 60%;
  }
  @media only screen and (min-width: 680px) and (max-width: 850px) {
    width: 70%;
  }
  @media only screen and (min-width: 581px) and (max-width: 679px) {
    width: 80%;
  }
  @media only screen and (min-width: 421px) and (max-width: 580px) {
    width: 70%;
  }
  @media only screen and (min-width: 373px) and (max-width: 420px) {
    width: 80%;
  }
  @media only screen and (min-width: 341px) and (max-width: 372px) {
    width: 90%;
  }
  @media only screen and (max-width: 340px){
    width: 93%;
  }
}
`;

export const StyledCardText = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
`;

export const StyledBackgroundImgContainer = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  z-index: -1;
  width: 99%;
  height: 70%;
  margin-top: 32px;
  
  @media only screen and (min-width: 2560px) {
    width: 90%;
    height: 100%;
  }
  @media only screen and (min-width: 1400px) and (max-width: 1500px){
    width: 90%;
    height: 80%;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1399px) {
    width: 100%;
    height: 60%;
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 580px) {
    height: 50%;
    top: 530px;
  }
`;

export const Container = styled(({ ...props }) => <div {...props} />)`
  width: 100vw;
  height: 90%;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 2560px) {
    width: 100vw;
    height: 100%;
  }
  @media only screen and (max-width: 340px) {
    width: 100%;
  }
  `;