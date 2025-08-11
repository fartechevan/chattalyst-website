import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const greeting = name ? `Hi, my name is ${name}.` : "";
    const interest = "I am interested in your Agents Bot Service.";
    const remark = `remark: ${message}`;
    const whatsappMessage = `${greeting}\n${interest}\n${remark}`;
    const whatsappUrl = `https://wa.me/601157774301?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 sm:py-20 md:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base font-normal text-gray-600">
            We're here to help—reach out with any questions or feedback.
          </p>
        </div>
        <div className="flex justify-between gap-10 py-12 max-md:flex-col">
          <form className="flex flex-1 flex-col gap-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-normal"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm font-normal"
                htmlFor="message"
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                placeholder="Type Your Message..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div className="grid flex-1 gap-6 self-start lg:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone size-5"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 className="text-2xl tracking-[-0.96px]">Phone</h3>
              </div>
              <div className="space-y-2 tracking-[-0.32px]">
                <p className="text-sm text-muted-foreground">
                  Prefer to chat? Give us a call Monday–Friday, 9 AM–5 PM.
                </p>
                <div className="text-sm text-muted-foreground">
                  <a href="tel:601157774301" className="font-bold">
                    +601157774301
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-building size-5"
                  aria-hidden="true"
                >
                  <rect
                    width="16"
                    height="20"
                    x="4"
                    y="2"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
                <h3 className="text-2xl tracking-[-0.96px]">Office</h3>
              </div>
              <div className="space-y-2 tracking-[-0.32px]">
                <p className="text-sm text-muted-foreground">
                  5, Jalan U16/163, 40160 Shah Alam, Selangor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
