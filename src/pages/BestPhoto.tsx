import { motion } from 'framer-motion';
import { Heart, Crown, Sparkles } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import FloatingHearts from '@/components/FloatingHearts';

import heartsImage from '@/assets/photos/best/hearts-bokeh.jpg';

const BestPhoto = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative flex flex-col items-center justify-center px-4 py-24">
        <FloatingHearts />
        <BackButton />

        {/* Gradient background */}
        <div className="absolute inset-0 gradient-romantic opacity-30" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Crown icon */}
          <motion.div
            initial={{ scale: 0, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="mb-6"
          >
            <Crown className="mx-auto text-gold" size={48} />
          </motion.div>

          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            The Bestest Photo
          </motion.h1>

          <motion.p
            className="font-display text-lg text-muted-foreground italic mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Of all our moments, this one speaks to my heart the most"
          </motion.p>

          {/* Main Photo */}
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: 'spring', damping: 20 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-glow scale-105 blur-xl opacity-50 bg-primary/30" />
            
            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-card">
              <motion.img
                src={heartsImage}
                alt="The best photo"
                className="w-full aspect-square object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Sparkle decorations */}
              <motion.div
                className="absolute top-4 left-4"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-gold" size={24} />
              </motion.div>
              <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Sparkles className="text-gold" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Caption */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="text-primary" size={28} fill="currentColor" />
              <Heart className="text-primary" size={36} fill="currentColor" />
              <Heart className="text-primary" size={28} fill="currentColor" />
            </motion.div>
            
            <h2 className="font-script text-2xl md:text-3xl text-foreground">
              My favorite moment ❤️
            </h2>
            
            <p className="font-body text-muted-foreground max-w-md">
              This photo captures everything I love about us. 
              Every time I see it, my heart feels so full.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BestPhoto;
