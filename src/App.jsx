import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set the page title
  useEffect(() => {
    document.title = "Meowbook";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const cats = [
    {
      imageSrc: "zazu.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imageSrc: "tole-tole.jpg",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      imageSrc: "kiji.jpg",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      imageSrc: "dou-dou.jpg",
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      imageSrc: "mr-fresh.jpg",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
  ];

  const CatCard = ({ imageSrc, text }) => {
    return (
      <div
        className={`p-2 rounded-2xl smooth-transition w-full hover:scale-102 hover:shadow-sm hover:shadow-black/40 ${
          isDarkMode ? "bg-dark-container" : "bg-light-primary"
        }`}
      >
        <div className={`rounded-2xl text-white flex flex-row gap-4 h-full`}>
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-2xl">
            <img
              src={imageSrc}
              alt="cat"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div
            className={`flex-1 overflow-y-auto py-2 smooth-transition ${
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
          className={`font-sans text-2xl font-bold smooth-transition ${
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

      {/* Main Content */}
      <div className="pb-8 flex-1 w-full px-8 flex flex-col">
        <p
          className={`pb-4 font-sans smooth-transition ${
            isDarkMode ? "text-dark-text" : "text-light-text"
          }`}
        >
          Welcome to Meowbook! {isDarkMode ? "meow meow" : "meow meow meow"}
        </p>

        {/* Cat Grid */}
        <div
          className={`overflow-y-auto h-200 px-5 pr-5 p-4 shadow-xl shadow-black/35 smooth-transition rounded-3xl ${
            isDarkMode ? "bg-dark-primary" : "bg-light-container"
          }`}
        >
          <div className="grid grid-cols-1 gap-4">
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
