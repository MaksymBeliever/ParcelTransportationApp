export default[
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/views/HomeView.vue'),
    },
    {
        path: '/order',
        name: 'order',
        component: () => import('@/components/views/OrderView.vue')
    },
    {
        path: '/deliver',
        name: 'deliver',
        component: () => import('@/components/views/DeliverView.vue')
    },
    {
        path: '/requests',
        name: 'requests',
        component: () => import('@/components/views/RequestListVue.vue')
    },
    {
        path: '/requests/:id',
        name: 'request',
        component: () => import('@/components/views/RequestView.vue')
    },
]
