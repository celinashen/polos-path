import { motion } from 'framer-motion';

function CircleExitAnim() {
    return (
        <motion.div
            key="loading-animation"
            initial={{ scale: 1800 }}
            animate={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 2 }}
            style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            backgroundColor: '#2E2E2E',
            borderRadius: '50%',
            zIndex: 9999,
            }}
        ></motion.div>
    )
}

export default CircleExitAnim;