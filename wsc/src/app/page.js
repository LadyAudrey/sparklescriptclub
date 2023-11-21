import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className="p-20 text-center">Welcome to Sparkle Script Club!</h1>
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="content">
          <h2 className="place-self- mb-10">Magic 8-Ball game</h2>

          <Link href="/8ball">
            <Image
              src="/graphics/8Ball.svg"
              height={300}
              width={300}
              alt="8-Ball Graphic"
              className="mt-10"
            ></Image>
          </Link>
        </div>
        <div className="content">
          <h2>Debugging Optimism</h2>
          <Link href="debugging_support">
            <Image
              src="/graphics/Duckie.svg"
              height={200}
              width={200}
              alt="Duckie"
              className="m-5"

            ></Image>
          </Link>
        </div>
      </div>
    </main>
  );
}
