import Link from "next/link";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400">
      <Container className="py-8 text-center">
        Developed with ❤️ by{" "}
        <Link
          href="https://github.com/tsikatawill"
          className="font-semibold text-white"
        >
          William M. Tsikata 🔗
        </Link>
      </Container>
    </footer>
  );
};
