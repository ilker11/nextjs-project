import styled from "styled-components";
import { 
    SectionContainer, 
    SectionBigHeading,
    SectionHeading, 
    SectionSubheading 
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: block;
    padding: 6rem 2rem;
    background: url(/img/background.png) no-repeat 2.2rem 16.7rem;
    background-size: 70%;
    @media(max-width: 1200px) {
        background-position: -7.2rem 17.7rem;
        background-size: 96%;
    }
    @media(max-width: 1023px) {
        background-position: -4.5rem 15.7rem;
        background-size: 146%;
    }
`;

export const StyledSectionHead = styled(({ ...props }) => <header {...props} />)`
    text-align: center;
    margin-bottom: 3.1rem;
    @media(max-width: 1023px) {
        margin-bottom: 2.8rem;
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
    padding: 0 15.4rem;
    @media(max-width: 1200px) {
        padding: 0 2rem;
    }
    @media(max-width: 1023px) {
        display: block;
        padding: 0;
    }
`;

export const StyledMediaImage = styled(({ ...props }) => <div {...props} />)`
    flex: 0 0 38%;
    @media(max-width: 1023px) {
        max-width: 54%;
        margin: auto;
    }
    @media(max-width: 599px) {
        max-width: 100%;
    }
`;

export const StyledMediaBody = styled(({ ...props }) => <div {...props} />)`
    flex: 0 0 62%;
    padding: 1rem 0 1rem 4.5rem;
    @media(max-width: 1200px) {
        padding: 1rem 0 1rem 2rem;
    }
    @media(max-width: 1023px) {
        margin: 3.5rem 0 0;
        padding: 0 3rem;
    }
    @media(max-width: 599px) {
        padding: 0;
    }
`;
