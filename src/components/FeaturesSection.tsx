"use client";

import { motion } from "framer-motion";
import { Play, ShoppingCart, User, GraduationCap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Cours vidéo",
    description: "HD streaming",
  },
  {
    icon: ShoppingCart,
    title: "Achat simple",
    description: "Paiement sécurisé",
  },
  {
    icon: User,
    title: "Profil étudiant",
    description: "Progression trackée",
  },
  {
    icon: GraduationCap,
    title: "Profil professeur",
    description: "Publiez vos cours",
  },
  {
    icon: CheckCircle,
    title: "Exercices",
    description: "Correction auto",
  },
];

const FeaturesSection = () => {
  return (
    <section id="fonctionnalites" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
            Tout ce dont vous avez <span className="gradient-text">besoin</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            Une suite complète d'outils pour un apprentissage efficace.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl md:rounded-3xl p-4 md:p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 md:mb-4"
                >
                  <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
