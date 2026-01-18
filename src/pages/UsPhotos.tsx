import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import FloatingHearts from '@/components/FloatingHearts';

import coupleImage from '@/assets/photos/us/couple-sunset.jpg';

const photos = [
  { src: coupleImage, date: 'Our First Date', caption: 'Where it all began 💕' },
  { src: coupleImage, date: 'That Special Day', caption: 'When you said yes 💍' },
  { src: coupleImage, date: 'Summer Adventures', caption: 'Exploring the world together 🌍' },
  { src: coupleImage, date: 'Cozy Nights', caption: 'Home is wherever you are 🏠' },
  { src: coupleImage, date: 'Celebrations', caption: 'Every day with you is worth celebrating 🎉' },
  { src: coupleImage, date: 'Forever & Always', caption: 'Us against the world 💪' },
];

const UsPhotos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
            <Users className="text-primary" size={32} />
            <Heart className="text-primary animate-heart-beat" size={32} fill="currentColor" />
          </motion.div>
          
          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Us Together
          </motion.h1>
          
          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Two hearts, one beautiful journey"
          </motion.p>
        </header>

        {/* Horizontal Scroll Gallery */}
        <main className="relative pb-16">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-soft border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-soft border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 md:px-24 py-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 snap-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-glow transition-all duration-500">
                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      src={photo.src}
                      alt={photo.date}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Date badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-sm font-body text-foreground">
                      {photo.date}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-6 text-center">
                    <p className="font-script text-xl text-foreground mb-2">{photo.caption}</p>
                    <Heart className="mx-auto text-primary" size={20} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Timeline Section */}
        <section className="px-4 pb-16 max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-2xl text-center text-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Timeline 💑
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-8">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex-1 text-right">
                    {index % 2 === 0 && (
                      <div className="bg-card p-4 rounded-2xl shadow-soft border border-border inline-block">
                        <p className="font-display text-sm text-primary font-medium">{photo.date}</p>
                        <p className="font-script text-lg text-foreground">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow z-10" />
                  
                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="bg-card p-4 rounded-2xl shadow-soft border border-border inline-block">
                        <p className="font-display text-sm text-primary font-medium">{photo.date}</p>
                        <p className="font-script text-lg text-foreground">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default UsPhotos;
