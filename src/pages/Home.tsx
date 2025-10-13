import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-mochi/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 floating" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-toffee/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 floating delay-1000" />
        <div className="absolute top-40 right-20 w-56 h-56 bg-minty/40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 floating delay-2000" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 fade-in-up leading-tight delay-200">
            Hi, I'm <span className="name-glow cursor-pointer">Aboobakkar Twaha ;)</span>
          </h1>
          
          <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-md fade-in-up delay-400">
            Welcome to my personal corner of the internet! I'm passionate about creativity, learning, and building meaningful connections.
          </p>

          <div className="flex gap-4 fade-in-up delay-600">
            <Link to="/resume">
              <Button variant="secondary" className="text-sm px-6 py-2 hover-lift bg-minty hover:bg-minty/80 text-foreground font-semibold">
                View Resume
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="text-sm px-6 py-2 hover-lift bg-toffee hover:bg-toffee/80 text-foreground font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Explore More</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/resume" className="group">
              <div className="glass-card rounded-2xl p-8 hover-lift shadow-sm">
                <div className="w-14 h-14 bg-minty/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Resume</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Discover my education, skills, and professional achievements.
                </p>
              </div>
            </Link>

            <Link to="/biodata" className="group">
              <div className="glass-card rounded-2xl p-8 hover-lift shadow-sm">
                <div className="w-14 h-14 bg-mochi/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Bio-data</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn more about my personal details, hobbies, and interests.
                </p>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="glass-card rounded-2xl p-8 hover-lift shadow-sm">
                <div className="w-14 h-14 bg-toffee/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Let's connect! Feel free to reach out anytime through the contact page.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
