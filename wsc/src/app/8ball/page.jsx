import React from "react";
import Image from "next/image";

export default function eight_ball() {
  return (
    <div className="content">
      <h1>Welcome to Sparkle Script Club!</h1>
      <h2>Magic 8-Ball game</h2>
      <Image
        src="/graphics/8Ball.svg"
        height={300}
        width={300}
        alt="8-Ball Graphic"
        className="place-self-center"
      ></Image>
      <h3>Ask me a Yes or No Question</h3>
      <p>I will eventually hold variable text</p>
    </div>
  );
}
