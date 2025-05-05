import Image from "next/image";
import Link from "next/link";

const headerItem = [
  { title: "About Us", link: "#about" },
  { title: "Product", link: "#product" },
  { title: "plant", link: "#plant" },
  { title: "distribution", link: "#distribution" },
  { title: "World beyond Bread", link: "#world_beyond_bread" },
  { title: "blog", link: "#blog" },
  { title: "recipe", link: "#recipe" },
  { title: "contact us", link: "#contact" },
];

export function Header() {
  console.log({header: 'header'})
  return (
    <div className="min-h-16 bg-primary flex w-full px-10 text-white justify-between">
      <div className="h-16 relative w-30">
        <Image
          src="/logo.png"
          alt="logo"
          className="absolute -bottom-[35px] rounded-full h-24 w-25 border"
          width={1000}
          height={1000}
        />
      </div>
      <ul className="flex justify-end w-full gap-6 min-h-16 items-center">
        {headerItem.map(({ link, title }, idx) => (
          <li key={idx} className="capitalize text-center">
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
