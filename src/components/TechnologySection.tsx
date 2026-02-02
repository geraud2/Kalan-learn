"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Smartphone, Shield } from "lucide-react";

const features = [
  { icon: Zap, text: "Rapide" },
  { icon: Globe, text: "Accessible" },
  { icon: Smartphone, text: "Mobile-first" },
  { icon: Shield, text: "Sécurisé" },
];

const TechnologySection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-highlight/10 text-highlight text-xs md:text-sm font-medium mb-4">
            Infrastructure
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
            Technologie
            <span className="gradient-text"> de pointe</span>
          </h2>
          
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            Une infrastructure cloud mondiale pour une expérience fluide et instantanée.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group"
            >
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-3 md:mb-4"
                >
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
                </motion.div>
                
                <h3 className="font-bold text-sm md:text-base lg:text-lg text-foreground">
                  {feature.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-base md:text-lg lg:text-xl font-medium text-foreground">
            Performance. Fiabilité. Innovation.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            99.9% de disponibilité
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
