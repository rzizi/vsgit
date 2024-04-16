//基地址
const baseURL="https://pcapi-xiaotuxian-front-devtest.itheima.net"

//对接口的一个定义
interface Data<T>{ //泛型
    code:string,
    msg:string,
    result:T
}
//封装请求拦截器
export const request =<T>(options:UniApp.RequestOptions)=>{
    let {url,header={},method='get',data}=options
    url=baseURL+url
    return new Promise<Data<T>>((resolve,reject)=>{
        uni.request({
            url,
			header,
			data,
            success(res:any){
                if(res.statusCode >=200 && res.statusCode <300){
                    resolve(res.data as Data<T>)
                }else if(res.statusCode ===401){
                //   401错误 清理用户信息，跳转到登录页
                uni.navigateTo({url:"/pages/login/login"})
                reject(res)
                }else{
                    //其他错误----提示信息
                    uni.showToast({
                        icon:"none",
                        title:(res.data as Data<T>).msg || "请求错误"
                    })
                    reject(res)
                }
            },
            //响应失败
            fail:err=>{
                uni.showToast({
                    icon:"none",
                    title:"网络错误，换个网络试试"
                })
                reject(err)
			}
        })
    })
}
