import type { ReactNode } from "react";
import PagesMetaHead from "../PagesMetaHead";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../shared/AppHeader";

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <PagesMetaHead />
      <AppHeader />
      <div>{children}</div>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
