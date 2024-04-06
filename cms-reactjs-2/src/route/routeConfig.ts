import lazyLoading from '@src/components/widgets/LazyLoading'
import { ACCESS } from '@src/configs/permission'
import React from 'react'
import { PathRouteProps } from 'react-router-dom'

export interface TRouteConfig extends PathRouteProps {
  Element: React.FC
  key: ACCESS
}

const Dashboard = lazyLoading(() => import('@pages/dashboard'))

const Role = lazyLoading(() => import('@pages/role'))

const User = lazyLoading(() => import('@pages/user'))
const CreateUser = lazyLoading(() => import('@pages/user/create'))
const DetailUser = lazyLoading(() => import('@pages/user/detail'))

const Media = lazyLoading(() => import('@pages/media'))

const Post = lazyLoading(() => import('@pages/post'))
const CreatePost = lazyLoading(() => import('@pages/post/create'))
const DetailPost = lazyLoading(() => import('@pages/post/detail'))
const Category = lazyLoading(() => import('@pages/post/category'))
const CreateCategory = lazyLoading(() => import('@pages/post/category/create'))
const DetailCategory = lazyLoading(() => import('@pages/post/category/detail'))

const routeConfig: TRouteConfig[] = [
  {
    path: '/',
    Element: Dashboard,
    key: ACCESS.GENERAL,
  },

  // Role
  {
    path: '/role',
    Element: Role,
    key: ACCESS.LIST_ROLES,
  },
  {
    path: '/create-role',
    Element: Role,
    key: ACCESS.CREATE_ROLE,
  },
  {
    path: '/role/:id',
    Element: Role,
    key: ACCESS.VIEW_ROLE,
  },

  // User
  {
    path: '/user',
    Element: User,
    key: ACCESS.LIST_USERS,
  },
  {
    path: '/create-user',
    Element: CreateUser,
    key: ACCESS.CREATE_USER,
  },
  {
    path: '/detail-user/:id',
    Element: DetailUser,
    key: ACCESS.VIEW_USER,
  },

  // Media
  {
    path: '/media',
    Element: Media,
    key: ACCESS.LIST_MEDIAS,
  },

  // Post
  {
    path: '/post',
    Element: Post,
    key: ACCESS.LIST_POST,
  },
  {
    path: '/create-post',
    Element: CreatePost,
    key: ACCESS.CREATE_POST,
  },
  {
    path: '/detail-post/:id',
    Element: DetailPost,
    key: ACCESS.VIEW_POST,
  },
  {
    path: '/category',
    Element: Category,
    key: ACCESS.LIST_TAXONOMY,
  },
  {
    path: '/create-category',
    Element: CreateCategory,
    key: ACCESS.LIST_TAXONOMY,
  },
  {
    path: '/detail-category/:id',
    Element: DetailCategory,
    key: ACCESS.LIST_TAXONOMY,
  },
]

export default routeConfig
