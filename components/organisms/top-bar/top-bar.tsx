import { Anchor, LoginButton, SignupLink } from "@atoms";
import Link from "next/link";
import { FC } from "react";

export const TopBar: FC = () => {
  return (
    <div className="min-h-40 max-h-40 overflow-hidden">
      <div className="flex box-border">
        <Link href={"#"} passHref>
          <Anchor>Home</Anchor>
        </Link>
        <Link href={"#"} passHref>
          <Anchor>Tour</Anchor>
        </Link>
        <Link href={"#"} passHref>
          <Anchor>Blog</Anchor>
        </Link>
        <Link href="/">Trello</Link>
        <div className="flex justify-end grow-1 basis-100">
          <Link href={"#"} passHref>
            <SignupLink type="success">SignUp</SignupLink>
          </Link>
          <Link href={"#"} passHref>
            <LoginButton>Login</LoginButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
