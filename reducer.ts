import { loginSucess } from "./action"
import { login_failure, login_request, login_success } from "./actiontypes"

const initialstate={
login:{loading:true,data:null,error:null}
}

export const reducer=(state=initialstate,action:any)=>{
    switch(action.type){
        case login_request:
            return{
                ...state,
                login:{loading:true,data:null,error:null}
            }
            case login_success:
            return{
                ...state,
                login:{loading:false,data:action.payload,error:null}
            }
            case login_failure:
            return{
                ...state,
                login:{loading:false,data:null,error:action.payload}
            }
             default:
      return state;
    }

}