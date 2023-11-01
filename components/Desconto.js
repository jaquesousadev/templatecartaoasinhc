  export default function Desconto() {
    return (
      <section id="desconto" className="py-20 bg-gradient-to-t from-[rgb(241,240,247)] to-[#afa1eb]">
       <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">
              Descontos
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
            AS MARCAS MAIS AMADAS DO BRASIL
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
            você e sua família têm acesso a descontos em mais de 4 mil estabelecimentos espalhados pelo país.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">

        <img
          src="images/du-marcas.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />       
      </div>
    </section>
  );
}

  