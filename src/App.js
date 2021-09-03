import React, { memo  ,Suspense} from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import routes from './router';
import store from './store';
import YQAppFooter from "@/components/app-footer";
import YQAppHeader from "@/components/app-header"
import YQPlayNavbar from '@/pages/player/app-play-navbar'
import YQIsLoading from '@/components/loading'

export default memo(function App() {
  return (
    //共享store
    <Provider store={store}>
      <HashRouter>
        <YQAppHeader></YQAppHeader>
        <Suspense fallback={<YQIsLoading />  }>
            {renderRoutes(routes)}
        </Suspense>
        <YQAppFooter></YQAppFooter>
        <YQPlayNavbar></YQPlayNavbar>
      </HashRouter>

    </Provider>

  )
})
