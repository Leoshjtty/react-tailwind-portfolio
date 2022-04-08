function Projects() {

  return (
    <div className="mt-8">
      {/* <div className='mx-auto'> */}
        <p>Projects </p>
        {/* <a
          className="text-teal-500"
          href="https://t.me/Toto_Alert_Bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Toto Alert Bot
        </a> */}
        <div className="wrapper flex flex-col lg:flex-row mt-8">
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 border-2 border-teal-500">
            <img className="w-full" src={process.env.PUBLIC_URL + "img/telebot.jpg"} alt="Python Telegram Bot" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Telegram Lottery Bot</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB Atlas</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">AWS S3</span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 border-2 border-teal-500">
            <img className="w-full" src={process.env.PUBLIC_URL + "img/telebot.jpg"} alt="Python Telegram Bot" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Telegram Lottery Bot</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Projects;