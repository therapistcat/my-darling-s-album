import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import BackButton from '@/components/BackButton';
import PhotoCard from '@/components/PhotoCard';
import PhotoModal from '@/components/PhotoModal';
import FloatingHearts from '@/components/FloatingHearts';

import flowersImage from '@/assets/photos/beautiful/flowers.jpg';
import Image1 from '@/assets/photos/beautiful/image1.jpeg';
import Image2 from '@/assets/photos/beautiful/image2.jpeg';
import Image3 from '@/assets/photos/beautiful/image3.jpeg';
import Image4 from '@/assets/photos/beautiful/image4.jpeg';
import Image5 from '@/assets/photos/beautiful/image5.jpeg';
import Image6 from '@/assets/photos/beautiful/image6.jpeg';


const photos = [
  { src: Image1, caption: 'mommy humri✨' },
  { src: Image2, caption: 'traditional wali photu 💓' },
  { src: Image3, caption: 'saree wali photu 🌸' },
  { src: Image4, caption: 'ye dekh karr bhi pyaar me gira tha 💖' },
  { src: Image5, caption: 'ye waale din aapko gussa dila diya tha 🌟' },
  { src: Image6, caption: 'ye bhi bada pyaara hai 💕' },
];

const BeautifulPhotos = () => {
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
            <Sparkles className="text-primary" size={32} />
            <Star className="text-gold" size={32} />
          </motion.div>

          <motion.h1
            className="font-script text-4xl md:text-6xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            mann mohini🌸
          </motion.h1>

          <motion.p
            className="font-display text-lg text-muted-foreground italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            "me khudko amar samjhta tha parr aapki adaa ne mujhe maar diyaa"
          </motion.p>
        </header>

        {/* Photo Grid */}
        <main className="px-4 pb-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 * index, duration: 0.5 }}
              >
                <PhotoCard
                  src={photo.src}
                  caption={photo.caption}
                  variant="elegant"
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

export default BeautifulPhotos;
