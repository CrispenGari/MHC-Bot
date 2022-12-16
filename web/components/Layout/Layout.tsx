import React from "react";
import H from "../Head/Head";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <H />
      <div>{children}</div>
    </>
  );
};
export default Layout;
