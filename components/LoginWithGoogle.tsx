"use client";

import { signIn } from "next-auth/react";
import { BiLogoGoogle } from "react-icons/bi";
import { Button } from "./Button";

export default function LoginWithGoogle() {
  return (
    <Button
      variant="blanc"
      onClick={() =>
        signIn("google", { callbackUrl: `${window.location.origin}` })
      }
    >
      <span className="flex items-center gap-1 font-semibold">
        Login with <BiLogoGoogle size={20} />
      </span>
    </Button>
  );
}
