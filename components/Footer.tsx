import Link from "next/link";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <Container className="py-8 text-center sm:py-16 md:py-20">
        Developed with ❤️ by{" "}
        <Link
          href="https://github.com/tsikatawill"
          className="font-semibold text-neutral-500"
        >
          William M. Tsikata 🔗
        </Link>
      </Container>
    </footer>
  );
};
