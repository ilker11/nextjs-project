import styled from "styled-components";
import { StyledSectionParagraph, StyledSectionSubheading } from "../../components/Typography/elements";

export const StyledCardTitle = styled(({ ...props }) => <StyledSectionSubheading {...props} />)`
    
`;

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
    position: relative;
    border-radius: .4rem;
    padding: 1.3rem 4rem 1rem 8.4rem;
    background: #f9f9f9;
    margin-bottom: 2rem;
    border: .2rem solid transparent;
    &:last-child {
        margin-bottom: 0;
    }
    &:hover {
        border-color: #77b2fe;
    }
    &:hover ${StyledCardTitle} {
        color: #1378fc;
        text-decoration: underline;
    }
    @media(max-width: 1023px) {
        padding: 1rem 4rem 1rem 8rem;
        font-size: 0.9rem;   
    }
    @media(max-width: 599px) {
        padding: 1rem 1rem 1rem 6rem;
    }
`;

export const StyledCardDescription = styled(({ ...props }) => <StyledSectionParagraph {...props} />)`
`;

export const StyledCardIcon = styled(({ ...props }) => <div {...props} />)`
    position: absolute;
    top: 3rem;
    left: 2rem;
`;
