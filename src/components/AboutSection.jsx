import Image from "next/image";
import { Heading } from "./ui";

export async function AboutSection() {
  return (
    <section id="#about" className="grid-cols-2 items-end grid bg-secondary py-8 px-10 text-white">
      <div className="flex w-full flex-col gap-6">
        <Heading>About Us</Heading>
        <p className="text-xl/snug font-normal text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facere
          corporis, labore quae quaerat repudiandae quia cumque, sit ratione
          reprehenderit ut quo? Suscipit assumenda animi et aut, est tempora
          dicta accusamus dolorum? Sequi amet facere saepe ea officia deserunt,
          quam esse dolores iste, quos impedit aliquid id architecto sint,
          laborum laboriosam. Similique ratione possimus sequi quis! Officia
          tenetur corporis a sed odio debitis assumenda. Architecto, doloremque
          sint, placeat earum vero sapiente debitis commodi sed tenetur aperiam
          optio nesciunt. Repellendus sunt veniam, inventore magnam dignissimos
          cupiditate molestiae sapiente facilis obcaecati maiores aperiam maxime
          saepe nobis. Exercitationem, rerum dolorem! Tempora error culpa
          itaque. Ducimus assumenda temporibus inventore excepturi ab. Ea labore
          repudiandae cupiditate sunt, non tempora dicta. Illum culpa quis odio
          eveniet, aut corrupti rem vel repellendus asperiores dolorum ea
          praesentium molestias aliquam mollitia quibusdam! Doloremque quod
          dolorum quaerat, nesciunt iure voluptate sed earum minima cumque
          reiciendis culpa eligendi ab explicabo repudiandae, aut corrupti rem
          vel repellendus asperiores dolorum ea praesentium molestias aliquam
          mollitia quibusdam! Doloremque quod dolorum quaerat, nesciunt iure
          voluptate sed earum minima cumque reiciendis culpa eligendi ab
          explicabo repudiandae.
        </p>
      </div>
      <div className="w-full px-10">
        <Image
          src="/about_us.png"
          alt="bread"
          width={1000}
          height={1000}
          className="w-full object-fit"
        />
      </div>
    </section>
  );
}
