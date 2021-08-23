import { BASE_URL, COLORS } from "../../resources/APIEndpoints"
import {APIServices} from '../../resources/APIServices'
export const onGetColors= () =>{
    
    return async(dispatch)=>{
        
        const url = BASE_URL + COLORS
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetColorsSuccess(res.results))
        }).catch((error)=>{
            // console.log(error)
        })
    }
}
export const onGetColorsSuccess = (data)=>{
    return{
        type : "ON_GETCOLORS_LIST_SUCCESS",
        payload : data,
    }
}