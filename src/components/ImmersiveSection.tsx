"use client";

import { motion } from "framer-motion";
import phonesFloating from "@/assets/phones-floating.png";

const ImmersiveSection = () => {
  return (
    <section
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12 lg:mb-16 max-w-3xl px-2"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
              Expérience immersive
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Apprenez 
              <span className="gradient-text"> partout</span>
              <br className="hidden sm:block" />
              <span className="text-muted-foreground"> à tout moment</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto px-2">
              Téléchargez vos cours pour un accès hors-ligne. 
              Reprenez là où vous vous êtes arrêté.
            </p>
          </motion.div>

          {/* Phones image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={phonesFloating}
                alt="KALAN App Screens"
                className="w-full rounded-2xl md:rounded-3xl"
              />
            </motion.div>
            
            {/* Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/15 via-highlight/10 to-transparent blur-2xl -z-10" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-10 md:mt-16 lg:mt-20 w-full max-w-2xl"
          >
            {[
              { value: "10K+", label: "Utilisateurs" },
              { value: "500+", label: "Cours" },
              { value: "100+", label: "Experts" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveSection;
