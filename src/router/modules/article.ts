export default {
  path: 'article',
  meta: { title: '文章管理' },
  component: () => import('@/views/Article'),
  children: [
    {
      path: 'list',
      meta: { title: '用户列表' },
      component: () => import('@/views/Article/List')
    },
    {
      path: 'edit/:uuid?',
      meta: { title: '用户详情' },
      component: () => import('@/views/Article/Edit')
    }
  ]
}
