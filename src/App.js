import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import routes from './router';
import store from './store';
import YQAppFooter from "@/components/app-footer";
import YQAppHeader from "@/components/app-header"

export default memo(function App() {
  return (
    //共享store
    <Provider store={store}>
      <HashRouter>
        <YQAppHeader></YQAppHeader>
        {renderRoutes(routes)}
        <YQAppFooter></YQAppFooter>
      </HashRouter>
    </Provider>

  )
})
