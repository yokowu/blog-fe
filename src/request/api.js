import {get, post} from './http'

export const getPostDescList = () => get('api/post/list');
export const getPostById = (id) => post('api/post/get', {id: parseInt(id)})