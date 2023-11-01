const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  return (
<section id="testimonies" className="py-20 bg-opacity-50 bg-emerald-50">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Rede Credenciada
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              A maior e a melhor
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
            São milhares de estabelecimentos particulares para escolher.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">

        <img
          src="images/rede.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />       
      </div>      
    </section>  
  );
}


