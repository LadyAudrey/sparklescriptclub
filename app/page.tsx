import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="p-20 text-center">Welcome to Sparkle Script Club!</h1>
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="content">
          <h2 className="place-self-center">Magic 8-Ball game</h2>
          <Image
            src="/Graphics/8Ball.svg"
            height={300}
            width={300}
            alt="8-Ball Graphic"
            className="mt-10"
          ></Image>
        </div>
        <div className="content">
          <h2>Debugging Optimism</h2>
          <Image
            src="/Graphics/Duckie.svg"
            height={200}
            width={200}
            alt="8-Ball Graphic"
          ></Image>
        </div>
      </div>
    </main>
  );
}
