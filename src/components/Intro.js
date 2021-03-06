import React from "react"
import { Box, Button, Flex, Link } from "@chakra-ui/react"

import { AnimatedBox, AnimatedHeading, HomeContainer } from "./Layout/LayoutComponents"

const Intro = () => {
  return (
    <HomeContainer>
      <Flex direction="column" flexGrow={1} marginLeft={{ base: 0, md: 10 }}>
        <Box justifySelf="flex-start" flexGrow={1}>
          <AnimatedHeading size="lg" marginY={5}>Hey there! My name&apos;s</AnimatedHeading>
          <AnimatedHeading
            marginBottom={5}
            fontSize={{ base: "6xl", md: "8xl" }}
            letterSpacing="-2px"
            bgGradient="linear(to-r, #00d4ff, #00ff73)"
            bgClip="text"
            fontWeight="extrabold"
            delay={1}
          >
            Nadia Bronk.
          </AnimatedHeading>
          <AnimatedHeading size="xl" delay={2}>
            {" "}
            I am a business development consultant,
            <br />
            and full-stack web developer.
          </AnimatedHeading>
        </Box>
        <AnimatedBox flexGrow={1} delay={3}>
          <Link href="https://github.com/nabninety" target="_blank">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
              My GitHub profile
            </Button>
          </Link>
        </AnimatedBox>
      </Flex>

    </HomeContainer>
  )
}

export default Intro
