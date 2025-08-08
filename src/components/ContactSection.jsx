import { Mail,Phone,MapPin, Linkedin, Instagram, Github, Send } from "lucide-react";
import {cn} from '@/lib/utils'
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(()=>{
            toast({
                title: "Message Sent!",
                description: "Thank You for the message. I'll get back to you soon."
            })
        setIsSubmitting(false);
        },1000)
    }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="w-6 h-6 text-primary"/>{""}
                        </div>
                        <div className="">
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:sidhjain.17@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">sidhjain.17@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Phone className="w-6 h-6 text-primary"/>{""}
                        </div>
                        <div className="">
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+919811622070" className="text-muted-foreground hover:text-primary transition-colors">+91 9811622070
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="w-6 h-6 text-primary"/>{""}
                        </div>
                        <div className="">
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">Delhi, India
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/sidh-jain-b56501251/" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="http://github.com/Sidhjain17" target="_blank">
                            <Github />
                        </a>
                        <a href="https://www.instagram.com/sidhjain.17?igsh=ZmkwemhxaW1qZGs5" target="_blank">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                <form className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" placeholder="Sidh Jain..."/>
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" placeholder="@gmail.com"/>
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea type="message" id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, I'd like to talk about..."/>
                    </div>

                    <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                    )}>
                      {isSubmitting ? "Sending...":"Send Message"}
                      <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}