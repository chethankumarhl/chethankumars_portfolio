import react,{ useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiLinkedin, FiGithub,FiCopy  } from "react-icons/fi";
const ContactMe = () => {
    const [copied, setCopied] = useState(false);
    const email = "chethankumar.lingaraju@gmail.com";
    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    return (
        <section className="bg-[#0b0c1a] text-white py-20 px-4" id="ContactMe">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
                {/* Email Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-3">Let's connect</h2>
                    <p className="text-gray-400 mb-6">
                        Have an idea, project, or just want to say hi? {" "}
                        <span className="text-purple-400">Let’s start a conversation.</span>.
                    </p>
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center border border-purple-500 text-white px-6 py-2.5 rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Click to Mail <FiSend className="ml-2" />
                    </a>
                    <a
                        onClick={handleCopy}
                        className="inline-flex items-center ml-5 border border-purple-500 text-white px-6 py-2.5 rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        {copied ? "Copied!" : "Copy Mail"} <FiCopy className="ml-2"/>
                    </a>
                </motion.div>

                {/* LinkedIn Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="border-l border-gray-700 pl-6"
                >
                    <div className="mb-2">
                        <div className="p-2 w-fit rounded-md bg-gray-800">
                            <FiLinkedin size={20} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Connect on LinkedIn</h3>
                    <p className="text-gray-400 text-sm mb-2">
                        Explore my professional journey, insights, and latest career updates.
                    </p>
                    <a
                        href="https://linkedin.com/in/chethankumarhl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 text-sm inline-flex items-center hover:underline"
                    >
                        Connect with me <FiSend className="ml-1" size={14} />
                    </a>
                </motion.div>

                {/* GitHub Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="border-l border-gray-700 pl-6"
                >
                    <div className="mb-2">
                        <div className="p-2 w-fit rounded-md bg-gray-800">
                            <FiGithub size={20} />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Check out my GitHub</h3>
                    <p className="text-gray-400 text-sm mb-2">
                        Dive into my codebase — real-world solutions, side projects, and experiments.
                    </p>
                    <a
                        href="https://github.com/chethankumarhl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 text-sm inline-flex items-center hover:underline"
                    >
                        Visit GitHub <FiSend className="ml-1" size={14} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
