export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-t from-[#524790] to-[#8c79ed]"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5 md:text-center">
              <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100 hover:cursor-pointer hover:bg-opacity-40">
                Proposta
              </div>
              <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl">
              Nossa Proposta Única de Valor
              </h1>
              <p className="text-xl text-gray-200 md:text-2xl">
              O que nos diferencia é o nosso compromisso com a saúde integral e a tranquilidade financeira de nossos clientes. Com os nosso cartão de desconto, 
              você não apenas economiza dinheiro em suas despesas médicas, mas também ganha acesso a uma gama abrangente de benefícios, incluindo descontos em clínicas e laboratórios.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-2 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3">
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
               <path d="m22.171 19.68-7.352-11.311v-5.407h1.708v-2.962h-10.429v2.965h1.722v5.407l-7.366 11.308c-.285.431-.455.96-.455 1.528 0 1.542 1.25 2.792 2.792 2.792h.003 17.031c1.544-.003 2.795-1.255 2.795-2.8 0-.565-.167-1.091-.455-1.531l.007.011zm-.905 2.302c-.282.513-.818.854-1.434.854-.002 0-.004 0-.006 0h-17.032c-.001 0-.002 0-.003 0-.904 0-1.636-.732-1.636-1.636 0-.33.098-.638.266-.895l-.004.006 7.549-11.6v-5.751h4.686v5.754l7.541 11.6c.17.251.272.561.272.895 0 .285-.074.553-.204.785l.004-.008z"/><path d="m14.412 12.351h-6.191l-5.655 8.698c-.03.045-.048.1-.048.159 0 .051.013.098.036.14l-.001-.001c.05.087.142.145.248.146h17.031.001c.106 0 .198-.058.247-.145l.001-.001c.022-.04.036-.088.036-.138 0-.059-.018-.115-.049-.16l.001.001z"/>
              </svg>
              <h3 className="text-xl font-semibold text-white">
              Descontos em Laboratórios
              
              </h3>
              <p className="text-gray-200">
              Nossa CARTÃO DE DESCONTOS oferece descontos em laboratórios de alta qualidade. Cuide da sua saúde com tranquilidade, sabendo que está economizando em exames e serviços de saúde confiáveis. Aproveite as vantagens exclusivas que preparamos para você e sua família. Conte conosco para cuidar do seu bem-estar.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M3 21H21M3 18H21M5.82333 3.00037C6.2383 3.36683 6.5 3.90285 6.5 4.5C6.5 5.60457 5.60457 6.5 4.5 6.5C3.90285 6.5 3.36683 6.2383 3.00037 5.82333M5.82333 3.00037C5.94144 3 6.06676 3 6.2 3H17.8C17.9332 3 18.0586 3 18.1767 3.00037M5.82333 3.00037C4.94852 3.00308 4.46895 3.02593 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3.02593 4.46895 3.00308 4.94852 3.00037 5.82333M3.00037 5.82333C3 5.94144 3 6.06676 3 6.2V11.8C3 11.9332 3 12.0586 3.00037 12.1767M3.00037 12.1767C3.36683 11.7617 3.90285 11.5 4.5 11.5C5.60457 11.5 6.5 12.3954 6.5 13.5C6.5 14.0971 6.2383 14.6332 5.82333 14.9996M3.00037 12.1767C3.00308 13.0515 3.02593 13.531 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.46895 14.9741 4.94852 14.9969 5.82333 14.9996M5.82333 14.9996C5.94144 15 6.06676 15 6.2 15H17.8C17.9332 15 18.0586 15 18.1767 14.9996M21 12.1771C20.6335 11.7619 20.0973 11.5 19.5 11.5C18.3954 11.5 17.5 12.3954 17.5 13.5C17.5 14.0971 17.7617 14.6332 18.1767 14.9996M21 12.1771C21.0004 12.0589 21 11.9334 21 11.8V6.2C21 6.06676 21 5.94144 20.9996 5.82333M21 12.1771C20.9973 13.0516 20.974 13.5311 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.5311 14.9741 19.0515 14.9969 18.1767 14.9996M20.9996 5.82333C20.6332 6.2383 20.0971 6.5 19.5 6.5C18.3954 6.5 17.5 5.60457 17.5 4.5C17.5 3.90285 17.7617 3.36683 18.1767 3.00037M20.9996 5.82333C20.9969 4.94852 20.9741 4.46895 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.5311 3.02593 19.0515 3.00308 18.1767 3.00037M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
              Descontos em Clínicas 
              </h3>
              <p className="text-gray-200">
              A sua saúde é uma prioridade, e nosso cartão de desconto reflete isso. 
              Ao escolher nossos serviços, você ganha acesso a uma ampla rede de parceiros, 
              incluindo clínicas renomadas e de alta qualidade. 
              Nossos descontos exclusivos permitem que você cuide de sua saúde física e mental. 
              Afinal, cuidar de si mesmo nunca deve ser um luxo inatingível.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>  
              <h3 className="text-xl font-semibold text-white">
                Telemedicina 24 horas
              </h3>
              <p className="text-gray-200">
              Imagine ter um médico ao seu alcance a qualquer hora e em qualquer lugar. 
              Com a telemedicina, essa visão se torna realidade. 
              Nosso cartão de desconto oferece acesso a consultas médicas virtuais com profissionais altamente qualificados, 
              eliminando a necessidade de deslocamentos, longas esperas e a burocracia de agendamentos.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M13.9 18H10.1C9.76863 18 9.5 17.7314 9.5 17.4V15.1C9.5 14.7686 9.23137 14.5 8.9 14.5H6.6C6.26863 14.5 6 14.2314 6 13.9V10.1C6 9.76863 6.26863 9.5 6.6 9.5H8.9C9.23137 9.5 9.5 9.23137 9.5 8.9V6.6C9.5 6.26863 9.76863 6 10.1 6H13.9C14.2314 6 14.5 6.26863 14.5 6.6V8.9C14.5 9.23137 14.7686 9.5 15.1 9.5H17.4C17.7314 9.5 18 9.76863 18 10.1V13.9C18 14.2314 17.7314 14.5 17.4 14.5H15.1C14.7686 14.5 14.5 14.7686 14.5 15.1V17.4C14.5 17.7314 14.2314 18 13.9 18Z"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Descontos em Farmácias 
              </h3>
              <p className="text-gray-200">
               Com o CARTÃO DE DESCONTOS, você faz parte da nossa comunidade de saúde e economia. Desfrute de descontos especiais em uma ampla variedade de produtos farmacêuticos, desde medicamentos essenciais até itens de cuidados pessoais. Cuide de você e de sua família com qualidade e economia. A saúde nunca foi tão acessível. 
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M3 7.56208C3 6.14754 4.14659 5.0002 5.56319 5.0002C6.34439 5.0002 6.9996 5.0002 6.9996 5.0002V3H12V5.0002H14.0016C17.8662 5.0002 21 8.13329 21 11.9977C21 14.2891 21 16.6925 21 18.4399C21 19.1184 20.73 19.7713 20.2494 20.2513C19.7688 20.7314 19.1172 21.0018 18.4368 21.0018C15.015 21.0018 8.98499 21.0018 5.56319 21.0018C4.88279 21.0018 4.23121 20.7314 3.75061 20.2513C3.27001 19.7713 3 19.1184 3 18.4399C3 15.454 3 10.548 3 7.56208Z"></path> 
                <path d="M11.9991 9C11.9991 9 14.9991 11.9934 14.9994 13.8865C14.9997 15.5422 13.6552 16.8865 11.9997 16.8865C10.3442 16.8865 9.012 15.5422 9 13.8865C9.00979 11.9924 11.9991 9 11.9991 9Z"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Descontos em Postos de Gasolina
              </h3>
              <p className="text-gray-200">
              "Na estrada da vida, economize sempre! Com o CARTÃO DE DESCONTOS você economiza em postos de gasolina, você está no caminho certo para economizar enquanto enche o tanque. Desfrute de preços mais baixos e uma jornada mais econômica a cada abastecimento. Acelere rumo a um futuro de poupança e conveniência.
              </p>
            </div>
            <div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="border-[#322e37] bg-gradient-to-b from-[#5b585f] to-[#2d2a33] h-10 w-10 rounded-full border p-2 transition duration-400 group-hover:border-[#00e4ff] group-hover:shadow-[#00e4ff] group-hover:shadow-sm"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
              Descontos em mais de 4 mil estabelecimentos 
              </h3>
              <p className="text-gray-200">
              "Descubra a liberdade de economizar em grande estilo! Com o CARTÃO DE DESCONTOS, você tem acesso a descontos exclusivos em mais de 4 mil estabelecimentos em todo o país. Estamos ao seu lado oferecendo economia em cada passo do caminho. Aproveite uma vida mais econômica e recheada de opções, onde quer que você vá.
              </p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}
