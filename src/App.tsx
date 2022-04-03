import React, { FC, ReactElement } from "react";
import { Dashboard } from "./components/Dashboard";
import { Layout } from "./components/Layout";

export const App: FC = (): ReactElement => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};
