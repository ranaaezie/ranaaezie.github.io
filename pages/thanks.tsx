// pages/thanks.js
import { motion } from "framer-motion";

export default function Thanks() {
    return (
        <div className="h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold mb-4">
                    Thank You!
                </h1>
                <p className="text-lg">
                    We have received your message. We will get back to you shortly.
                </p>
            </motion.div>
        </div>
);
}
