import styled from "styled-components";
import { SectionContainer, SectionBigHeading,SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: block;
  padding: 6rem 0;
  background: url(/img/background.png) no-repeat -5rem 15rem;
  background-size: 100%;
`;

export const StyledSectionHead = styled(({ ...props }) => <header {...props} />)`
  text-align: center;
  margin-bottom: 2.5rem;
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
  align-items: center;
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
    width: 425px;
    height: 675px;
    margin-left: 13rem;
    padding: 0;
    border-radius: 10px;
  }
`;

export const StyledMediaBody = styled(({ ...props }) => <div {...props} />)`
  flex: 0 0 62%;
  padding: 2rem 5rem;
  @media(max-width: 1024px) {
    padding: 3rem 10rem;
  }
`;
