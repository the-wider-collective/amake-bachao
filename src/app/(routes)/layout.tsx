import React from "react";

type Props = {
  children: React.ReactNode;
};

const RouteLayout = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 w-screen">
      <div className="border-2 border-white w-[300px] p-6">{children}</div>
    </main>
  );
};

export default RouteLayout;
