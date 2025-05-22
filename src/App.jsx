import { useEffect, useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.title = "Meowbook";
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const cats = [
    {
      imageSrc: "zazu.jpg",
      text: "Aenean dictum, nulla id cursus aliquam, augue dolor fringilla nibh, et consequat massa nisl a augue. Integer iaculis vitae nibh et tincidunt. Donec placerat malesuada ex, in blandit ligula venenatis sit amet. Aenean magna ex, gravida at rhoncus in, porta sed massa. Sed odio lacus, fermentum a felis vel, facilisis mollis urna. Mauris ac gravida ipsum, non gravida dui. Maecenas sollicitudin purus quis neque rutrum vehicula. Ut eget ligula et libero dignissim facilisis ut non elit. Aliquam et ornare libero, sed fringilla orci.",
    },
    {
      imageSrc: "tole-tole.jpg",
      text: "Proin rutrum felis lectus, sed pretium risus pharetra eu. Suspendisse maximus faucibus purus, quis viverra mauris lobortis eu. Sed lobortis, mauris ac luctus rutrum, ante mauris pellentesque nisi, in posuere leo dolor ac lectus. Nam lorem arcu, interdum nec tristique non, mattis eget purus. Donec et est velit. Sed tortor velit, commodo non massa ac, hendrerit egestas nunc. Praesent iaculis rutrum laoreet.",
    },
    {
      imageSrc: "kiji.jpg",
      text: "Donec malesuada interdum magna, sed tincidunt nisi mollis eget. Vestibulum faucibus condimentum massa at bibendum. Aenean eget orci ac libero cursus rutrum. Vestibulum arcu ante, dapibus sit amet vehicula sed, lobortis non enim. Integer blandit sed libero quis aliquam.",
    },
    {
      imageSrc: "dou-dou.jpg",
      text: "Curabitur convallis augue lectus, mattis eleifend nulla cursus sed. Suspendisse hendrerit leo quis arcu aliquet, et pulvinar massa laoreet. Suspendisse nec elit luctus, facilisis risus quis, porttitor dolor. Fusce nec aliquam mauris. Vivamus feugiat convallis pharetra.",
    },
    {
      imageSrc: "mr-fresh.jpg",
      text: "Vestibulum mollis lobortis nulla, at finibus tortor viverra a. Praesent ac viverra est. Vestibulum finibus nec elit quis tincidunt. Vestibulum id leo varius, posuere enim id, aliquet neque. Aenean elementum magna a fringilla porttitor.",
    },
  ];

  const CatCard = ({ imageSrc, text }) => {
    return (
      <div
        className={`p-2 rounded-2xl smooth-transition w-full hover:scale-102 hover:shadow-sm hover:shadow-black/40 ${
          isDarkMode ? "bg-dark-container" : "bg-light-primary"
        }`}
      >
        <div className="rounded-2xl text-white flex flex-col md:flex-row gap-4 h-full">
          <div className="w-full md:w-auto md:max-w-[300px] max-h-60 overflow-hidden rounded-2xl">
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
      <nav className="w-full p-4 bg-transparent">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4">
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="pb-8 flex-1 w-full px-8 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <p
            className={`pb-4 font-sans smooth-transition ${
              isDarkMode ? "text-dark-text" : "text-light-text"
            }`}
          >
            Welcome to Meowbook! {isDarkMode ? "meow meow" : "meow meow meow"}
          </p>

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
    </div>
  );
};

export default App;
