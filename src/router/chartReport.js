const chartReportRoutes = [
    {
      path: '/ChartPie',
      name: 'ChartPie',
      component: () => import('@/pages/charPieReport/index.vue')
    },
    {
      path: '/ChartBar',
      name: 'ChartBar',
      component: () => import('@/pages/charBarReport/index.vue')
    }
]
  
export default chartReportRoutes