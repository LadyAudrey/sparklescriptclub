"use client";

import { useState } from "react";

import Image from "next/image";

export default function Celebrate() {
  return (
    <div>
      <div>
        <div className="">
          <Image
            src="/graphics/Duckie.svg"
            height={150}
            width={150}
            alt="cute duck"
            className=""
          ></Image>
          <div className="">
            <h3>Congrats!</h3>
            <h4>
              Make sure to pat yourself on the back and take a break before
              going onto the next thing
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
