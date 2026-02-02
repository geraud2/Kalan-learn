"use client";

import { motion } from "framer-motion";
import kalanLogoIcon from "@/assets/kalan-logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <img
              src={kalanLogoIcon}
              alt="KALAN"
              className="h-10 w-10 rounded-xl"
            />
            <span className="text-xl font-bold text-foreground">KALAN</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Plateforme éducative numérique
          </motion.p>

          {/* Minimal links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-8 text-sm text-muted-foreground mb-8"
          >
            <a href="#accueil" className="hover:text-foreground transition-colors">
              Accueil
            </a>
            <a href="#fonctionnalites" className="hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#utilisateurs" className="hover:text-foreground transition-colors">
              Utilisateurs
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground/60"
          >
            © {currentYear} KALAN. Tous droits réservés.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
