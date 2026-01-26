import { motion } from 'framer-motion';
import { Mail, Heart, PenLine } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import FloatingHearts from '@/components/FloatingHearts';

const letters = [
  {
    title: 'To My Forever Person',
    date: 'January 15, 2026',
    content: `meri mehraaru,

From the moment you walked into my life, everything changed. The colors became brighter, the music became sweeter, and my heart found its home.

You are my first thought in the morning and my last wish at night. Your smile is my favorite view, and your laugh is my favorite sound.

Thank you for being you. Thank you for choosing me. Thank you for loving me in all my imperfections.

Forever Yours,
Me 💕`
  },
  {
    title: 'lovee you mera baccha',
    date: 'December 17, 2025',
    content: `My Beautiful Love,

baadme bharunga`
  },
  {
    title: 'kya re chikni',
    date: 'March 8, 2026',
    content: `meri maalkin,

kuch chzein baad ke liye `
  },
];

const Letters = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background relative">
        <FloatingHearts />
        <BackButton />

        {/* Header */}
        <header className="pt-24 pb-12 px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Mail className="text-primary" size={32} />
            <PenLine className="text-gold" size={32} />
          </motion.div>
          
          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            suar
          </motion.h1>
          
          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "dherrr saari pyaari"
          </motion.p>
        </header>

        {/* Letters */}
        <main className="px-4 pb-16 max-w-3xl mx-auto">
          <div className="space-y-12">
            {letters.map((letter, index) => (
              <motion.article
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {/* Decorative envelope icon */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <Mail className="text-primary" size={20} />
                </motion.div>

                <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden p-8 md:p-10">
                  {/* Letter header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <h2 className="font-display text-xl md:text-2xl text-foreground">{letter.title}</h2>
                    <span className="font-body text-sm text-muted-foreground">{letter.date}</span>
                  </div>

                  {/* Letter content */}
                  <motion.div
                    className="font-body text-foreground leading-relaxed whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {letter.content.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.01 * charIndex }}
                      >
                        {char}
                      </motion.span>
                    )).slice(0, 200)}
                    {letter.content.slice(200)}
                  </motion.div>

                  {/* Heart decoration */}
                  <div className="flex justify-center mt-8 gap-2">
                    <Heart className="text-primary" size={16} fill="currentColor" />
                    <Heart className="text-primary" size={20} fill="currentColor" />
                    <Heart className="text-primary" size={16} fill="currentColor" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Letters;
