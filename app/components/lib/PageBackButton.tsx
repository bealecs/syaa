import Link from "next/link";

interface PageBackButton {
    text: string;
    href: string
}

export default function PageBackButton({text, href}: PageBackButton) {
  return (
      <Link
        href={href}
        className="transition duration-300 linear hover:text-white hover:bg-blue-700 hover:border-black border-2 border-blue-700 w-fit py-1 px-2 no-underline text-foreground flex items-center group text-xl my-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-8 w-8 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        {text}
      </Link>
  );
}
