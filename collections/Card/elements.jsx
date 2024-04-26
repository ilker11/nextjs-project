import styled from "styled-components";
import { StyledSectionParagraph, StyledSectionSubheading } from "../../components/Typography/elements";

export const StyledCardTitle = styled(({ ...props }) => <StyledSectionSubheading {...props} />)`
  margin-bottom: 10px;
`;

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
position: relative;
  border-radius: .4rem;
  padding: 0rem 1rem 0rem 6rem;
  background: #f9f9f9;
  margin-bottom: 1rem;
  border: .2rem solid transparent;
  &:hover {
    border-color: #77b2fe;
  }
  &:hover ${StyledCardTitle} {
    color: #1378fc;
    text-decoration: underline;
  }
`;

export const StyledCardDescription = styled(({ ...props }) => <StyledSectionParagraph {...props} />)`
  
`;

export const StyledCardIcon = styled(({ ...props }) => <div {...props} />)`
  position: absolute;
  top: 4rem;
  left: 2rem;
`;