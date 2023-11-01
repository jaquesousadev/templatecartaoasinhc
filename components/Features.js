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
              você não apenas economiza dinheiro em suas despesas médicas, mas também ganha acesso a uma gama abrangente de benefícios, incluindo assistência funeral e descontos em clínicas e laboratórios.
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
               <path d="M15 6V16M12 9H18M10.6154 16.5L9.50769 20H5.2L2 8.44444L5.2 4H9.5L10.2875 5M18 21H12L8 8L12 3H18L22 8L18 21Z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-white">
              Assistência Funeral
              
              </h3>
              <p className="text-gray-200">
              Reconhecemos que momentos difíceis podem ocorrer, 
              e é por isso que estamos aqui para apoiar você e sua família. 
              Nosso cartão de desconto inclue um valioso benefício de assistência funeral, 
              aliviando o fardo financeiro em um momento de perda. Queremos que você se sinta amparado, 
              sabendo que pode contar conosco não apenas nos momentos de alegria, mas também nos desafios da vida.
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
              Descontos em Clínicas e Laboratórios
              </h3>
              <p className="text-gray-200">
              A sua saúde é uma prioridade, e nosso cartão de desconto reflete isso. 
              Ao escolher nossos serviços, você ganha acesso a uma ampla rede de parceiros, 
              incluindo clínicas renomadas e laboratórios de alta qualidade. 
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
            {/*<div className="flex shadow-md hover:shadow-[#00e4ff] flex-col justify-between p-5 transition duration-400 bg-white bg-opacity-20 rounded-xl card-hover group space-y-5">
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
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Stunning, beautiful look
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
              <h3 className="text-xl font-semibold text-white">
                Suggestions are welcome
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
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
                Get users, fast.
              </h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
