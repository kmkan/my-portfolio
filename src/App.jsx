import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Skill Icons - Updated with more accurate logos
const CppIcon = () => <img src="/img/cpp-logo.svg" alt="C++ Logo" className="w-11 h-11" />;
const PythonIcon = () => <img src="/img/python-logo.svg" alt="Python Logo" className="w-11 h-11" />;
const JavaIcon = () => <img src="/img/java-logo.svg" alt="Java Logo" className="w-11 h-11" />;
const JsIcon = () => <img src="/img/javascript-logo.png" alt="JavaScript Logo" className="w-11 h-11" />;
const TsIcon = () => <img src="/img/typescript-logo.svg" alt="TypeScript Logo" className="w-11 h-11" />;
const SqlIcon = () => <img src="/img/sql-logo.svg" alt="SQL Logo" className="w-11 h-11" />;
const HtmlCssIcon = () => <svg className="w-11 h-11" viewBox="0 0 24 24"><path fill="#E34F26" d="M1.6 21.4l1.8-20.4h8.6V21.9z"/><path fill="#1572B6" d="M22.4 21.4l-1.8-20.4h-8.6V21.9z"/><path fill="#F16529" d="M12 19.9V3.6h8.6l-1.5 16.3z"/><path fill="#33A9DC" d="M12 19.9V3.6H3.4l1.5 16.3z"/></svg>;
const CudaIcon = () => <img src="/img/cuda-logo.svg" alt="CUDA Logo" className="w-11 h-11" />;
const ReactIcon = () => <svg className="w-11 h-11" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>;
const NodeIcon = () => <img src="/img/nodejs-logo.svg" alt="Node.js Logo" className="w-11 h-11" />;
const ExpressIcon = () => <img src="/img/expressjs-logo.svg" alt="Express.js Logo" className="w-11 h-11" />;
const TensorFlowIcon = () => <img src="/img/tensorflow-logo.svg" alt="TensorFlow Logo" className="w-11 h-11" />;
const OpenCvIcon = () => <svg className="w-11 h-11" viewBox="0 0 260 260"><circle cx="130" cy="130" r="120" fill="none" stroke="#000" strokeWidth="10"/><circle cx="75" cy="100" r="30" fill="#F00"/><circle cx="185" cy="100" r="30" fill="#0F0"/><circle cx="130" cy="190" r="30" fill="#00F"/></svg>;
const ThreeJsIcon = () => <img src="/img/threejs-logo.svg" alt="three.js Logo" className="w-11 h-11" />;
const ScikitLearnIcon = () => <svg className="w-11 h-11" viewBox="0 0 24 24"><circle cx="17" cy="7" r="5" fill="#F7931E"/><path fill="#3CB5E9" d="M12.5 12.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0z"/></svg>;
const AwsIcon = () => <img src="/img/aws-logo.svg" alt="AWS Logo" className="w-11 h-11" />;
const DockerIcon = () => <img src="/img/docker-logo.svg" alt="Docker Logo" className="w-11 h-11" />;
const GitIcon = () => <img src="/img/git-logo.svg" alt="Git Logo" className="w-11 h-11" />;
const CiCdIcon = () => <svg className="w-11 h-11" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#4A4A4A" strokeWidth="2"/><path fill="#4A4A4A" d="M12 6v12m-4-8l4-4 4 4m-4 8l-4-4h8z"/></svg>;
const VercelIcon = () => <svg className="w-11 h-11" viewBox="0 0 24 24"><path fill="#000000" d="M12 2L2 22h20L12 2z"/></svg>;
const PostgreSqlIcon = () => <img src="/img/postgresql-logo.svg" alt="PostgreSQL Logo" className="w-11 h-11" />;

// Main Icons
const LinkedInIcon = ({ size = 35, color = "currentColor" }) => (
    <i className="fa fa-linkedin" style={{ fontSize: `${size}px`, color: color }}></i>
);

const GitHubIcon = ({ size = 35, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill={color}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
);

const YouTubeIcon = ({ size = 35, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const UpArrowFAIcon = () => (
    <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
);

const ProjectCard = ({ videoUrl, title }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = (y / height - 0.5) * -6.75;
        const rotateY = (x / width - 0.5) * 6.75;
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.0225, 1.0225, 1.0225)`;
    };

    const handleMouseLeave = () => {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    const isVideo = videoUrl.includes('youtube.com/embed');

    return (
        <div 
            ref={cardRef} 
            className="h-[25.5rem] bg-black rounded-lg overflow-hidden shadow-xl transition-transform duration-200 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {isVideo ? (
                <iframe 
                    src={videoUrl}
                    title={title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                ></iframe>
            ) : (
                <img src={videoUrl} alt={title} className="w-full h-full object-cover" />
            )}
        </div>
    );
};

const Toast = ({ message, type, show, onClose }) => {
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    const icon = type === 'success' ? (
        <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    ) : (
        <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    );

    return (
        <div className={`fixed top-5 right-5 z-50 transform transition-all duration-500 ease-in-out ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className={`${bgColor} text-white font-bold rounded-lg shadow-2xl flex items-center p-4`}>
                {icon}
                <span className="flex-grow">{message}</span>
                <button onClick={onClose} className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
    );
};

const AnimatedSection = ({ children, animationClass }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={`transition-all duration-1000 ${inView ? animationClass : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );
};

const App = () => {
    const [hoveredLayer, setHoveredLayer] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [toast, setToast] = useState({ message: '', type: 'success', show: false });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    
    const toastTimer = useRef(null);

    useEffect(() => {
        const timer1 = setTimeout(() => setHeaderVisible(true), 300);
        const timer2 = setTimeout(() => setNavVisible(true), 600);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const showToast = (message, type) => {
        clearTimeout(toastTimer.current);
        setToast({ message, type, show: true });
        toastTimer.current = setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 4000);
    };

    const handleCloseToast = () => {
        clearTimeout(toastTimer.current);
        setToast({ ...toast, show: false });
    };

    const skillsData = {
        top: {
            title: 'Libraries & Frameworks',
            skills: [
                { name: 'React', icon: <ReactIcon /> },
                { name: 'Node.js', icon: <NodeIcon /> },
                { name: 'Express', icon: <ExpressIcon /> },
                { name: 'TensorFlow', icon: <TensorFlowIcon /> },
                { name: 'OpenCV', icon: <OpenCvIcon /> },
                { name: 'three.js', icon: <ThreeJsIcon /> },
                { name: 'Scikit-learn', icon: <ScikitLearnIcon /> }
            ],
            image: '/img/top_layer_coloured.png'
        },
        middle: {
            title: 'Languages',
            skills: [
                { name: 'C++', icon: <CppIcon /> },
                { name: 'Python', icon: <PythonIcon /> },
                { name: 'Java', icon: <JavaIcon /> },
                { name: 'JavaScript', icon: <JsIcon /> },
                { name: 'TypeScript', icon: <TsIcon /> },
                { name: 'SQL', icon: <SqlIcon /> },
                { name: 'HTML/CSS', icon: <HtmlCssIcon /> },
                { name: 'CUDA', icon: <CudaIcon /> }
            ],
            image: '/img/middle_layer_coloured.png'
        },
        bottom: {
            title: 'Cloud & DevOps',
            skills: [
                { name: 'AWS', icon: <AwsIcon /> },
                { name: 'Docker', icon: <DockerIcon /> },
                { name: 'Git', icon: <GitIcon /> },
                { name: 'CI/CD', icon: <CiCdIcon /> },
                { name: 'Vercel', icon: <VercelIcon /> },
                { name: 'PostgreSQL', icon: <PostgreSqlIcon /> }
            ],
            image: '/img/bottom_layer_coloured.png'
        }
    };

    const projects = [
        {
            title: 'C++ Neural Network Library',
            description: 'A foundational neural network library built from the ground up in C++ for creating, training, and evaluating custom models. Features a modular, object-oriented design implementing core algorithms like backpropagation, demonstrated by successfully classifying digits from the MNIST dataset with high accuracy.',
            tags: ['C++', 'Neural Network', 'Machine Learning', 'OOP'],
            liveUrl: 'https://youtu.be/eK-QJNFXfKI?si=taj68t4y9Il98T2W&t=69',
            codeUrl: 'https://github.com/kmkan/cpp-neural-network-library',
            videoUrl: 'https://www.youtube.com/embed/eK-QJNFXfKI?start=69&si=taj68t4y9Il98T2W'
        },
        {
            title: "Rubik's Cube App",
            description: "An interactive 3D Rubik's Cube web application built from the ground up using React. Features a fully playable 3D model with comprehensive keyboard controls for standard, slice, and wide moves. Leverages Three.js with react-three-fiber for declarative 3D rendering and GSAP for smooth, responsive turn animations, all managed by a robust custom state system.",
            tags: ['React', 'Three.js', 'react-three-fiber', 'GSAP'],
            note: "Make sure to read the instructions in the top left of the application in order to utilize the Rubik's Cube.",
            liveUrl: 'https://rubiks-cube-app-30kf.onrender.com/',
            codeUrl: 'https://github.com/kmkan/rubiks-cube-app',
            videoUrl: '/img/rubiks-cube-app.png'
        },
        {
            title: 'Documentify',
            description: 'A real-time collaborative document editor built from the ground up with the MERN stack (MongoDB, Express, React, Node.js). Leverages Socket.IO for instant, multi-user document synchronization and a live online user count. Features a minimalist interface where users can instantly create or join document rooms, with an intelligent debounced auto-save function to efficiently persist changes to the database. The application is architected with a full-stack design, utilizing a RESTful API for room management and a WebSocket layer for seamless collaborative editing.',
            tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'REST API'],
            liveUrl: 'https://documentify.vercel.app/',
            codeUrl: 'https://github.com/kmkan/documentify',
            videoUrl: '/img/documentify.png'
        },
    ];
    
    const socialLinks = [
        { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/kandpalk' },
        { icon: <GitHubIcon />, url: 'https://github.com/kmkan' },
        { icon: <YouTubeIcon />, url: 'https://www.youtube.com/@Kamal_Kandpal' },
    ];

    const footerSocialLinks = [
        { icon: <LinkedInIcon size={32} color="white" />, url: 'https://www.linkedin.com/in/kandpalk' },
        { icon: <GitHubIcon size={32} color="white" />, url: 'https://github.com/kmkan' },
        { icon: <YouTubeIcon size={32} color="white" />, url: 'https://www.youtube.com/@Kamal_Kandpal' },
    ];

    const homeNavButtons = [
        { id: 'skills', text: 'Skills' },
        { id: 'projects', text: 'Projects' },
        { id: 'contact', text: 'Contact' },
    ];

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            showToast('Please fill out all fields.', 'error');
            return;
        }

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                showToast('Message sent successfully!', 'success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                showToast(data.msg || 'Something went wrong.', 'error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            showToast('Could not connect to the server.', 'error');
        }
    };

    const tealColor = '#02aab0';

    return (
        <>
            {/* Google Font & Font Awesome Import */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
                    @keyframes fadeInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
                    @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
                    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                    .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
                    .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
                    .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
                `}
            </style>
            <div className="bg-white text-black antialiased relative overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <Toast message={toast.message} type={toast.type} show={toast.show} onClose={handleCloseToast} />
                
                {/* Header Icons */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-50">
                    <div className="hidden md:flex items-center space-x-12">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{color: tealColor}} className="transition-transform duration-300 hover:-translate-y-1">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} style={{color: tealColor}}>
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 flex justify-end">
                         <button onClick={() => setIsMenuOpen(false)} style={{color: tealColor}}>
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-8 mt-8">
                        {socialLinks.map((social, index) => (
                             <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" style={{color: tealColor}} className="transition-transform duration-300 hover:-translate-y-1 text-2xl">
                                {social.icon}
                            </a>
                        ))}
                    </nav>
                </div>
                {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>}


                <main className="z-10 relative">
                    {/* Home Section */}
                    <section id="home" className="min-h-screen flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
                        <div className="text-left w-full max-w-5xl">
                            <div className={`transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                                <h1 className="font-bold text-gray-900 leading-none" style={{ fontSize: '4rem' }}>
                                    Hi, I'm <span style={{color: tealColor}}>Kamal.</span>
                                </h1>
                                <h2 className="font-bold text-gray-800 leading-tight" style={{ fontSize: '4rem' }}>
                                    I'm a software developer.
                                </h2>
                            </div>
                            <div className={`mt-8 flex flex-wrap transition-opacity duration-700 ease-out delay-300 ${navVisible ? 'opacity-100' : 'opacity-0'}`}>
                                {homeNavButtons.map((button, index) => (
                                    <a
                                        key={button.id}
                                        href={`#${button.id}`}
                                        onClick={(e) => handleScroll(e, button.id)}
                                        className={`group relative inline-block px-4 py-2 border-y-2 border-r-2 font-bold text-xl md:text-2xl tracking-wider overflow-hidden ${index === 0 ? 'border-l-2' : '-ml-px'}`}
                                        style={{borderColor: tealColor, color: tealColor}}
                                    >
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-200 ease-in-out">{button.text}</span>
                                        <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-in-out" style={{backgroundColor: tealColor}}></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <AnimatedSection animationClass="animate-fadeInUp">
                        <section id="skills" className="relative overflow-hidden" style={{paddingTop: '5rem', paddingBottom: '8rem'}}>
                           <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(135deg, #02aab0, #00cdac)', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}></div>
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">My Skills</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div className="relative w-full max-w-md mx-auto" onMouseLeave={() => setHoveredLayer(null)}>
                                        <img src="/img/black_white_cube.png" alt="Rubik's Cube Black and White" className="w-full h-auto" />
                                        {Object.keys(skillsData).map(layer => (
                                            <img 
                                                key={layer}
                                                src={skillsData[layer].image}
                                                alt={`${layer} layer colored`}
                                                className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-300 ${hoveredLayer === layer ? 'opacity-100' : 'opacity-0'}`}
                                            />
                                        ))}
                                        <div className="absolute top-0 left-0 w-full h-1/3 cursor-pointer" onMouseEnter={() => setHoveredLayer('top')}></div>
                                        <div className="absolute top-1/3 left-0 w-full h-1/3 cursor-pointer" onMouseEnter={() => setHoveredLayer('middle')}></div>
                                        <div className="absolute top-2/3 left-0 w-full h-1/3 cursor-pointer" onMouseEnter={() => setHoveredLayer('bottom')}></div>
                                    </div>
                                    <div className="min-h-[250px] flex flex-col justify-center items-center pt-8">
                                        {hoveredLayer ? (
                                            <div key={hoveredLayer} className="w-full text-center p-8 animate-fadeInRight">
                                                <h3 className="text-3xl font-normal text-white mb-6">{skillsData[hoveredLayer].title}</h3>
                                                <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
                                                    {skillsData[hoveredLayer].skills.map(skill => (
                                                         <div key={skill.name} className="flex flex-col items-center justify-start text-center">
                                                            {skill.icon}
                                                            <span className="text-lg text-white mt-2">{skill.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-8 text-center">
                                                <p className="text-3xl text-white">"Apps are like Rubik's Cubes. They've got layers."</p>
                                                <p className="text-xl text-white mt-4">Select a layer on the cube to show stack skills.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>

                    {/* Projects Section */}
                     <section id="projects" className="py-16 md:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <AnimatedSection animationClass="animate-fadeInUp">
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">PROJECTS</h2>
                                </div>
                            </AnimatedSection>
                            <div className="space-y-24">
                                {projects.map((project, index) => (
                                     <AnimatedSection key={index} animationClass={index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'}>
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                                            <div className={`md:col-span-2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} style={{ backgroundColor: 'rgba(67, 85, 82, .576471)' }} className="text-white text-sm font-semibold px-3 py-1 border border-black">{tag}</span>
                                                    ))}
                                                </div>
                                                {project.collaborators && <p className="text-gray-600 mb-4"><span className="font-bold">Collaborators:</span> {project.collaborators}</p>}
                                                <p className="text-gray-700 mb-4 text-lg">{project.description}</p>
                                                {project.note && <p className="text-sm text-black italic mb-3">{project.note}</p>}
                                                <div className="flex">
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-block px-3 py-1.5 border-y-2 border-r-2 border-l-2 font-bold text-lg tracking-wider overflow-hidden" style={{borderColor: tealColor, color: tealColor}}>
                                                        <span className="relative z-10 group-hover:text-white transition-colors duration-200 ease-in-out">See Live</span>
                                                        <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-in-out" style={{backgroundColor: tealColor}}></span>
                                                    </a>
                                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-block px-3 py-1.5 border-y-2 border-r-2 font-bold text-lg tracking-wider overflow-hidden -ml-px" style={{borderColor: tealColor, color: tealColor}}>
                                                        <span className="relative z-10 group-hover:text-white transition-colors duration-200 ease-in-out">Source Code</span>
                                                        <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-in-out" style={{backgroundColor: tealColor}}></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`md:col-span-3 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                                <ProjectCard videoUrl={project.videoUrl} title={project.title} />
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* Contact Section */}
                    <AnimatedSection animationClass="animate-fadeInUp">
                        <section id="contact" className="py-16 md:py-28">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">CONTACT</h2>
                                </div>
                                <div className="max-w-4xl mx-auto">
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleFormChange} className="w-full bg-transparent border-2 border-gray-300 rounded-md py-2 px-4 text-lg font-normal placeholder-gray-500 focus:outline-none focus:border-teal-500" />
                                        </div>
                                        <div>
                                            <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleFormChange} className="w-full bg-transparent border-2 border-gray-300 rounded-md py-2 px-4 text-lg font-normal placeholder-gray-500 focus:outline-none focus:border-teal-500" />
                                        </div>
                                        <div>
                                            <textarea name="message" id="message" rows="5" placeholder="Message" value={formData.message} onChange={handleFormChange} className="w-full bg-transparent border-2 border-gray-300 rounded-md py-2 px-4 text-lg font-normal placeholder-gray-500 focus:outline-none focus:border-teal-500"></textarea>
                                        </div>
                                        <div className="text-center pt-0">
                                            <button type="submit" className="group relative inline-block px-4 py-2 border-2 text-xl md:text-2xl font-bold tracking-wider overflow-hidden" style={{borderColor: tealColor, color: tealColor}}>
                                                <span className="relative z-10 group-hover:text-white transition-colors duration-200 ease-in-out">Send</span>
                                                <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-in-out" style={{backgroundColor: tealColor}}></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </AnimatedSection>
                </main>

                {/* Footer */}
                <footer style={{ backgroundColor: '#333' }} className="text-white">
                    <div className="max-w-7xl mx-auto pt-16 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="mb-10 transition-transform duration-300 hover:-translate-y-1">
                            <UpArrowFAIcon />
                        </a>
                        <div className="flex items-center space-x-12">
                             {footerSocialLinks.map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:-translate-y-1">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default App;