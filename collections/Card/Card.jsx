import {
    StyledCard,
    StyledCardTitle,
    StyledCardDescription,
    StyledCardIcon
} from "./elements";

export const Card = ({ icon, title, description }) => {
	return (
		<StyledCard>
             <StyledCardIcon>
                <img src={icon} alt="" width={35} height={35} />
             </StyledCardIcon>
            <StyledCardTitle dangerouslySetInnerHTML={{ __html: title }} />
            <StyledCardDescription dangerouslySetInnerHTML={{ __html: description }} />
		</StyledCard>
	);
};
