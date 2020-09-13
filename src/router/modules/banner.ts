export default {
  path: 'banner',
  meta: { title: '轮播图' },
  component: () => import('@/views/Banner'),
  children: [
    {
      path: 'list',
      meta: { title: '轮播列表' },
      component: () => import('@/views/Banner/List')
    },
    {
      path: 'edit/:uuid?',
      meta: { title: '轮播详情' },
      component: () => import('@/views/Banner/Edit')
    }
  ]
}
