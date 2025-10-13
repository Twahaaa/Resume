import { Github, Linkedin, Code, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "abubakkertwaha@gmail.com",
      href: "mailto:abubakkertwaha@gmail.com",
      color: "bg-toffee/10 text-toffee"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      value: "github.com/Twahaaa",
      href: "https://github.com/Twahaaa",
      color: "bg-nougat/10 text-nougat"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "linkedin.com/in/aboobakkar-twaha",
      href: "https://www.linkedin.com/in/aboobakkar-twaha",
      color: "bg-minty/10 text-minty"
    },
    { 
      icon: Code, 
      label: "LeetCode", 
      value: "leetcode.com/u/abubakkertwaha",
      href: "https://leetcode.com/u/abubakkertwaha/",
      color: "bg-mochi/10 text-mochi"
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Feel free to reach out to me through any of the following channels
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 fade-in-up hover-lift delay-200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-10 text-base sm:text-lg px-2">
            I'd love to connect with you! Choose your preferred way to reach out
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-nougat hover:border-minty transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">{contact.label}</p>
                    <p className="text-base sm:text-lg font-semibold text-foreground truncate">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
