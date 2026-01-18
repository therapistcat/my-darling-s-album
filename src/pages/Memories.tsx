import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, BookOpen } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import PhotoModal from '@/components/PhotoModal';
import FloatingHearts from '@/components/FloatingHearts';

import letterImage from '@/assets/photos/memories/love-letter.jpg';
import coupleImage from '@/assets/photos/us/couple-sunset.jpg';
import flowersImage from '@/assets/photos/beautiful/flowers.jpg';

const memories = [
  { 
    src: letterImage, 
    title: 'The First Time',
    description: 'When our eyes met for the first time, I knew something magical was about to begin. This photo reminds me of that butterflies-in-stomach feeling.',
    date: 'January 2023'
  },
  { 
    src: coupleImage, 
    title: 'Our Perfect Day',
    description: 'The weather was perfect, the sunset was breathtaking, but nothing compared to having you by my side. This day will forever be etched in my heart.',
    date: 'March 2023'
  },
  { 
    src: flowersImage, 
    title: 'Surprise Flowers',
    description: 'Remember when I surprised you with your favorite flowers? Your smile made everything worth it. I\'d do it a thousand times over.',
    date: 'June 2023'
  },
  { 
    src: letterImage, 
    title: 'Handwritten Notes',
    description: 'The little notes we leave for each other mean more than any grand gesture. Each one is a tiny treasure I keep close to my heart.',
    date: 'August 2023'
  },
  { 
    src: coupleImage, 
    title: 'Dancing in the Rain',
    description: 'Who needs an umbrella when I have you? That spontaneous dance in the rain was pure magic. Let\'s do it again soon!',
    date: 'October 2023'
  },
  { 
    src: flowersImage, 
    title: 'Growing Together',
    description: 'Like flowers in a garden, our love continues to bloom. Every day with you is a new petal unfolding.',
    date: 'December 2023'
  },
];

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState<typeof memories[0] | null>(null);

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
            <Camera className="text-primary" size={32} />
            <BookOpen className="text-gold" size={32} />
          </motion.div>
          
          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Precious Memories
          </motion.h1>
          
          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Each photo tells a story of us"
          </motion.p>
        </header>

        {/* Memory Grid */}
        <main className="px-4 pb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedMemory(memory)}
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-glow transition-all duration-500">
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={memory.src}
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Date badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-body">
                      {memory.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {memory.title}
                    </h3>
                    <p className="font-body text-muted-foreground line-clamp-2">
                      {memory.description}
                    </p>
                    <p className="font-script text-primary mt-3 text-sm">
                      Click to read more 💕
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Memory Detail Modal */}
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-3xl overflow-hidden shadow-card max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedMemory.src}
                alt={selectedMemory.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <span className="text-primary font-body text-sm">{selectedMemory.date}</span>
                <h2 className="font-display text-2xl text-foreground mt-1 mb-4">{selectedMemory.title}</h2>
                <p className="font-body text-muted-foreground leading-relaxed">{selectedMemory.description}</p>
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="mt-6 px-6 py-2 rounded-full bg-primary text-primary-foreground font-body hover:bg-primary/90 transition-colors"
                >
                  Close Memory 💕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  );
};

export default Memories;
