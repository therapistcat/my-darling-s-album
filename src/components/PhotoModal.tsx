import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  caption?: string;
}

const PhotoModal = ({ isOpen, onClose, imageSrc, caption }: PhotoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X size={20} />
            </button>
            
            <img
              src={imageSrc}
              alt="Photo"
              className="w-full max-h-[70vh] object-contain"
            />
            
            {caption && (
              <div className="p-6 text-center">
                <Heart className="inline-block text-primary mb-2" size={20} />
                <p className="font-script text-xl text-foreground">{caption}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;
