export default {
  path: 'drawcash',
  meta: { title: '提现管理' },
  component: () => import('@/views/Drawcash'),
  children: [
    {
      path: 'list',
      meta: { title: '提现列表' },
      component: () => import('@/views/Drawcash/List')
    }
  ]
}
