import React from "react"
import { Button, Flex, Heading, Icon, Link } from "@chakra-ui/react"
import { IoLogoLinkedin } from "react-icons/io5"
import { RiRedditFill } from "react-icons/ri"
import { VscGithub, VscTwitter } from "react-icons/vsc"

import { AnimatedBox, AnimatedContainer, AnimatedHeading, HomeContainer, SectionHeading } from "./Layout/LayoutComponents"


const socialLinks = [
  {
    label: "GitHub",
    icon: VscGithub,
    color: "#2ea650",
    link: "https://github.com/nabninety"
  },
  {
    label: "Linkedin",
    icon: IoLogoLinkedin,
    color: "#0077b5",
    link: "https://www.linkedin.com/in/nadia-bronk-002193115/"
  },
  {
    label: "Twitter",
    icon: VscTwitter,
    color: "#1da1f2",
    link: "https://twitter.com/nadstravelen"
  },
  {
    label: "Reddit",
    icon: RiRedditFill,
    color: "#ff4500",
    link: "https://old.reddit.com/message/compose?to=_disctwo"
  },
]

const Contact = () => {
  return (
    <HomeContainer id="say hi">
      <SectionHeading>
        Say Hi
      </SectionHeading>
      <AnimatedContainer flexDirection="column" alignItems="center" justifyContent="space-evenly" flexGrow={1}>
        <AnimatedHeading textAlign="center">
        Want to work together?<br /> Feel free to send an email my way!
        </AnimatedHeading>

        <AnimatedBox marginY={5}>
          <Link href="mailto:nadia@truenorth.media">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
            Let&apos;s work together!
            </Button>
          </Link>
        </AnimatedBox>

        <AnimatedBox>
          <Heading align="center">Or reach out to me here</Heading>
          <Flex columns={2} width="auto" justifyContent="center" marginTop={5}>

            {socialLinks.map(socialLink =>
              <SocialIconLink key={socialLink.label} {...socialLink}
              />
            )}
          </Flex>
        </AnimatedBox>
      </AnimatedContainer>


    </HomeContainer>
  )
}

const SocialIconLink = props => {
  return(
    <Link aria-label={props.label} href={props.link} target="_blank">
      <Icon marginX={2} as={props.icon} transition="0.2s linear" _hover={{ color: props.color }} boxSize="60px" />
    </Link>

  )}

export default Contact
