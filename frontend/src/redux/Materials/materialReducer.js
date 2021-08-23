const initialState ={
    materials:{},
    error_msg:null,
    success_msg:null,
    loading:true,
    isSuccess:false,
 }
 
 
 
 const materialListReducer =(state=initialState, action)=>{
     switch(action.type){
        case "ON_GETMATERIALS_LIST_SUCCESS":{
             return{
                 ...state,
                 materials:action.payload,
                 loading:false,
             }
         }
        default:{
             return {
                 ...state
             }
         }
     }
 }    
 export default materialListReducer
 