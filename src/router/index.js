import React from "react"
import YQDiscover from "../pages/discover"
import YQFriends from '../pages/friends'
import YQMine from '../pages/mine'
import Recommend from '@/pages/discover/c-page/recommend'
import Album from '@/pages/discover/c-page/album'
import Djradio from '@/pages/discover/c-page/djradio'
import Ranking from '@/pages/discover/c-page/ranking'
import Songs from '@/pages/discover/c-page/songs'
import Artist from '@/pages/discover/c-page/artist'
import YQPlayer from '@/pages/player'
import { Redirect } from 'react-router-dom'

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