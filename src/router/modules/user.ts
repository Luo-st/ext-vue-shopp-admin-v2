export default {
  name: 'user',
  path: 'user',
  meta: { title: '用户管理' },
  component: () => import('@/views/User'),
  children: [
    {
      name: 'user.list',
      path: 'list',
      meta: { title: '用户列表' },
      component: () => import('@/views/User/List')
    },
    {
      name: 'user.edit',
      path: 'edit/:uuid?',
      meta: { title: '用户详情' },
      component: () => import('@/views/User/Edit')
    }
  ]
}
