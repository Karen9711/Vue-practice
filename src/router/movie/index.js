export default {
  path:'/movie',
  name:'movie',
  component:(resolve) => require(['@/views/Movie'], resolve),
  children:[//二级路由
    {
      path:'city',
      component:(resolve) => require(['@/components/City'], resolve),
    },
    {
      path:'CommingSoon',
      component:(resolve) => require(['@/components/CommingSoon'], resolve),
    },
    {
      path:'NowPlaying',
      component:(resolve) => require(['@/components/NowPlaying'], resolve),
    },
    {
      path:'Search',
      component:(resolve) => require(['@/components/Search'], resolve),
    },
    {
      path:'/movie',
      redirect:'/movie/nowPlaying'
    },
  ]
}
