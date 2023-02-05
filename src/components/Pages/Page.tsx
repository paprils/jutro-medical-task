import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = (props: PageProps) => {
  const { children } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "50px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default Page;
