import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import type { ContactFormData } from "../types";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = sectionRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // If validation passes, submit the form
    (e.target as HTMLFormElement).submit();
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/akabhowmick",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/akash-bhowmick-web-dev/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:akabhowmick@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8" />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you
              have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:akabhowmick@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    akabhowmick@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">New York, NY</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              action="https://formsubmit.co/akabhowmick@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden FormSubmit fields */}
              <input type="hidden" name="_next" value="https://akashbhowmick.com/" />
              <input type="hidden" name="_subject" value="Contact Form Inquiry!" />
              <input type="hidden" name="_template" value="table" />

              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 ${
                    errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                  } rounded-lg focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-transparent`}
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                >
                  Your Name
                </label>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.name}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 ${
                    errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                  } rounded-lg focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-900 dark:text-white placeholder-transparent`}
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                >
                  Your Email
                </label>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`peer w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 ${
                    errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                  } rounded-lg focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none text-gray-900 dark:text-white placeholder-transparent`}
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-white dark:bg-gray-900 px-2 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                >
                  Your Message
                </label>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
