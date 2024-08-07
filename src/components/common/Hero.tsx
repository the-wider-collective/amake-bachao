import React from "react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <Image src="/logo.jpg" width={270} height={270} alt="AmakeBachao logo" />
      <h2 className="scroll-m-20 border-b pt-4 pb-4 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        আমাকে বাচাও!
      </h2>
      <p className="text-center">
        Instant local help in emergencies - send alerts, get assistance, and
        build a safer community.
      </p>
    </div>
  );
};

export default Hero;
