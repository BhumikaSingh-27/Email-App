
import { toast } from "react-toastify";

const useToast = (type,msg) => {

    if(type==="success"){
        toast.success(`${msg}`,{
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            autoClose: 1000,
            className: "toast-align",
            // theme:"colored"
          })
    }else{
        toast.error(`${msg}`,{
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            autoClose: 1000,
            className: "toast-align",
            // theme:"colored"
          })
    }
 
  
}

export default useToast