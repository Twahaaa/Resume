import { useState } from "react";
import { User, MapPin, Calendar, Heart, Globe, Mail } from "lucide-react";

const BioData = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const bioData = [
    {
      icon: User,
      label: "Full Name",
      value: "Aboobakkar Twaha",
      details: "People call me Tawa as well :)",
      color: "bg-minty",
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "November 22, 2005",
      details: "Same Birthday as Scarlett Johansson and Mark Rafallo :D",
      color: "bg-mochi",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mangalore, India",
      details: "Based in a tier-3 city with a global outlook",
      color: "bg-toffee",
    },
    {
      icon: Mail,
      label: "Email",
      value: "abubakkertwaha@gmail.com",
      details: "Open to collaboration and project discussions",
      color: "bg-nougat",
    },
    {
      icon: Heart,
      label: "Hobbies & Interests",
      value: "Reading, Coding, Exploring ML & AI, Music",
      details: "Always learning and experimenting with tech",
      color: "bg-meringue",
    },
    {
      icon: Globe,
      label: "Languages",
      value: "English, Hindi, Kannada",
      details: "While learning a lot of other coding languages as well :D",
      color: "bg-minty",
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-minty to-mochi p-1 hover:scale-110 transition-transform duration-300 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img 
                  src="/WhatsApp Image 2025-10-14 at 12.42.56 AM.jpeg" 
                  alt="Aboobakkar Twaha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 mt-5">Bio-data</h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Getting to know me a little better
          </p>
        </div>

        {/* Bio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bioData.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`relative fade-in-up hover-lift ${
                  index === 0
                    ? "delay-0"
                    : index === 1
                    ? "delay-100"
                    : index === 2
                    ? "delay-200"
                    : index === 3
                    ? "delay-300"
                    : index === 4
                    ? "delay-400"
                    : "delay-500"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${
                      item.color
                    } rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 ${
                      isHovered ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                  </div>

                  {/* Label */}
                  <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">
                    {item.label}
                  </h3>

                  {/* Value */}
                  <p className="text-lg sm:text-xl font-bold mb-3 leading-tight">{item.value}</p>

                  {/* Details (revealed on hover) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-muted-foreground border-t border-nougat pt-3">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Me Section */}
        <div className="mt-12 sm:mt-16 fade-in-up delay-600">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover-lift">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl">✨</span>
              About Me
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
              <p>
                Hi! I'm Abubakker Twaha, a Computer Science student with a
                strong focus on full-stack development and machine learning. I
                enjoy building projects that merge creativity and technology,
                from AI-powered web applications to data-driven solutions.
              </p>
              <p>
                Beyond coding, I love reading, exploring new ideas, and tackling
                challenging problems. I'm passionate about learning continuously
                and applying knowledge to real-world projects that make an
                impact.
              </p>
              <p>
                My goal is to develop solutions that matter and contribute
                meaningfully to the communities I'm part of. Let's connect and
                create something innovative together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
