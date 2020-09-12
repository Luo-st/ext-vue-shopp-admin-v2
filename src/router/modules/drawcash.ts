export default {
  name: 'drawcash',
  path: 'drawcash',
  meta: { title: '提现管理' },
  component: () => import('@/views/Drawcash'),
  children: [
    {
      name: 'drawcash.list',
      path: 'list',
      meta: { title: '提现列表' },
      component: () => import('@/views/Drawcash/List')
    }
  ]
}
