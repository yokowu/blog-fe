import {get, post} from './http'

export const getPostDescList = () => get('api/post/list');
export const getPostById = (id) => post('api/post/get', {id: parseInt(id)})
export const setPost = (p) => post('/api/post/create', {
    title: p.title,
    content: p.content,
    desc: p.desc,
    coverUrl: p.coverUrl,
    tags: p.tags
})