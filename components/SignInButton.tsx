"use client";

import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <Button variant="ghost" onClick={() => signIn("google")}>
      Sign In
    </Button>
  );
}

export default SignInButton;
