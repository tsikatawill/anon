import Image from "next/image";
import Link from "next/link";

export const LogoLink = () => {
  return (
    <Link href="/" className="block w-12 md:w-auto">
      <Image src="/anon-logoo.png" width={80} height={80} alt="logo" />
    </Link>
  );
};
