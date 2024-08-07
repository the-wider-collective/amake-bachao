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
      <p className="pt-4 pb-4">
        Instant local help in emergencies - send alerts, get assistance, and
        build a safer community.
      </p>
      <p className="pt-4 pb-4">
        A project to battle violence against minorities and innocent civilians
        in Bangladesh. Once you sign up, you will be able to send and receive
        emergency alerts to and from users in your area.
      </p>
      <p>
        <a href="#">Read More</a>
      </p>
    </div>
  );
};

export default Hero;
