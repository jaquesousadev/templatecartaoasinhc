import React, { useState } from 'react';

export default function Teste() {
  const [texto, setTexto] = useState(''); // Estado para armazenar o texto inserido pelo usuário
  const [date, setDate] = useState(''); // Estado para armazenar o texto inserido pelo usuário

  // Função para atualizar o estado quando o usuário digitar no campo
  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  
    return (
      <section
      id="teste"
      className="min-h-screen bg-gradient-to-t from-[#524790] to-[#8c79ed] flex justify-center items-center"
      
    >
      <form action="https://api.sheetmonkey.io/form/jmp2vgnP6ku3JN8Y8Ksasr" method="post">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="space-y-16 md:space-y-24">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="space-y-5">
              <div className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-3 py-1 text-sm font-semibold text-indigo-100">
                <h1 className="text-3xl font-semibold text-gray-100 md:text-5xl mb-20">
                  FORMULARIO DE ADESÃO
                </h1>
                <p className="text-xl font-semibold text-white text-center mb-20">
                  Apenas para membros ASINHC.
                </p>
              {/*Campos formulario */}  
              <div className='mb-2'>
                <label className="text-xl font-semibold text-white">Nome Completo*</label>
              </div>
              <div className='mb-5'>
                <input
                  name="nome"
                  type="text"
                  placeholder="Digite Nome Completo"
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                  required
                />
              </div>   
              {/*Campos formulario - Data de Nascimento */} 
              <div className='mb-1'>
                <label className="text-xl font-semibold text-white">Data de Nascimento*</label>
              </div>
              <div className='mb-5'> 
                <input
                  name="data_nascimento"
                  type="date"
                  onChange={handleDateChange}
                  className="w-1/3 px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                />
              </div>
              {/*Campos formulario - RG e CPF*/}
              <div className='flex'>
                <div className="flex flex-col mr-5">
                  <label className="text-xl font-semibold text-white">RG*</label>
                  <input
                      name="RG"
                      type="text"
                      placeholder="Digite o nº do RG"
                      onChange={handleDateChange}
                      className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                    />
                </div>
               {/*Campos formulario - CPF */}
               <div className='flex flex-col'>
                  <label className="text-xl font-semibold text-white">CPF*</label>
                  <input
                        name="CPF"
                        type="text"
                        placeholder="Digite o nº do CPF"
                        onChange={handleDateChange}
                        className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md mb-10"
                      />
               </div>
              </div>
              {/*Campo Telefone*/}  
              <div className='mb-2'>
                <label className="text-xl font-semibold text-white">Telefone (Whatsapp)*</label>
              </div>
              <div className='mb-5'>
                <input
                  name="telefone"
                  type="text"
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                  required
                />
              </div> 
              {/*Campo E-mail*/}  
              <div className='mb-2'>
                <label className="text-xl font-semibold text-white">E-mail*</label>
              </div>
              <div className='mb-5'>
                <input
                  name="email"
                  type="text"
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                  required
                />
              </div>
              {/*Campo CEP*/}  
              <div className='mb-2'>
                <label className="text-xl font-semibold text-white">CEP*</label>
              </div>
              <div className='mb-5'>
                <input
                  name="CEP"
                  type="text"
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                />
              </div>
              {/*Campo Endereço*/}  
              <div className='mb-2'>
                <label className="text-xl font-semibold text-white">Rua*</label>
              </div>
              <div className='mb-5'>
                <input
                  name="rua"
                  type="text"
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                />
              </div> 
              {/*Campos formulario - Nº - Cidade - Estado*/}
              <div className='flex'>
                <div className="flex flex-col mr-5">
                  <label className="text-xl font-semibold text-white">Numero*</label>
                  <input
                      name="numero"
                      type="text"
                      placeholder="Digite o nº"
                      onChange={handleDateChange}
                      className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md"
                    />
                </div>
               {/*Campos formulario - Cidade */}
               <div className='flex flex-col mr-5'>
                  <label className="text-xl font-semibold text-white">Cidade*</label>
                  <input
                        name="cidade"
                        type="text"
                        placeholder="Digite a cidade"
                        onChange={handleDateChange}
                        className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md mb-10"
                      />
               </div>
               {/*Campos formulario - Estado */}
               <div className='flex flex-col'>
                  <label className="text-xl font-semibold text-white">Estado*</label>
                  <input
                        name="estado"
                        type="text"
                        placeholder="Digite o estado"
                        onChange={handleDateChange}
                        className="w-full px-3 py-2 mt-4 text-gray-800 bg-white rounded-lg shadow-md mb-10"
                      />
               </div>
              </div>    
              <div className='flex justify-center mb-10'>
                <button className="inline-block rounded-lg bg-[#302953] bg-opacity-60 px-5 py-5 text-sm font-semibold text-indigo-100">
                ENVIAR  
                </button>
              </div>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </section>
  );
}
