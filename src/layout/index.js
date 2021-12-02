import React, { Suspense } from "react";
import { pxvm, browser } from "@/utils";
import { mainRoutes } from "@/router";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "@/pages/Footer";

const LayoutHtml = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  padding: ${pxvm(20)};
  overflow-y: auto;
`;

const Layout = () => {
  return (
    <Router>
      <Suspense>
        <LayoutHtml>
          <Switch>
            {browser(window.navigator.userAgent) ? <Footer /> : null}
          </Switch>

          <Content
            style={
              browser(window.navigator.userAgent)
                ? { paddingBottom: pxvm(98) }
                : {}
            }
          >
            <Switch>
              {mainRoutes.map((route) => {
                return <Route key={route.path} {...route} exact strict />;
              })}
            </Switch>
          </Content>
        </LayoutHtml>
      </Suspense>
    </Router>
  );
};

export default Layout;