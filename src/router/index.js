import React , {lazy} from "react"
import { Redirect } from 'react-router-dom'

const YQDiscover = lazy(_=>import('../pages/discover'))
const YQFriends = lazy(_=>import('../pages/friends'))
const YQMine = lazy(_=>import('../pages/mine'))
const Recommend = lazy(_=>import('@/pages/discover/c-page/recommend'))
const Album = lazy(_=>import('@/pages/discover/c-page/album'))
const Djradio = lazy(_=>import('@/pages/discover/c-page/djradio'))
const Ranking = lazy(_=>import('@/pages/discover/c-page/ranking'))
const Songs = lazy(_=>import('@/pages/discover/c-page/songs'))
const Artist = lazy(_=>import('@/pages/discover/c-page/artist'))
const YQPlayer = lazy(_=>import('@/pages/player'))




const routes = [
  {
    path: "/",
    exact: true,
    render: () => (<Redirect to="/discover" />)
  },
  {
    path: "/discover",
    component: YQDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (<Redirect to="/discover/recommend" />)
      }, {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/djradio",
        component: Djradio
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/player",
        component: YQPlayer
      }
    ]
  },
  {
    path: "/friend",

    component: YQFriends
  },
  {
    path: "/mine",

    component: YQMine
  }

]

export default routes