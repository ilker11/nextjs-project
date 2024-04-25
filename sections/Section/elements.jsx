import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: block;
  padding: 6rem 0;
  background: url(/img/background.png) no-repeat -5rem 15rem;
`;

export const StyledSectionHead = styled(({ ...props }) => <header {...props} />)`
  text-align: center;
  margin-bottom: 3rem;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 1.563rem 0 0;
`;


export const StyledMediaContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  padding: 0 20rem;
  @media(max-width: 1024px) {
    display: block;
    padding: 0 2rem;
  }
`;

export const StyledMediaImage = styled(({ ...props }) => <div {...props} />)`
  flex: 0 0 50%;
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
  flex: 0 0 50%;
  padding: 2rem 5rem;
  @media(max-width: 1024px) {
    padding: 3rem 10rem;
  }
`;
