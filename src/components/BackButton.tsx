import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/')}
      className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeft size={18} />
      <span className="font-body text-sm">Back</span>
      <Heart size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

export default BackButton;
