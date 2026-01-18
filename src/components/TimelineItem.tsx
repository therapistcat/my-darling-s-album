import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineItemProps {
  to: string;
  title: string;
  subtitle: string;
  image: string;
  index: number;
  emoji?: string;
}

const TimelineItem = ({ to, title, subtitle, image, index, emoji = '💕' }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-4 md:gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline line connector */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 -translate-x-1/2" />
      
      {/* Timeline dot */}
      <motion.div 
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary items-center justify-center shadow-glow z-10"
        whileHover={{ scale: 1.2 }}
      >
        <Heart size={18} className="text-primary-foreground" fill="currentColor" />
      </motion.div>

      {/* Content Card */}
      <Link 
        to={to}
        className={`flex-1 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}
      >
        <motion.div
          className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-glow transition-all duration-500"
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            
            {/* Emoji badge */}
            <motion.div
              className="absolute top-4 right-4 text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {emoji}
            </motion.div>
          </div>

          {/* Text content */}
          <div className="p-6">
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="font-script text-lg text-muted-foreground">
              "{subtitle}"
            </p>
            
            {/* Arrow indicator */}
            <motion.div
              className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </Link>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

export default TimelineItem;
