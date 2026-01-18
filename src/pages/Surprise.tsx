import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Star, Gift } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';

const Surprise = () => {
  const [revealed, setRevealed] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (revealed) {
      // Create sparkle explosion effect
      const newSparkles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setSparkles(newSparkles);
    }
  }, [revealed]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative flex items-center justify-center overflow-hidden">
        <BackButton />

        {/* Gradient background */}
        <div className="absolute inset-0 gradient-romantic" />

        {/* Sparkles explosion */}
        <AnimatePresence>
          {revealed && sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute text-gold"
              initial={{ 
                x: window.innerWidth / 2, 
                y: window.innerHeight / 2, 
                opacity: 1, 
                scale: 0 
              }}
              animate={{ 
                x: sparkle.x, 
                y: sparkle.y, 
                opacity: 0, 
                scale: 1,
                rotate: 360 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              {sparkle.id % 3 === 0 ? (
                <Star size={24} fill="currentColor" />
              ) : sparkle.id % 3 === 1 ? (
                <Heart size={20} fill="currentColor" />
              ) : (
                <Sparkles size={22} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Heart size={16 + Math.random() * 20} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="gift"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <Gift className="text-primary mx-auto" size={80} />
                </motion.div>

                <h1 className="font-script text-4xl md:text-6xl text-primary">
                  You Found the Secret! 🎁
                </h1>

                <p className="font-display text-lg text-muted-foreground italic">
                  Something special awaits you...
                </p>

                <motion.button
                  onClick={() => setRevealed(true)}
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body text-lg shadow-glow hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Your Surprise 💕
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', damping: 15 }}
                className="space-y-8"
              >
                {/* Big animated hearts */}
                <motion.div
                  className="flex justify-center gap-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="text-primary" size={48} fill="currentColor" />
                  <Heart className="text-primary" size={64} fill="currentColor" />
                  <Heart className="text-primary" size={48} fill="currentColor" />
                </motion.div>

                <motion.h1
                  className="font-script text-5xl md:text-7xl text-primary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  I Love You
                </motion.h1>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="font-display text-xl text-foreground">
                    More than words could ever say
                  </p>
                  <p className="font-display text-xl text-foreground">
                    More than the stars in the sky
                  </p>
                  <p className="font-display text-xl text-foreground">
                    More than yesterday, less than tomorrow
                  </p>
                </motion.div>

                <motion.p
                  className="font-script text-2xl text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  You are my everything ❤️
                </motion.p>

                {/* Sparkle decorations */}
                <motion.div
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  <Sparkles className="text-gold animate-sparkle" size={24} />
                  <Star className="text-gold animate-pulse-soft" size={24} />
                  <Sparkles className="text-gold animate-sparkle" size={24} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Surprise;
