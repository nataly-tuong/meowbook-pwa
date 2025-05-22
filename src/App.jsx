import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set page title once on mount
  useEffect(() => {
    document.title = "Meowbook";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Cat data
  const cats = [
    {
      imageSrc: "zazu.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      imageSrc: "tole-tole.jpg",
      text: "Duis aute irure dolor in reprehenderit in voluptate...",
    },
    {
      imageSrc: "kiji.jpg",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur...",
    },
    {
      imageSrc: "dou-dou.jpg",
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor...",
    },
    {
      imageSrc: "mr-fresh.jpg",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam...",
    },
  ];

  // Cat card component
  const CatCard = ({ imageSrc, text }) => {
    return (
      <div
        className={`p-2 rounded-2xl smooth-transition w-full h-50 hover:scale-102 hover:shadow-sm hover:shadow-black/40 ${
          isDarkMode ? "bg-dark-container" : "bg-light-primary"
        }`}
      >
        <div className="rounded-2xl h-full grid grid-cols-[1fr_2fr] gap-4">
          {/* Image Section */}
          <div className="overflow-hidden">
            <img
              src={imageSrc} // Relative path works with Vite + GitHub Pages
              alt="cat"
              className="w-full h-full rounded-2xl max-w-45 object-fill"
            />
          </div>

          {/* Text Section with Scrollbar */}
          <div
            className={`h-40 overflow-y-auto pr-2 py-4 smooth-transition ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            {text}
          </div>
        </div>
      </div>
    );
  };

  return (
    // Page wrapper with background
    <div
      className={`flex flex-col min-h-screen font-sans smooth-transition ${
        isDarkMode
          ? "bg-gradient-to-t from-dark-primary to-dark-secondary"
          : "bg-gradient-to-t from-light-primary to-light-secondary"
      }`}
    >
      {/* Navbar */}
      <nav className="flex-none flex w-full justify-between items-center p-4 px-8 max-w-6xl mx-auto">
        <h1
          className={`text-2xl font-bold smooth-transition ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          :3 Meowbook
        </h1>

        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full text-2xl smooth-transition hover:scale-110 hover:shadow-sm hover:shadow-black/40 ${
            isDarkMode
              ? "bg-dark-primary text-dark-text hover:bg-dark-darkest"
              : "bg-light-primary text-light-text hover:bg-light-darkest"
          }`}
          title={`Switch to ${isDarkMode ? "Light" : "Dark"} Theme`}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Main content area */}
      <div className="pb-8 flex-1 w-full px-8 flex flex-col">
        {/* Intro Text */}
        <p
          className={`pb-4 font-sans smooth-transition ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Welcome to Meowbook! {isDarkMode ? "meow meow" : "meow meow meow"}
        </p>

        {/* Card Grid Container */}
        <div
          className={`overflow-y-auto max-h-[75vh] px-5 pr-5 p-4 shadow-xl shadow-black/35 smooth-transition rounded-3xl ${
            isDarkMode ? "bg-dark-primary" : "bg-light-container"
          }`}
        >
          <div className="grid grid-cols-1 gap-4">
            {/* Render all cats */}
            {cats.map((cat, index) => (
              <CatCard key={index} imageSrc={cat.imageSrc} text={cat.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
