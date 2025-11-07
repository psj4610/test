"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Target,
  RefreshCw,
  BarChart3,
  Globe,
  Check,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers results in milliseconds, not seconds.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption for your peace of mind.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Easy to Use",
    description: "Intuitive interface designed for both beginners and professionals.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Stay in sync across all your devices with automatic updates.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain insights with powerful analytics and detailed reporting.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 customer support available in multiple languages worldwide.",
    color: "from-teal-500 to-cyan-500"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Proven Track Record",
    description: "Over 10,000+ satisfied customers worldwide"
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Regular updates with new features and improvements"
  },
  {
    icon: Award,
    title: "Money-Back Guarantee",
    description: "30-day refund policy, no questions asked"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                YourBrand
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                New: AI-Powered Features
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Build Something
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Today
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            >
              The modern platform that helps you create, collaborate, and grow your business with powerful tools and seamless integrations.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 aspect-video flex items-center justify-center border">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="w-24 h-24 text-primary" />
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -left-4"
            >
              <Badge className="shadow-lg">
                <Check className="w-3 h-3 mr-1" />
                Trusted
              </Badge>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 -right-4"
            >
              <Badge variant="secondary" className="shadow-lg">
                <Shield className="w-3 h-3 mr-1" />
                Secure
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in one place
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We've helped thousands of businesses transform their operations and achieve remarkable growth.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-blue-100">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-8 aspect-square flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Award className="w-32 h-32 text-white" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge variant="outline" className="mb-4">
            Get Started
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of teams already using our platform to achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="ghost" className="text-lg">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">YourBrand</h3>
              </div>
              <p className="text-muted-foreground">
                Building the future of work, one innovation at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 YourBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
