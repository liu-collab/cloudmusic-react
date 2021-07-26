import YQDiscover from "../pages/discover"
import YQFriends from '../pages/friends'
import YQMine from '../pages/mine'

const routes = [
  {
    path: "/",
    exact: true,
    component: YQDiscover
  },
  {
    path: "/discover",

    component: YQDiscover
  },
  {
    path: "/friends",

    component: YQFriends
  },
  {
    path: "/mine",

    component: YQMine
  }

]

export default routes