import Image from "next/image";
import { Card } from "~/collections";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardTitle,
  StyledCardDescription,
  StyledIconImage,
  StyledSubSection,
  StyledCardContainer,
  StyledCardText,
  StyledBackgroundImgContainer,
  Container
} from "./elements";



export const Contacts = ({ backgroundImage, image, card, title, description, call, ...props }) => {
  return (
    <>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <Container>
          <StyledBackgroundImgContainer>
            <Image
              quality={100}
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              layout="fill"
              objectFit="contain"
              objectPosition="20% 50%"
              priority
            />
          </StyledBackgroundImgContainer>
          <StyledSubSection>
            <StyledImageContainer>
              <Image
                quality={100}
                layout="responsive"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
              />
            </StyledImageContainer>
            <StyledCardContainer>
              {card.map((item, index) => (
                <Card key={index} {...props} bgColor={index}>
                  <StyledIconImage>
                    <Image
                      layout="responsive"
                      src={item.image.src}
                      width={80}
                      height={80}
                    />
                  </StyledIconImage>
                  <StyledCardText>
                    <StyledCardTitle>{item.title}{item.call}</StyledCardTitle>
                    <StyledCardDescription>{item.description}</StyledCardDescription>
                  </StyledCardText>
                </Card>
              ))}
            </StyledCardContainer>
          </StyledSubSection>
        </Container>
      </StyledContainer>
    </>
  );
};