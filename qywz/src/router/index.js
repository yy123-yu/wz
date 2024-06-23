import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"",
  component:() => import("../components/shouye.vue"),
  },
    {
      path:"/home",
    component:() => import("../components/Home.vue"),
    },
  {path:"/anli",
  component:() => import("../components/Anli.vue"),
},
{path:"/about",
  component:() => import("../components/About.vue"),
},
{path:"/contact",
  component:() => import("../components/Contact.vue"),
},
// {path:"/responsibility",
//   component:() => import("../components/Responsibility.vue"),
// },
{path:"/article",
  component:() => import("../components/Article.vue"),
},


]

const router = new VueRouter({
  routes
})

export default router
