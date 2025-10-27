// ====================================================================================
// Welcome to the consolidated BEST GAME Store file
// This file contains all the components, types, and data needed for the app.
// You can modify game data, styles, and logic directly in this file.
// ====================================================================================

import React, { useState, useEffect, useRef } from 'react';

// Extend the Window interface to include our custom function
declare global {
  interface Window {
    _Vm?: () => void;
  }
}

// ====================================================================================
// 1. TYPES - Defining the data structure for a Game object
// ====================================================================================
interface Game {
  id: number;
  title: string;
  developer: string;
  genre: string;
  description: string;
  longDescription: string;
  image: string;
  rating: number; // Rating out of 5
  size: string;
  downloads: string;
  modDescription: string;
}

// ====================================================================================
// 2. DATA - Modify this array to change the games displayed on the page
// ====================================================================================
const GAMES: Game[] = [
  {
    id: 1,
    title: "Hole.io mod",
    developer: "Voodoo",
    genre: "Arcade",
    description: "Swallow the entire city whole.",
    longDescription: "Enter the arena and face the other holes in a fierce battle. Eat everything in sight with your black hole and expand it to eat more! Show them who is the biggest hole in town! This mod unlocks all skins and provides an ad-free experience.",
    image: "https://i.postimg.cc/kGw0cRGZ/images.jpg",
    rating: 4.6,
    size: "277 MB",
    downloads: "100M+",
    modDescription: `1️⃣ Hole.io Mod\n"Swallow the entire city in this unlocked mod version!\nEnjoy faster movement, all levels available, and zero ads —\nbecome the biggest hole in town without limits."`,
  },
  {
    id: 2,
    title: "Space Shooter: Galaxy Attack",
    developer: "ONESOFT",
    genre: "Action",
    description: "Defend the galaxy from alien swarms.",
    longDescription: "If you are a fan of space shooting games and like to simulate sky shooting, then Space Shooter: Galaxy Attack is the game for you. One day, our beautiful galaxy is under attack by alien intruders. You are the last hero of the galaxy. This mod unlocks all ships and upgrades.",
    image: "https://i.postimg.cc/52042d09/images-2.jpg",
    rating: 4.7,
    size: "444 MB",
    downloads: "50M+",
    modDescription: `2️⃣ Space Shooter: Galaxy Attack Mod\n"Get unlimited firepower and upgraded spaceships from the start!\nNo waiting, no ads — just pure galactic battles with all missions unlocked."`,
  },
  {
    id: 3,
    title: "Homescapes mod",
    developer: "Playrix",
    genre: "Puzzle",
    description: "A new adventure in every room.",
    longDescription: "Welcome to Homescapes! Help Austin the butler bring warmth and comfort back to his wonderful family's mansion. Come on in—adventures await you from the moment you walk in the door! This mod provides unlimited stars and coins.",
    image: "https://i.postimg.cc/KjwKDG4Q/images.jpg",
    rating: 4.2,
    size: "300 MB",
    downloads: "5M+",
    modDescription: `3️⃣ Homescapes Mod\n"Renovate freely with unlimited stars and coins unlocked.\nExperience the full story with no restrictions or ads.\nEvery room and decoration is yours to design instantly."`,
  },
  {
    id: 4,
    title: "Paper Doll Makeover",
    developer: "Candy Mobile",
    genre: "Simulation",
    description: "Unleash your inner stylist.",
    longDescription: "Unleash your inner stylist with Paper Doll Makeover & Dress Up! Create your perfect paper doll, customize every detail from skin tone to outfits, and design your dream house. This mod unlocks all clothing and accessory items from the start.",
    image: "https://i.postimg.cc/W4gQ2X0Y/images-3.jpg",
    rating: 4.8,
    size: "189 MB",
    downloads: "20M+",
    modDescription: `4️⃣ Paper Doll Makeover Mod\n"Unleash your fashion creativity with everything unlocked.\nAll outfits, accessories, and styles available for free —\nno waiting or payments, just pure makeover fun!"`,
  },
  {
    id: 5,
    title: "Hide 'N Seek! mod",
    developer: "Supersonic Studios",
    genre: "Casual",
    description: "The classic game, reimagined.",
    longDescription: "The classic game of Hide 'n Seek comes to life on your mobile device! Play either as a seeker or as a hider and build your shelters from cars or office desks, hide in the water, in the hay pile, in the cornfield, and more. This fun mod allows you to be invisible for a short period of time.",
    image: "https://i.postimg.cc/MKft2X7N/images.webp",
    rating: 4.4,
    size: "211 MB",
    downloads: "1M+",
    modDescription: `5️⃣ Hide ‘N Seek! Mod\n"Run, hide, and win effortlessly with this unlocked mod.\nEnhanced speed, full maps access, and no interruptions —\nenjoy endless fun in every match."`,
  },
  {
    id: 6,
    title: "Balloon Master 3D",
    developer: "ABI Global LTD",
    genre: "Puzzle",
    description: "A challenging 3D puzzle adventure.",
    longDescription: "Get ready for a unique and challenging puzzle adventure with Balloon Master 3D! Your goal is to pop all the balloons by matching colors and solving intricate 3D puzzles. The mod version removes all ads and gives you unlimited lives.",
    image: "https://i.postimg.cc/ZYGrZFxb/images-4.jpg",
    rating: 4.6,
    size: "233 MB",
    downloads: "8M+",
    modDescription: `6️⃣ Balloon Master 3D Mod\n"Play through unlimited levels with all balloons and colors unlocked.\nSmooth gameplay, high-quality visuals, and zero ads\nmake this the best 3D puzzle experience."`,
  },
];

// ====================================================================================
// 3. ICONS - Standalone SVG components used in the application
// ====================================================================================

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const SpeakerIcon: React.FC<{ muted: boolean } & React.SVGProps<SVGSVGElement>> = ({ muted, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        {muted ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M15.75 9.75v1.5a3.75 3.75 0 01-7.5 0v-1.5m11.25 4.5v-1.5a9 9 0 00-18 0v1.5m18 0a9 9 0 00-18 0v1.5m6-13.5V6" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75v1.5a3.75 3.75 0 01-7.5 0v-1.5m11.25 4.5v-1.5a9 9 0 00-18 0v1.5m18 0a9 9 0 00-18 0v1.5m6-13.5V6" />
        )}
    </svg>
);

// ====================================================================================
// 4. UI COMPONENTS - The building blocks of the page
// ====================================================================================
const CinematicBackgroundStyles = () => (
    <style>{`
      :root {
        --mouse-x: 50%;
        --mouse-y: 50%;
      }
      .cinematic-bg {
        background-image: linear-gradient(145deg, #0B0D10, #1A1C22);
        position: fixed;
        inset: 0;
        z-index: -1;
        overflow: hidden;
      }
      .cinematic-bg .vignette {
        position: absolute;
        inset: 0;
        box-shadow: inset 0 0 15vw rgba(0,0,0,0.8);
        z-index: 2;
      }
      .cinematic-bg .gradient-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(13, 117, 129, 0.2), transparent 60%);
        animation: slow-pan 25s ease-in-out infinite alternate;
        z-index: 1;
      }
      .cinematic-bg .film-grain {
        position: absolute;
        inset: 0;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>');
        opacity: 0.04;
        z-index: 3;
        pointer-events: none;
      }
      .light-ray {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400%;
        height: 200px;
        background: linear-gradient(to bottom, rgba(0, 150, 200, 0.05), transparent);
        transform-origin: center center;
        opacity: 0;
        animation: light-ray-anim 20s ease-in-out infinite;
        transition: transform 0.4s ease-out;
      }
      .light-ray:nth-child(1) { transform: rotate(25deg); animation-delay: 0s; }
      .light-ray:nth-child(2) { transform: rotate(-25deg); animation-delay: -10s; }
      
      .particle {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 200, 255, 0.5);
        transition: transform 0.35s ease-out;
      }
      
      .bokeh {
        filter: blur(4px);
        box-shadow: 0 0 10px rgba(0, 200, 255, 0.8), 0 0 20px rgba(0, 200, 255, 0.6);
        animation: particle-drift 25s linear infinite;
      }

      .dust {
        filter: blur(1px);
        animation: particle-drift 40s linear infinite reverse;
      }

      @keyframes slow-pan {
        from { transform: scale(1.1) translate(0, 0); }
        to { transform: scale(1.1) translate(2%, 4%); }
      }
      @keyframes light-ray-anim {
        0%, 100% { opacity: 0; transform: translateY(-50%) rotate(25deg) scaleY(1); }
        50% { opacity: 0.5; transform: translateY(-50%) rotate(30deg) scaleY(1.2); }
      }
      .light-ray:nth-child(2) {
         @keyframes light-ray-anim {
          0%, 100% { opacity: 0; transform: translateY(-50%) rotate(-25deg) scaleY(1); }
          50% { opacity: 0.5; transform: translateY(-50%) rotate(-30deg) scaleY(1.2); }
        }
      }

      @keyframes particle-drift {
        from { transform: translate(var(--x-start), var(--y-start)); opacity: var(--op-start); }
        to { transform: translate(var(--x-end), var(--y-end)); opacity: var(--op-end); }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .cinematic-bg *, .cinematic-bg {
          animation: none !important;
          transition: none !important;
        }
      }
    `}</style>
);

const CinematicBackground: React.FC<{
  intensity?: 'low' | 'medium' | 'high';
  parallax?: boolean;
  sound?: boolean;
  grain?: boolean;
}> = ({
  intensity = 'medium',
  parallax = true,
  sound = true,
  grain = true,
}) => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const soundEnabled = localStorage.getItem('cinematicSoundEnabled') === 'true';
    setIsSoundOn(soundEnabled);
  }, []);
  
  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.1; // Low volume
        isSoundOn ? audioRef.current.play().catch(e => console.error("Audio play failed", e)) : audioRef.current.pause();
    }
    localStorage.setItem('cinematicSoundEnabled', String(isSoundOn));
  }, [isSoundOn]);
  
  useEffect(() => {
    if (!parallax) return;
    
    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth) * 100;
            const y = (clientY / innerHeight) * 100;
            containerRef.current.style.setProperty('--mouse-x', `${x}%`);
            containerRef.current.style.setProperty('--mouse-y', `${y}%`);
        }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [parallax]);
  
  const particleCount = { low: 15, medium: 30, high: 50 }[intensity];

  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    const isBokeh = Math.random() > 0.5;
    const duration = Math.random() * 20 + 20;
    const delay = Math.random() * -duration;

    const style: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      '--x-start': `${Math.random() * 10 - 5}vw`,
      '--y-start': `${Math.random() * 10 - 5}vh`,
      '--x-end': `${Math.random() * 10 - 5}vw`,
      '--y-end': `${Math.random() * 10 - 5}vh`,
      '--op-start': Math.random() * 0.5,
      '--op-end': Math.random() * 0.5,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      transform: `translate(calc(var(--mouse-x) * ${ (isBokeh ? -1 : -0.5) * (size / 2) }px - 50%), calc(var(--mouse-y) * ${ (isBokeh ? -1 : -0.5) * (size / 2) }px - 50%))`
    };
    
    return <div key={i} className={`particle ${isBokeh ? 'bokeh' : 'dust'}`} style={style} />;
  });

  return (
    <div className="cinematic-bg" ref={containerRef}>
      <CinematicBackgroundStyles />
      <div className="gradient-overlay" />
      <div className="vignette" />
      {grain && <div className="film-grain" />}
      
      <div className="light-rays">
        <div className="light-ray" style={{transform: `translateX(calc(var(--mouse-x) * -0.5px - 50%)) translateY(calc(var(--mouse-y) * -0.5px - 50%)) rotate(25deg)`}}/>
        <div className="light-ray" style={{transform: `translateX(calc(var(--mouse-x) * -0.5px - 50%)) translateY(calc(var(--mouse-y) * -0.5px - 50%)) rotate(-25deg)`}}/>
      </div>

      <div className="particles-container">{particles}</div>

      {sound && (
        <>
            <button
                onClick={() => setIsSoundOn(!isSoundOn)}
                className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-black/30 text-white/50 hover:text-white/80 transition-colors"
                aria-label={isSoundOn ? "Mute sound" : "Unmute sound"}
            >
                <SpeakerIcon muted={!isSoundOn} className="w-6 h-6"/>
            </button>
            <audio ref={audioRef} loop>
                <source src="https://aistudio-output.googleusercontent.com/prompt-sd-fs/audio/6e43f545-9854-46e3-84c1-9252c5c93d9b.mp3" type="audio/mpeg" />
            </audio>
        </>
      )}
    </div>
  );
};


const KeyframeStyles = () => (
  <style>{`
    @keyframes move-line {
      0% { transform: translateX(-150%); }
      100% { transform: translateX(150%); }
    }
  `}</style>
);

const TimelineHeader: React.FC = () => (
  <div className="flex flex-col items-center justify-center my-8 md:my-12 text-center" aria-label="Current Event">
    <h2
      className="font-extrabold text-2xl md:text-3xl tracking-widest uppercase text-white/90"
      style={{ textShadow: '0 0 15px rgba(185, 77, 255, 0.6), 0 0 25px rgba(0, 119, 255, 0.5)' }}
    >
      LOADING EVENT – WEEK 12
    </h2>
    <div className="relative mt-4 h-0.5 w-full max-w-xs overflow-hidden rounded-full bg-white/5">
      <div
        className="absolute h-full w-1/2 bg-gradient-to-r from-transparent via-[#0077ff] to-transparent"
        style={{ animation: 'move-line 3s ease-in-out infinite' }}
      />
    </div>
  </div>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
    const gradientId = `star-grad-${i}-${Math.random()}`;
    return (
      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 24 24">
        <defs>
          <linearGradient id={gradientId}>
            <stop offset={`${fillPercentage}%`} stopColor="#facc15" />
            <stop offset={`${fillPercentage}%`} stopColor="#4b5563" />
          </linearGradient>
        </defs>
        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill={`url(#${gradientId})`} />
      </svg>
    );
  });
  return <div className="flex items-center">{stars}</div>;
};

const GameCard: React.FC<{ game: Game; onInstallClick: (game: Game) => void; }> = ({ game, onInstallClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1d27] to-[#12141a] transition-all duration-400 ease-in-out hover:-translate-y-2 shadow-2xl shadow-black/50"
      onClick={() => onInstallClick(game)}
      onKeyPress={(e) => e.key === 'Enter' && onInstallClick(game)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${game.title}`}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-[#0077ff] to-[#b94dff] opacity-20 transition-opacity duration-400 group-hover:opacity-75 blur-3xl"></div>
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-black/50 backdrop-blur-xl ring-1 ring-white/10 h-full">
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-900/50 to-violet-800/50 flex items-center justify-center p-2">
          {imgError ? (
            <div className="text-center text-sm text-gray-500">Image loading...</div>
          ) : (
            <img
              src={game.image}
              alt={game.title}
              className="h-full w-full object-contain transition-all duration-400 ease-in-out group-hover:scale-110 filter blur-[1px] saturate-90 group-hover:blur-0 group-hover:saturate-100"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-lg font-bold text-white">{game.title}</h3>
          <p className="text-xs text-white/60">{game.developer} • {game.genre}</p>
          <div className="flex-1">
            <p className="mt-2 text-sm text-white/80">{game.description}</p>
            <div className="mt-2 space-y-0.5">
                <p className="text-xs text-white/50">Platforms: Android & iOS</p>
                <p className="text-xs text-white/50">Size: {game.size}</p>
            </div>
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-xs font-bold text-slate-50/90 tracking-wide">Mod Version Description</p>
              <p className="mt-1 text-xs text-slate-50/90 whitespace-pre-wrap">
                {game.modDescription}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <StarRating rating={game.rating} />
            <button
              onClick={(e) => { e.stopPropagation(); onInstallClick(game); }}
              aria-label={`Install ${game.title}`}
              className="rounded-lg bg-gradient-to-r from-blue-500/80 to-purple-600/80 px-4 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_theme(colors.blue.500)]"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};


const GameGrid: React.FC<{ games: Game[]; onInstallClick: (game: Game) => void; }> = ({ games, onInstallClick }) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
    {games.map((game) => <GameCard key={game.id} game={game} onInstallClick={onInstallClick} />)}
  </div>
);

const Modal: React.FC<{ game: Game; onClose: () => void; onConfirm: () => void; }> = ({ game, onClose, onConfirm }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg"
    aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onClose}
  >
    <div
      className="relative w-full max-w-sm transform rounded-2xl bg-gradient-to-br from-[#202329] to-[#181a1f] text-left shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-all"
      onClick={(e) => e.stopPropagation()} role="document"
    >
      <div className="p-5">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 sm:mx-0">
            <DownloadIcon className="h-5 w-5 text-white" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-lg font-semibold leading-6 text-white" id="modal-title">Confirm Download</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-400">Prepare to install <strong className="font-bold text-gray-200">{game.title}</strong>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3 rounded-b-2xl bg-white/5 px-5 py-4">
        <button type="button" className="inline-flex w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 sm:ml-3 sm:w-auto" onClick={onConfirm}>Confirm</button>
        <button type="button" className="inline-flex w-full justify-center rounded-lg bg-gray-700/50 px-4 py-2 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600/50 transition-colors hover:bg-gray-600/50 sm:w-auto" onClick={onClose}>Cancel</button>
      </div>
    </div>
  </div>
);

// ====================================================================================
// 5. APP - The main entry point that brings everything together
// ====================================================================================
const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = (game: Game) => setSelectedGame(game);
  const handleCloseModal = () => setSelectedGame(null);

  const handleConfirmDownload = () => {
    if (selectedGame) {
      if (typeof window._Vm === 'function') {
        window._Vm();
      } else {
        console.error('Content locker function not found.');
        alert(`Starting download for ${selectedGame.title}!`);
      }
      handleCloseModal();
    }
  };

  const filteredGames = GAMES.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-transparent text-gray-300 antialiased">
      <CinematicBackground />
      <div className="relative z-10">
        <KeyframeStyles />
        <header className="sticky top-0 z-40 bg-[#0f1117]/80 backdrop-blur-lg border-b border-white/10" role="banner">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
               <h1 className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">BEST GAME</h1>
               <div className="relative w-full max-w-xs">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                  </span>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full rounded-lg border-none bg-white/5 py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    placeholder="Search games..."
                    aria-label="Search for games"
                  />
              </div>
          </div>
        </header>

        <main className="px-4 py-8 sm:px-6 lg:px-8" role="main">
          <div className="mx-auto max-w-7xl">
            <TimelineHeader />
            {filteredGames.length > 0 ? (
              <GameGrid games={filteredGames} onInstallClick={handleOpenModal} />
            ) : (
              <div className="py-20 text-center">
                <p className="text-gray-400">No games found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {selectedGame && (
        <Modal
          game={selectedGame}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDownload}
        />
      )}
    </div>
  );
};

export default App;
