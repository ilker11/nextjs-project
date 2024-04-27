import styled from "styled-components";
import { SectionContainer, SectionBigHeading,SectionHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
    display: block;
    padding: 6rem 0;
    background: url(/img/background.png) no-repeat 1.2rem 15.7rem;
    background-size: 70%;
    @media(max-width: 1200px) {
        background: url(/img/background.png) no-repeat -1.8rem 17.7rem;
        background-size: 96%;
    }
    @media(max-width: 1024px) {
        background: url(/img/background.png) no-repeat 5.2rem 14.7rem;
        background-size: 96%;
    }
    @media(max-width: 768px) {
        margin-left: 1rem;
        background-size: 96%;
    }
    @media(max-width: 480px) {
        background: url(/img/background.png) no-repeat 1.2rem 22.7rem;
        background-size: 96%;
    }
`;

export const StyledSectionHead = styled(({ ...props }) => <header {...props} />)`
    text-align: center;
    margin-bottom: 2.5rem;
    @media(max-width: 1200px) {
        margin-left: 3rem;
        width: 100%;
    }
    @media(max-width: 768px) {
        margin-left: 3rem;
        width: 100%;
    }
    @media(max-width: 480px) {
        margin-left: 1rem;
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
    @media(max-width: 1200px) {
        padding: 3rem 2rem;
        margin-left: 8rem;
    }
    @media(max-width: 1024px) {
        display: block;
        padding: 0 2rem;
    }
    @media(max-width: 768px) {
        display: block;
        padding: 0 3rem;
        margin: 0 5rem;
    }
    @media(max-width: 480px) {
        display: block;
        margin: 0 -2.3rem;
    }
`;

export const StyledMediaImage = styled(({ ...props }) => <div {...props} />)`
    flex: 0 0 38%;
    @media(max-width: 1200px) {
        width: 320px;
        height: 512px;
        margin-left: 50px;
    }
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
    @media(max-width: 768px) {
        margin-left: 9rem;
        width: 240px;
        height: 384px;
    }
    @media(max-width: 480px) {
        width: 245px;
        height: 392px;
        margin-left: 97px;
    }
`;

export const StyledMediaBody = styled(({ ...props }) => <div {...props} />)`
    flex: 0 0 50%;
    padding: 2rem 5rem;
    @media(max-width: 1200px) {
        padding: 0rem 6rem;
    }
    @media(max-width: 1024px) {
        padding: 3rem 16rem;
    }
    @media(max-width: 768px) {
        padding: 2rem 3rem;
    }
    @media(max-width: 480px) {
        padding: 3rem 0rem;
        margin-left: 4rem;
    }
`;
