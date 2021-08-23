import { BASE_URL, PRODUCTS } from "../../resources/APIEndpoints"
import {APIServices} from '../../resources/APIServices'
export const onGetTags= () =>{
    
    return async(dispatch)=>{
        
        const url = BASE_URL + PRODUCTS
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetTagsSuccess(res.results))
        }).catch((error)=>{
            // console.log(error)
        })
    }
}
export const onGetTagsSuccess = (data)=>{
    return{
        type : "ON_GETTAG_LIST_SUCCESS",
        payload : data,
    }
}