import {createRouter, createWebHistory} from "vue-router";

// 导入组件
import LoginVue from "@/views/Login.vue";
import LayoutVue from "@/views/Layout.vue";

import ArticleCategoryVue from "@/views/article/ArticleCategory.vue";
import ArticleManage from "@/views/article/ArticleManage.vue";
import UserAvatarVue from "@/views/user/UserAvatar.vue";
import UserInfoVue from "@/views/user/UserInfo.vue";
import UserResetPassword from "@/views/user/UserResetPassword.vue";

// 定义路由关系
const routers = [
    {
        path: '/',
        component: LayoutVue,
        redirect: '/article/manage',
        children: [
            {
                path: '/article/category',
                name: 'ArticleCategory',
                component: ArticleCategoryVue
            },
            {
                path: '/article/manage',
                name: 'ArticleManage',
                component: ArticleManage
            },
            {
                path: '/user/avatar',
                name: 'UserAvatar',
                component: UserAvatarVue
            },
            {
                path: '/user/info',
                name: 'UserInfo',
                component: UserInfoVue
            },
            {
                path: '/user/resetPassword',
                name: 'UserResetPassword',
                component: UserResetPassword
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginVue
    },
    {
        path: '/layout',
        name: 'Layout',
        component: LayoutVue
    }
];

// 创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

// 导出路由器
export default router;
