"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const answerArr = [
  "Yes",
  "No",
  "Maybe",
  "Keep Asking Questions",
  "Stay Curious",
  "Keep Going",
  "You've Got This",
];

export default function eight_ball() {
  // create state
  const [answer, setAnswer] = useState("");
  const randomNum = () => {
    const number = Math.floor(Math.random() * answerArr.length);
    setAnswer(answerArr[number]);
  };
  // create a random number and pass the value from the array into the p tag
  // function to create random number
  // call random number Fx with onclick
  // put return statement into p tag
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <h1>Welcome to Sparkle Script Club!</h1>
      <h2>Magic 8-Ball game</h2>
      <Image
        src="/graphics/8Ball.svg"
        height={300}
        width={300}
        alt="8-Ball Graphic"
      ></Image>
      <button onClick={randomNum}>Ask me a Yes or No Question</button>
      <p>{answer}</p>
    </div>
  );
}
