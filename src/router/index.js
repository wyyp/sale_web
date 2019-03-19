import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    // 根路由页
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页',
      },
      redirect: to => {
        return '/productManagement'
      },    
      children: [  
        // 产品管理     
        {
          path: '/productManagement',
          name: 'productManagement',
          component: resolve => require(['@/components/productManagement/productManagement'], resolve),
          meta: {
            title: '产品管理',
          },
          redirect: to => {
            return '/OriginalManagement'
          },
          children: [
            // 产品管理-原件管理
            {
              path: '/OriginalManagement',
              name: 'OriginalManagement',
              component: resolve => require(['@/components/productManagement/OriginalManagement'], resolve),
              meta: {
                title: '产品管理-原件管理',
              }
            },  
            // 产品管理-产品规划
            {
              path: '/ProductPlanning',
              name: 'ProductPlanning',
              component: resolve => require(['@/components/productManagement/ProductPlanning'], resolve),
              meta: {
                title: '产品管理-产品规划',
              }
            },  
            // 产品管理-产品维护
            {
              path: '/ProductMaintenance',
              name: 'ProductMaintenance',
              component: resolve => require(['@/components/productManagement/ProductMaintenance'], resolve),
              meta: {
                title: '产品管理-产品维护',
              }
            }, 
            // 产品管理-促销品管理
            {
              path: '/PromotionManagement',
              name: 'PromotionManagement',
              component: resolve => require(['@/components/productManagement/PromotionManagement'], resolve),
              meta: {
                title: '产品管理-促销品管理',
              }
            }, 
            // 产品管理-开票商品编码信息
            {
              path: '/InvoiceCommodityCodingCnformation',
              name: 'InvoiceCommodityCodingCnformation',
              component: resolve => require(['@/components/productManagement/InvoiceCommodityCodingCnformation'], resolve),
              meta: {
                title: '产品管理-开票商品编码信息',
              }
            }            
          ]
        },
        // 客户管理
        {
          path: '/customerManagement',
          name: 'customerManagement',
          component: resolve => require(['@/components/customerManagement/customerManagement'], resolve),
          meta: {
            title: '客户管理',
          }
        },
        // 销售管理
        {
          path: '/SalesManagement',
          name: 'SalesManagement',
          component: resolve => require(['@/components/SalesManagement/SalesManagement'], resolve),
          meta: {
            title: '销售管理',
          }
        },
        // 积分管理
        {
          path: '/IntegralManagement',
          name: 'IntegralManagement',
          component: resolve => require(['@/components/IntegralManagement/IntegralManagement'], resolve),
          meta: {
            title: '积分管理',
          }
        },
        // 资源管理
        {
          path: '/resourceManagement',
          name: 'resourceManagement',
          component: resolve => require(['@/components/resourceManagement/resourceManagement'], resolve),
          meta: {
            title: '资源管理',
          }
        },
        // 其他
        {
          path: '/Other',
          name: 'Other',
          component: resolve => require(['@/components/Other/Other'], resolve),
          meta: {
            title: '其他',
          }
        }
      ]
    },
    // 登录页面
    {
      path: '/SignIn',
      name: 'SignIn',
      component: require('@/components/SignIn'),
      meta: {
        title: '登录',
      }
    },
    // 错误页面
    {
      path: '*',
      name: 'Error',
      component: require('@/components/_404'),
      meta: {
        title: '404',
      }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    if (to.meta.title === '首页') {
      document.title = '神州浩天-' + to.meta.title
    } else {
      document.title = to.meta.title + "-神州浩天"
    }
    next()
  }
})

export default router