import React from "react"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"

import { AnimatedContainer, HomeContainer, SectionHeading } from "./Layout/LayoutComponents"

const AboutDescription = [
  `Hello! I'm Nadia. I'm a business development consultant based in Greater Vancouver, Canada.
  I've been helping entrepreneurs build brands and run efficient businesses for nearly two decades.
  My experience includes strategy, copywriting, graphic design, and web development.

  In my spare time, I contribute to projects that help individuals access the resources they need to thrive.`,

  "I am polishing my React skills right now with some projects, this website being one of them!",
]

const About = () => {
  return (
    <HomeContainer id="about">

      <SectionHeading>
        About me
      </SectionHeading>
      <AnimatedContainer>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="xl">
              {AboutDescription[0]}
            </Text>
            <br />
            <Text fontSize="xl">
              {AboutDescription[1]}
            </Text>
          </Box>

          <Flex marginX="auto" height="350px" width="300px" >
            <CNImage publicId="Portfolio/about_photo.png" alt="My photo" loading="lazy">
              <Transformation quality="20" radius="10"  width="300" height="330"/>
            </CNImage>
          </Flex>
        </SimpleGrid>
      </AnimatedContainer>

    </HomeContainer>
  )
}

export default About
