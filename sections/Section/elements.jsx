import styled from "styled-components";
import { SectionContainer, SectionBigHeading,SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: block;
  padding: 6rem 0;
  background: url(/img/background.png) no-repeat 1.2rem 15.7rem;
  background-size: 70%;
  @media(max-width: 1024px) {
    background-size: 86%;
    background-position: 93% 26%;
  }
  @media(max-width: 600px) {
    margin-left: 1rem;
    background-size: 96%;
  }
`;

export const StyledSectionHead = styled(({ ...props }) => <header {...props} />)`
  text-align: center;
  margin-bottom: 2.5rem;
  @media(max-width: 600px) {
    margin-left: 3rem;
    width: 100%;
  }
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: -0.6rem 0 0;
`;


export const StyledMediaContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  padding: 0 17rem;
  @media(max-width: 1024px) {
    display: block;
    padding: 0 2rem;
  }
`;

export const StyledMediaImage = styled(({ ...props }) => <div {...props} />)`
  flex: 0 0 38%;
  @media(max-width: 1024px) {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: 292px;
    height: 468px;
    margin-left: 20rem;
    padding: 0;
    border-radius: 10px;
  }
  @media(max-width: 600px) {
    margin-left: 4rem;
  }
`;

export const StyledMediaBody = styled(({ ...props }) => <div {...props} />)`
  flex: 0 0 50%;
  padding: 2rem 5rem;
  @media(max-width: 1024px) {
    padding: 3rem 16rem;
  }
  @media(max-width: 600px) {
    padding: 3rem 0rem;
  }
`;
