import { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default MaxWidthWrapper;
