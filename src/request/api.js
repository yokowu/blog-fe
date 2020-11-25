import {get, post} from './http'

export const getPostDescList = () => get('api/post/list');
export const getPostById = (id) => post('api/post/get', {id: parseInt(id)})
export const setPost = (post) => {
    post('/api/post/create', {
        title: post.title,
        content: post.content,
        desc: post.desc,
        coverUrl: post.coverUrl,
        tags: post.tags
    })
}