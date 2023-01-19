import type { FC, PropsWithChildren } from "react";

const SuperLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        color: "red",
      }}
    >
      {children}
    </div>
  );
};

export default SuperLayout;
