import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router';
import YQAppFooter from "@/components/app-footer";
import YQAppHeader from "@/components/app-header"

export default memo(function App() {
  return (
    <HashRouter>
      <YQAppHeader></YQAppHeader>
      {renderRoutes(routes)}
      <YQAppFooter></YQAppFooter>
    </HashRouter>
  )
})
