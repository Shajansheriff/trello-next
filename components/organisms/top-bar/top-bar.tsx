import { Anchor, LoginButton, SignupButton } from "@atoms";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { styled } from "stitches.config";

const LogoContainer = styled("a", {
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
});

const Side = styled("div", {
  display: "flex",
  flexBasis: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
});

const LeftSide = styled(Side, {
  display: "flex",
  flexBasis: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  "@mobile": {
    display: "none",
  },
});

const RightSide = styled(Side, {
  justifyContent: "flex-end",
});

const Wrapper = styled("div", {
  display: "flex",
  alightItems: "center",
  minHeight: "40px",
  maxHeight: "40px",
  boxSizing: "border-box",
  padding: "4px",
  backgroundColor: "rgba(0, 0, 0, 0.15)",
});

export const TopBar: FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Link href={"#"} passHref>
          <Anchor>Home</Anchor>
        </Link>
        <Link href={"#"} passHref>
          <Anchor>Tour</Anchor>
        </Link>
        <Link href={"#"} passHref>
          <Anchor>Blog</Anchor>
        </Link>
      </LeftSide>
      <Link href="/" passHref>
        <LogoContainer>
          <Image src="/images/trello.gif" height={16} width={80} alt="Trello" />
        </LogoContainer>
      </Link>
      <RightSide>
        <Link href={"#"} passHref>
          <SignupButton type="success">SignUp</SignupButton>
        </Link>
        <Link href={"#"} passHref>
          <LoginButton>Login</LoginButton>
        </Link>
      </RightSide>
    </Wrapper>
  );
};
