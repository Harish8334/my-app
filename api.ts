import Cookies from "js-cookie";

export const API_URL = process.env.NEXT_PUBLIC_API_URL 
export const loginApi = async (mobile_no: string, otp: string) => {
    const res = await fetch(`${API_URL}/posp/login`, {
      method: "POST",
      headers: {
        'accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile_no, otp }),
    });
    if (!res.ok) {
      throw new Error("Login failed");
    }
    return res.json();
  }
export const otpApi=async(mobile_no:string)=>{
    const response=await fetch(`${API_URL}/posp/send_otp`,{
        method:"POST",
        headers: {
            'accept': "application/json",
            "Content-Type": "application/json",
          },
        body:JSON.stringify({mobile_no})}
    )
    if(!response.ok){
        alert("failed")
    }else alert("sucess")
    return response.json
}
export const getexamresultApi=async()=>{
  const posp_id=localStorage.getItem("user");
  const response=await fetch(`${API_URL}/posp/exam_results?posp_id=${posp_id}`,{
    method:"GET",
    headers: {
      'Authorization':`Bearer ${Cookies.get('token')}`,
        'accept': "application/json",
        // "Content-Type": "application/json",
      },
     
  })
  
 return response.json()}