import  {request} from '../utils/request'

export const getuser=(data={})=>{
    return request({
        method:'GET',
        url:"/home/banner",
        data
    })
}