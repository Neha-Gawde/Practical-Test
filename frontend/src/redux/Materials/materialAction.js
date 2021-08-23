import { BASE_URL, MATERIALS } from "../../resources/APIEndpoints"
import {APIServices} from '../../resources/APIServices'
export const onGetMaterials= () =>{
    
    return async(dispatch)=>{
        
        const url = BASE_URL + MATERIALS
        const res = await new APIServices().get(url)
        .then((res)=>{
            // console.log(res.results)
            dispatch(onGetMaterialsSuccess(res.results))
        }).catch((error)=>{
            // console.log(error)
        })
    }
}
export const onGetMaterialsSuccess = (data)=>{
    return{
        type : "ON_GETMATERIALS_LIST_SUCCESS",
        payload : data,
    }
}