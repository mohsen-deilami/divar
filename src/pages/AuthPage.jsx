import React, { useState } from 'react'
import SendOtpForm from '../components/templates/SendOtpForm'
import CheckOtfForm from '../components/templates/CheckOtfForm'

export default function AuthPage() {
    const [step,setStep]=useState(1);
    const [mobile,setMobile]=useState("")
    const [code,setCode]=useState("");
  return (
    <div>
        {step === 1 && <SendOtpForm/>}
        {step === 2 && <CheckOtfForm/>}
      
   
    </div>
  )
}
;