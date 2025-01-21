import React, { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtfForm from "../components/templates/CheckOtfForm";
import { Container } from "@mui/material";

export default function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <Container maxWidth="lg">
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtfForm
          mobile={mobile}
          code={code}
          setCode={setCode}
          setStep={setStep}
        />
      )}
    </Container>
  );
}
