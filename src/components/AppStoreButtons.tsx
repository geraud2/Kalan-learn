import { Apple, Play } from "lucide-react";

interface AppStoreButtonsProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
}

const AppStoreButtons = ({ variant = "dark", size = "md" }: AppStoreButtonsProps) => {
  const baseClasses = size === "md" 
    ? "flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
    : "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105";

  const lightClasses = "bg-white text-foreground hover:bg-white/90 shadow-lg";
  const darkClasses = "bg-foreground text-background hover:bg-foreground/90 shadow-lg";

  const iconSize = size === "md" ? "w-6 h-6" : "w-5 h-5";
  const textSize = size === "md" ? "text-sm" : "text-xs";
  const titleSize = size === "md" ? "text-base" : "text-sm";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* App Store */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variant === "light" ? lightClasses : darkClasses}`}
      >
        <Apple className={iconSize} />
        <div className="text-left">
          <div className={`${textSize} opacity-80`}>Télécharger sur</div>
          <div className={`${titleSize} font-bold -mt-0.5`}>App Store</div>
        </div>
      </a>

      {/* Google Play */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variant === "light" ? lightClasses : darkClasses}`}
      >
        <Play className={iconSize} fill="currentColor" />
        <div className="text-left">
          <div className={`${textSize} opacity-80`}>Disponible sur</div>
          <div className={`${titleSize} font-bold -mt-0.5`}>Google Play</div>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;
