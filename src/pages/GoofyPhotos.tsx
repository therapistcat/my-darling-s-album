import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, PartyPopper } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import PhotoCard from '@/components/PhotoCard';
import PhotoModal from '@/components/PhotoModal';
import FloatingHearts from '@/components/FloatingHearts';

import partyImage from '@/assets/photos/goofy/party.jpg';

const photos = [
  { src: partyImage, caption: 'That time we couldn\'t stop laughing! 😂' },
  { src: partyImage, caption: 'Your silly face is my favorite 🤪' },
  { src: partyImage, caption: 'Partners in crime forever 😜' },
  { src: partyImage, caption: 'When you made that weird face 🥴' },
  { src: partyImage, caption: 'Dancing like nobody\'s watching 💃' },
  { src: partyImage, caption: 'Our crazy adventures together 🎉' },
];

const GoofyPhotos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string } | null>(null);

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
            <PartyPopper className="text-primary" size={32} />
            <Smile className="text-gold" size={32} />
          </motion.div>
          
          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our Goofy Moments
          </motion.h1>
          
          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Life is better when you're laughing together"
          </motion.p>
        </header>

        {/* Photo Grid */}
        <main className="px-4 pb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -5 : 5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.1 * index, type: 'spring' }}
              >
                <PhotoCard
                  src={photo.src}
                  caption={photo.caption}
                  variant="goofy"
                  onClick={() => setSelectedPhoto(photo)}
                />
              </motion.div>
            ))}
          </div>
        </main>

        <PhotoModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          imageSrc={selectedPhoto?.src || ''}
          caption={selectedPhoto?.caption}
        />
      </div>
    </PageTransition>
  );
};

export default GoofyPhotos;
