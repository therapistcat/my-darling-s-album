import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface PhotoCardProps {
  src: string;
  alt?: string;
  caption?: string;
  onClick?: () => void;
  variant?: 'default' | 'goofy' | 'elegant';
}

const PhotoCard = ({ src, alt = 'Photo', caption, onClick, variant = 'default' }: PhotoCardProps) => {
  const variants = {
    default: {
      hover: { scale: 1.02, y: -5 },
      tap: { scale: 0.98 },
    },
    goofy: {
      hover: { scale: 1.05, rotate: Math.random() > 0.5 ? 3 : -3 },
      tap: { scale: 0.95, rotate: 0 },
    },
    elegant: {
      hover: { scale: 1.02 },
      tap: { scale: 0.99 },
    },
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={variants[variant].hover}
      whileTap={variants[variant].tap}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-2xl shadow-card bg-card">
        <img
          src={src}
          alt={alt}
          className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        {/* Heart icon */}
        <motion.div
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.2 }}
        >
          <Heart size={16} fill="currentColor" />
        </motion.div>
        
        {/* Caption */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="font-script text-lg">{caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PhotoCard;
