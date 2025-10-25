// ====================================================================================
// Welcome to the consolidated BEST GAME Store file
// This file contains all the components, types, and data needed for the app.
// You can modify game data, styles, and logic directly in this file.
// ====================================================================================

import React, { useState, useEffect } from 'react';

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
  description: string;
  longDescription: string;
  image: string;
  rating: number; // Rating out of 5
  size: string;
  downloads: string;
}

// ====================================================================================
// 2. DATA - Modify this array to change the games displayed on the page
// ====================================================================================
const GAMES: Game[] = [
  {
    id: 1,
    title: "Fishing Clash mod",
    description: "The most realistic fishing game.",
    longDescription: "Experience the thrill of sport fishing in Fishing Clash, a free fishing game available for mobile devices! If you enjoy realistic simulators, look no further. This mod version gives you access to unlimited resources to catch the biggest fish in stunning 3D-rendered locations across North America.",
    image: "https://i.postimg.cc/BZR6gWDk/download-1.jpg",
    rating: 4.5,
    size: "209 MB",
    downloads: "10M+",
  },
  {
    id: 2,
    title: "Space shooter-galaxy attack mod",
    description: "Defend the galaxy from aliens.",
    longDescription: "If you are a fan of space shooting games and like to simulate sky shooting, then Space Shooter: Galaxy Attack is the game for you. One day, our beautiful galaxy is under attack by alien intruders. You are the last hero of the galaxy. Your goal will be quite challenging as you will have to save the galaxy from its evil enemies. This mod unlocks all ships and upgrades.",
    image: "https://i.postimg.cc/tRwDyT0c/images.jpg",
    rating: 4.7,
    size: "399 MB",
    downloads: "50M+",
  },
  {
    id: 3,
    title: "Homescapes mod",
    description: "A new adventure in every room.",
    longDescription: "Welcome to Homescapes! Help Austin the butler bring warmth and comfort back to his wonderful family's mansion. Come on in—adventures await you from the moment you walk in the door! Beat colorful match-3 levels to renovate and decorate rooms in the mansion, unlocking ever more chapters in the exciting family story along the way! This mod provides unlimited stars and coins.",
    image: "https://i.postimg.cc/nhBQ7FP0/download-3.jpg",
    rating: 4.2,
    size: "444 MB",
    downloads: "5M+",
  },
  {
    id: 4,
    title: "Paper doll makeover&dress up mod",
    description: "Unleash your inner stylist.",
    longDescription: "Unleash your inner stylist with Paper Doll Makeover & Dress Up! Create your perfect paper doll, customize every detail from skin tone to outfits, and design your dream house. Dive into a world of fashion and creativity, make choices that shape your doll's story, and enjoy endless dress-up fun. This mod unlocks all clothing and accessory items from the start.",
    image: "https://i.postimg.cc/1RGTWwN1/download-2.jpg",
    rating: 4.8,
    size: "197 MB",
    downloads: "20M+",
  },
  {
    id: 5,
    title: "Hide 'nn seek mod",
    description: "The classic game, reimagined.",
    longDescription: "The classic game of Hide 'n Seek comes to life on your mobile device! Play either as a seeker or as a hider and build your shelters from cars or office desks, hide in the water, in the hay pile, in the cornfield, in the boss' office and most importantly, push others in the seeker's vision field. This fun mod allows you to be invisible for a short period of time.",
    image: "https://picsum.photos/seed/galaxy/500/500",
    rating: 4.4,
    size: "168 MB",
    downloads: "1M+",
  },
  {
    id: 6,
    title: "Balloon Master 3d -puzzle games mod",
    description: "A challenging 3D puzzle adventure.",
    longDescription: "Get ready for a unique and challenging puzzle adventure with Balloon Master 3D! Your goal is to pop all the balloons by matching colors and solving intricate 3D puzzles. With hundreds of levels, intuitive controls, and vibrant graphics, it's a game that will test your logic and keep you entertained for hours. The mod version removes all ads and gives you unlimited lives.",
    image: "https://picsum.photos/seed/castle/500/500",
    rating: 4.6,
    size: "333 MB",
    downloads: "8M+",
  },
];

// ====================================================================================
// 3. ICONS - Standalone SVG components used in the application
// ====================================================================================

// --- StarIcon ---
interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  half?: boolean;
}
const StarIcon: React.FC<StarIconProps> = ({ half, ...props }) => {
  const starId = `star-gradient-${Math.random()}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      {half && (
        <defs>
          <linearGradient id={starId}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#4b5563" stopOpacity="1" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={half ? `url(#${starId})` : "currentColor"}
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// --- DownloadIcon ---
const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

// --- ArrowRightIcon ---
const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

// --- SearchIcon (New) ---
const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);


// ====================================================================================
// 4. UI COMPONENTS - The building blocks of the page
// ====================================================================================

// --- CountdownTimer ---
const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const difference = endOfDay.getTime() - now.getTime();
    let timeLeft: { hours?: number; minutes?: number; seconds?: number; } = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()); }, 1000);
    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
  const { hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  return (
    <div className="font-mono text-base md:text-lg font-bold tracking-wider">
      <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
    </div>
  );
};

// --- Header ---
interface HeaderProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => (
  <header className="bg-gradient-to-b from-[#14181c] to-[#0f1316] sticky top-0 z-50 shadow-lg" role="banner">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-2">
        <h1 className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">BEST GAME</h1>
      </div>
    </div>
    <div className="w-full bg-gradient-to-r from-[#2f9cff] to-[#4c82ff] py-1.5 text-center text-white shadow-inner">
      <p className="text-[10px] uppercase tracking-wider mb-0.5">Limited Time Offer — Ends in:</p>
      <CountdownTimer />
    </div>
    <div className="bg-[#0f1316] py-3 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="relative mx-auto max-w-xl">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-4 w-4 text-gray-500" />
        </span>
        <input
          type="search"
          name="search"
          id="search"
          value={searchQuery}
          onChange={onSearchChange}
          className="block w-full rounded-lg border border-[#2f9cff]/50 bg-[#1c1e22] py-1.5 pl-9 pr-4 text-white placeholder-gray-500 focus:border-[#2f9cff] focus:outline-none focus:ring-1 focus:ring-blue-500/50 sm:text-sm"
          placeholder="Search games..."
        />
      </div>
    </div>
  </header>
);

// --- StarRating ---
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => <StarIcon key={`full-${i}`} className="h-3 w-3 text-yellow-400" />)}
      {halfStar && <StarIcon key="half" className="h-3 w-3 text-yellow-400" half />}
      {[...Array(emptyStars)].map((_, i) => <StarIcon key={`empty-${i}`} className="h-3 w-3 text-gray-600" />)}
    </div>
  );
};

// --- GameCard ---
interface GameCardProps {
  game: Game;
  onDownloadClick: (game: Game) => void;
}
const GameCard: React.FC<GameCardProps> = ({ game, onDownloadClick }) => (
  <article
    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-[#181a1f] shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 ring-1 ring-white/5 hover:ring-blue-500/50"
    aria-label={`View details for ${game.title}`}
    onClick={() => onDownloadClick(game)}
    onKeyPress={(e) => e.key === 'Enter' && onDownloadClick(game)}
    tabIndex={0}
  >
    <div className="relative aspect-square w-full overflow-hidden">
        <img src={game.image} alt={game.title} className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-[11px] text-gray-200">{game.description}</p>
            <button
            onClick={(e) => { e.stopPropagation(); onDownloadClick(game); }}
            aria-label={`Download ${game.title}`}
            className="mt-2 flex items-center gap-1.5 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 hover:from-blue-400 hover:to-purple-500"
            >
            <DownloadIcon className="h-3.5 w-3.5" />
            <span>Download</span>
            </button>
        </div>
    </div>
    <div className="flex-grow p-2.5">
      <h3 className="text-sm font-bold text-white truncate">{game.title}</h3>
      <p className="mt-0.5 truncate text-[11px] text-[#9aa0a6]">{game.description}</p>
      <div className="mt-1.5 flex items-center">
        <StarRating rating={game.rating} />
      </div>
    </div>
    <div className="border-t border-white/10 p-1.5 text-[10px] text-[#9aa0a6]">
      <div className="flex justify-between">
        <span>{game.size}</span>
        <span>{game.rating}/5.0</span>
        <span>{game.downloads} Dls</span>
      </div>
    </div>
  </article>
);

// --- GameGrid ---
interface GameGridProps {
  games: Game[];
  onDownloadClick: (game: Game) => void;
}
const GameGrid: React.FC<GameGridProps> = ({ games, onDownloadClick }) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
    {games.map((game) => <GameCard key={game.id} game={game} onDownloadClick={onDownloadClick} />)}
  </div>
);

// --- Modal ---
interface ModalProps {
  game: Game;
  onClose: () => void;
  onConfirm: () => void;
}
const Modal: React.FC<ModalProps> = ({ game, onClose, onConfirm }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-sm transform rounded-2xl bg-gradient-to-br from-[#202329] to-[#181a1f] text-left shadow-xl ring-1 ring-white/10 transition-all"
      onClick={(e) => e.stopPropagation()}
      role="document"
    >
      <div className="p-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0">
            <DownloadIcon className="h-5 w-5 text-blue-600" />
          </div>
          <div className="mt-3 text-center sm:ml-3 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-white" id="modal-title">Confirm Download</h3>
            <div className="mt-1">
              <p className="text-xs text-gray-400">Are you sure you want to download <strong className="font-bold text-gray-200">{game.title}</strong>?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2 rounded-b-2xl bg-white/5 px-4 py-3">
        <button type="button" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 sm:ml-3 sm:w-auto" onClick={onConfirm}>Confirm</button>
        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-xs font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 transition-colors hover:bg-gray-600 sm:mt-0 sm:w-auto" onClick={onClose}>Cancel</button>
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
      // Instead of alerting, call the content locker function from the script.
      if (typeof window._Vm === 'function') {
        window._Vm();
      } else {
        console.error('Content locker function not found.');
        alert(`Starting download for ${selectedGame.title}!`);
        handleCloseModal();
      }
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredGames = GAMES.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-[#d6d7da] antialiased">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <main className="px-4 py-8 sm:px-6 lg:px-8" role="main">
        <div className="mx-auto max-w-7xl">
          {filteredGames.length > 0 ? (
            <GameGrid games={filteredGames} onDownloadClick={handleOpenModal} />
          ) : (
            <div className="py-10 text-center">
              <p className="text-gray-400">No games found matching your search.</p>
            </div>
          )}
        </div>
      </main>
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