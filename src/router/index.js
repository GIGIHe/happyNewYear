import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const components={
  layout:()=>import ('@/views/layout/layout'),
  index:()=>import ('@/views/layout/index'),
  note:()=>import ('@/components/Note'),
  register: () =>import ('@/components/Register'),
  ArticleDetail: () =>
    import ('@/components/ArticleDetail'),
}


 const router = new Router({
   mode:'history',
  routes: [
    
    {
      redirect: '/index',
      path: '/',
      name: 'layout',
      meta:{
        title:'主界面'
      },
      component: components.layout,
      
      children:[
        {   
           path: '/',
             name: 'index',
             meta: {
               title: '首页'
             },
             component: components.index,
        },
        {

          path: 'register',
          name: 'register',
          meta: {
            title: '注册'
          },
          component: components.register
        },
          {

            path: 'note',
            name: 'note',
            meta: {
              title: '写笔记'
            },
            component: components.note
          },
          {
            path: 'ArticleDetail/:id',
            name: 'ArticleDetail',
            meta: {
              title: '文章详情'
            },
            component: components.ArticleDetail,
          },
      ]
    },
  
     
  ]
})
router.beforeEach((to, from, next) => {
     Nprogress.start();
    if (to.meta && to.meta.title) {
      document.title = to.meta.title
    }
     next()
      })
      router.afterEach((to,from)=>{
        Nprogress.done()
      })


export default  router