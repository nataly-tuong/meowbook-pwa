import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.title = "Meowbook";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Background with transition
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

        {/* Grid Stuff */}
        <div
          className={`p-4 shadow-xl shadow-black/35 smooth-transition rounded-3xl flex-1 p-4 ${
            isDarkMode ? "bg-dark-primary" : "bg-light-container"
          }`}
        >
          <div
            className={`p-2 rounded-2xl smooth-transition rounded-2xl bg-dark-container w-full h-50 hover:scale-102 hover:shadow-sm hover:shadow-black/40 ${
              isDarkMode ? "bg-dark-container" : "bg-light-primary"
            }`}
          >
            <div className="  rounded-2xl h-full text-white grid grid-cols-[1fr_2fr] gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/zazu.jpg"
                  alt="zazu"
                  className="w-full h-full object-fill"
                ></img>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
