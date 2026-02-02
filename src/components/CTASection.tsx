"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppStoreButtons from "./AppStoreButtons";
import kalanLogoIcon from "@/assets/kalan-logo-icon.png";

const CTASection = () => {
  return (
    <section id="cta" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)/0.06) 0%, hsl(var(--highlight)/0.1) 50%, hsl(var(--accent)/0.06) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-6 md:mb-8"
          >
            <img
              src={kalanLogoIcon}
              alt="KALAN"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl md:rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-primary/20 blur-xl -z-10 scale-125" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2"
          >
            Prêt à <span className="gradient-text">apprendre</span> ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-muted-foreground mb-3 md:mb-4 px-4"
          >
            Rejoignez plus de 10 000 apprenants passionnés.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs md:text-sm text-muted-foreground/80 mb-6 md:mb-8"
          >
            Inscription gratuite • Premiers cours offerts
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="gradient-bg text-primary-foreground hover:opacity-90 font-bold text-sm md:text-base lg:text-lg px-6 md:px-8 lg:px-10 py-5 md:py-6 lg:py-7 rounded-full shadow-lg"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Disponible sur mobile
            </p>
            <AppStoreButtons variant="dark" size="sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
