import React, { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>root layout{children}</body>
    </html>
  );
};

export default RootLayout;
