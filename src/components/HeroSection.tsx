"use client";

import { motion } from "framer-motion";
import kalanLogoIcon from "@/assets/kalan-logo-icon.png";
import phoneMockup from "@/assets/phone-mockup-hero.png";
import AppStoreButtons from "./AppStoreButtons";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 md:pt-40 pb-10 md:pb-0"
    >
      {/* Conteneur principal */}
      <div className="container mx-auto px-4 relative z-10 mt-8 md:mt-0">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <img
              src={kalanLogoIcon}
              alt="KALAN"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl md:rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 px-2"
          >
            <span className="text-foreground">La nouvelle génération</span>
            <br />
            <span className="gradient-text">de l'apprentissage</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-3 md:mb-4 px-4"
          >
            Des cours vidéo créés par des experts. Une progression personnalisée.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-base text-muted-foreground/80 max-w-md md:max-w-xl mx-auto mb-8 md:mb-10 px-4"
          >
            Rejoignez plus de 10 000 apprenants.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 md:mb-16"
          >
            <AppStoreButtons variant="dark" size="sm" />
          </motion.div>

          {/* Phone Mockup avec taille ajustée */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={phoneMockup}
                alt="KALAN App"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{
                  maxHeight: "70vh",
                  minHeight: "400px"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5 md:pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;