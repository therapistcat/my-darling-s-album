import { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile, PartyPopper } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import PhotoCard from '@/components/PhotoCard';
import PhotoModal from '@/components/PhotoModal';
import FloatingHearts from '@/components/FloatingHearts';

import Image1 from '@/assets/photos/goofy/image11.jpeg';
import Image2 from '@/assets/photos/goofy/image2.jpeg';
import Image3 from '@/assets/photos/goofy/image3.jpeg';
import Image4 from '@/assets/photos/goofy/image4.jpeg';
import Image5 from '@/assets/photos/goofy/image5.jpeg';
import Image6 from '@/assets/photos/goofy/image6.jpeg';


const photos = [
  { src: Image1, caption: 'lips khaane ka mann karr rha! 😂' },
  { src: Image2, caption: 'favorite sticker hai mera ngl🤪' },
  { src: Image3, caption: 'ganji 😜' },
  { src: Image4, caption: 'mene li hai ye photu 🥴' },
  { src: Image5, caption: 'pufffffff💃' },
  { src: Image6, caption: 'chudail meri ice cream khaa rhi🎉' },
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
            Meri Pagli
          </motion.h1>

          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "Aise hi photu bhejti rehnaa"
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
