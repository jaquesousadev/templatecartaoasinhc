export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-gray-900 md:pt-20">
      <div className="max-w-3xl mx-8 md:mx-auto">
        <div className="flex justify-center text-gray-400">
          <div className="grid grid-cols-2 gap-8 mb-20 md:gap-28">
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                J. Alves Cartão
              </li>
              <li>
                <a href="#features">Proposta</a>
              </li>
              <li>
                <a href="#demo">Apoio</a>
              </li>
              <li>
                <a href="#pricing">Valores</a>
              </li>
              <li>
                <a href="#desconto">Desconto</a>
              </li>
              <li>
                <a href="#redesul">Rede</a>
              </li>
              <li>
                <a href="#">Contratar</a>
              </li>
              <li>
                <a href="#pricing">Sign up</a>
              </li>
            </ul>
            <ul className="space-y-1.5">
              <li className="mb-4 font-semibold text-white uppercase">
                Av. Ipiranga, 1216 - 8º Andar - Republica São Paulo
              </li>
              <li className="text-3xl mb-4 font-semibold text-white uppercase">
                0800 700 1001
              </li>
              <li className="text-3xl mb-4 font-semibold text-white uppercase">
                (11) 98114-1001
              </li>
              
            </ul>

          </div>
        </div>
        <p className="-mt-8 text-center text-gray-300">
          Made with ♡ by{' '}
          <a
            href="https://saurish.com/?utm_source=uranium"
            className="underline"
          >
            Jaqueline Sousa
          </a>
          . &copy; J.Alves 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
