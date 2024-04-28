import Image from "next/image";
import {
    StyledContainer,
    StyledSectionHead,
    StyledTitle,
    StyledDescription,
    StyledMediaContainer,
    StyledMediaImage,
    StyledMediaBody
} from "./elements";
import { Card } from "../../collections/Card/Card";

export const Section = ({ image, title, description, cards, ...props }) => {
    return (
        <StyledContainer {...props}>
            <StyledSectionHead>
                <StyledTitle>{title}</StyledTitle>

                <StyledDescription>{description}</StyledDescription>
            </StyledSectionHead>

            <StyledMediaContainer>
                <StyledMediaImage>
                    <Image 
                        layout="responsive" 
                        src={image.src} 
                        alt={image.alt} 
                        width={image.width} 
                        height={image.height} 
                    />
                </StyledMediaImage>

                <StyledMediaBody>
                    {cards && (
                        cards.map((card, index) => (
                            <Card
                                key={index}
                                icon={card.icon}
                                title={card.title}
                                description={card.description} 
                            />
                        ))
                    )}
                </StyledMediaBody>
            </StyledMediaContainer>
        </StyledContainer>
    );
};
