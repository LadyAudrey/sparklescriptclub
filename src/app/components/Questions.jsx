"use client";

import { useState } from "react";

import Image from "next/image";

const questionArr = [
  "Hi! I'm Duckie. Let's work on finding a bug together! How this works is I'll ask you a series of questions. Each question is designed to help you think through the problem methodically and with self-kindness. After a lot of questions, if you haven't found the bug, I'll encourage you to take a break and come back to it soon. If you do find the bug, hit the button that says 'I found it!' and we'll celebrate your success.",
  "Are all of your quotes and brackets in the right places?",
  "Is your coding structure clean and understandable?",
  "Keep Asking Questions",
  "Stay Curious",
  "Keep Going",
  "You've Got This",
];

export default function Questions(props) {
  const [achieved] = props.achieved;
  let [question, setQuestion] = useState(0);
  const nextQuestion = () => {
    console.log(question);
    setQuestion((question = question + 1));
  };
  const successAchieved = () => {
    setAchieved(true);
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 m-20 place-content-center">
          <p>{questionArr[question]}</p>
          <button className="absolute bottom-20 left-40" onClick={nextQuestion}>
            Next Question, Please
          </button>
        </div>
        <div className="col-start-2 col-span-1">
          <Image
            src="/graphics/Duckie.svg"
            height={150}
            width={150}
            alt="cute duck"
            className="col-start-2 col-span-1 row-start-1 row-span-1 place-self-center"
          ></Image>
          <button className="absolute bottom-20" onClick={successAchieved}>
            I found the Bug!
          </button>
        </div>
      </div>
    </div>
  );
}
