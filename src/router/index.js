import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '@/views/Category/AddCategory.vue'
import AdminCategory from '@/views/Category/AdminCategory.vue'
import EditCategory from '@/views/Category/EditCategory.vue'
import AdminProduct from '@/views/Product/AdminProduct.vue'
import AddProduct from '@/views/Product/AddProduct.vue'
import EditProduct from '@/views/Product/EditProduct.vue'

import Admin from '@/views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },


  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: AdminCategory
  },

  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },

  {
    path: '/admin/category/edit/:id',
    name: 'EditCategory',
    component: EditCategory
  },


  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: AdminProduct
  },

  {
    path: '/admin/products/add',
    name: 'AddProduct',
    component: AddProduct
  },
  
  {
    path: '/admin/products/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
