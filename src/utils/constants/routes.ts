import React from "react";

export type AppRoutes = {
  path: string;
  exact: boolean;
  component: any;
};

const Lending = React.lazy(() => import("../../pages/Lending"));
const YieldFarming = React.lazy(() => import("../../pages/YieldFarming"));
const Dao = React.lazy(() => import("../../pages/Dao"));

export const routes: AppRoutes[] = [
  { path: "/", exact: true, component: Lending },
  { path: "/yield-farming", exact: true, component: YieldFarming },
  { path: "/dao", exact: true, component: Dao },
];
