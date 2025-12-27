import request from '@/utils/request.js'
// import {useTokenStore} from '@/stores/token.js'
// 文章分类列表查询
export const articleCategoryListService = () => {
    // 从pinia中获取token
    // const tokenStore = useTokenStore();
    // 在pinia中定义的响应式数据，都不需要.value
    // return request.get('/category', {headers: {'Authorization': tokenStore.token}})
    return request.get('/category')
}
// 文章分类添加
export const articleCategoryAddService = (categoryData) => {
    return request.post('/category', categoryData)
}

// 文章分类修改
export const articleCategoryUpdateService = (categoryData) => {
    return request.put('/category', categoryData)
}

// 删除文章分类
export const articleCategoryDeleteService = (categoryId) => {
    return request.delete(`/category/${categoryId}`)
}

// 文章列表查询
export const articleListService = (params) => {
    return request.get('/article', {params: params})
}

// 文章添加
export const articleAddService = (articleData) => {
    return request.post('/article', articleData)
}

