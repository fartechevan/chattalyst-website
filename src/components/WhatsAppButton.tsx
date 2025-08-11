import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber?: string;
  message?: string;
  children: React.ReactNode;
}

const handleWhatsAppClick = (phoneNumber: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export const WhatsAppButton = ({
  phoneNumber = "601157774301",
  message = "I want to know more about whatsapp agent chatbot",
  children,
  ...props
}: WhatsAppButtonProps) => {
  return (
    <Button {...props} onClick={() => handleWhatsAppClick(phoneNumber, message)}>
      {children}
    </Button>
  );
};
