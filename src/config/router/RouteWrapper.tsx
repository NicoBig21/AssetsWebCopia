import { ComponentType } from "react";
import { HomeLayout } from "../layout/HomeLayout";
import SpeedDialTooltipOpen from "../../app/common/components/speed-dial/SpeedDial";

// TODO: tipado

export const RouteWrapper = ({ component: Component, hidden }: { component: ComponentType, hidden?: boolean }) => {
  return (
    <HomeLayout>
      <SpeedDialTooltipOpen hidden={hidden} >
        <Component />
      </SpeedDialTooltipOpen>
    </HomeLayout>
  );
};
