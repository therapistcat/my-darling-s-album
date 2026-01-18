import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import TimelineItem from '@/components/TimelineItem';
import MusicToggle from '@/components/MusicToggle';
import PageTransition from '@/components/PageTransition';

import coupleImage from '@/assets/photos/us/couple-sunset.jpg';
import flowersImage from '@/assets/photos/beautiful/flowers.jpg';
import partyImage from '@/assets/photos/goofy/party.jpg';
import heartsImage from '@/assets/photos/best/hearts-bokeh.jpg';
import letterImage from '@/assets/photos/memories/love-letter.jpg';

const timelineItems = [
  {
    to: '/goofy',
    title: 'Our Goofy Moments',
    subtitle: 'When we laugh until we cry',
    image: partyImage,
    emoji: '🤪',
  },
  {
    to: '/beautiful',
    title: 'Your Beauty',
    subtitle: 'Every moment, breathtaking',
    image: flowersImage,
    emoji: '✨',
  },
  {
    to: '/best',
    title: 'The Bestest Photo',
    subtitle: 'My absolute favorite',
    image: heartsImage,
    emoji: '💖',
  },
  {
    to: '/us',
    title: 'Us Together',
    subtitle: 'Two hearts, one story',
    image: coupleImage,
    emoji: '💑',
  },
  {
    to: '/memories',
    title: 'Precious Memories',
    subtitle: 'Moments frozen in time',
    image: letterImage,
    emoji: '📸',
  },
  {
    to: '/letters',
    title: 'Love Letters',
    subtitle: 'Words from my heart',
    image: letterImage,
    emoji: '💌',
  },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative overflow-hidden">
        <FloatingHearts />
        <MusicToggle />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
          {/* Gradient overlay */}
          <div className="absolute inset-0 gradient-romantic opacity-50" />
          
          {/* Content */}
          <motion.div
            className="relative z-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-soft mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <Sparkles className="text-primary" size={16} />
              <span className="font-body text-sm text-muted-foreground">A Digital Love Letter</span>
              <Sparkles className="text-primary" size={16} />
            </motion.div>

            <motion.h1
              className="font-script text-5xl md:text-7xl lg:text-8xl text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              For My Love
            </motion.h1>

            <motion.p
              className="font-display text-xl md:text-2xl text-foreground mb-8 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              "Every moment with you is a memory I treasure forever"
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Heart className="text-primary animate-heart-beat" size={24} fill="currentColor" />
              <span className="font-body text-muted-foreground">Scroll to explore our journey</span>
              <Heart className="text-primary animate-heart-beat" size={24} fill="currentColor" />
            </motion.div>

            <motion.div
              className="mt-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-primary/50 mx-auto flex justify-center pt-2">
                <motion.div
                  className="w-1.5 h-3 rounded-full bg-primary"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="relative py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="font-display text-3xl md:text-4xl text-center text-foreground mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Story <span className="text-primary">💕</span>
            </motion.h2>

            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item, index) => (
                <TimelineItem key={item.to} {...item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Secret Link */}
        <motion.div
          className="py-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/surprise"
            className="inline-flex items-center gap-2 font-script text-lg text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            There's a surprise waiting for you...
            <Sparkles size={16} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <footer className="relative py-8 text-center border-t border-border">
          <p className="font-script text-xl text-primary">
            Made with <Heart size={16} className="inline text-primary" fill="currentColor" /> for you
          </p>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
