"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Video, Award } from "lucide-react";
import phonesProfiles from "@/assets/phones-profiles.png";

const UsersSection = () => {
  return (
    <section id="utilisateurs" className="py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4">
            Pour tous les profils
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
            Une plateforme pour <span className="gradient-text">tous</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            Que vous souhaitiez apprendre ou enseigner, KALAN vous accompagne.
          </p>
        </motion.div>

        {/* Phones mockup - centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-10 md:mb-16"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={phonesProfiles}
              alt="Student and Teacher Profiles"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-highlight/10 to-accent/10 blur-[40px] md:blur-[60px] scale-110" />
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Students */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">
              Étudiants
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Accédez à des centaines de cours de qualité et suivez votre progression.
            </p>
            
            <div className="space-y-3">
              {[
                { icon: BookOpen, label: "Accès illimité" },
                { icon: TrendingUp, label: "Suivi de progression" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Teachers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">
              Professeurs
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Partagez votre expertise et générez des revenus avec vos cours.
            </p>
            
            <div className="space-y-3">
              {[
                { icon: Video, label: "Publiez vos cours" },
                { icon: Award, label: "Monétisez votre savoir" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
