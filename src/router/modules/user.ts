export default {
  path: 'user',
  meta: { title: '用户管理' },
  component: () => import('@/views/User'),
  children: [
    {
      path: 'list',
      meta: { title: '用户列表' },
      component: () => import('@/views/User/List')
    },
    {
      path: 'edit/:uuid?',
      meta: { title: '用户详情' },
      component: () => import('@/views/User/Edit')
    }
  ]
}
