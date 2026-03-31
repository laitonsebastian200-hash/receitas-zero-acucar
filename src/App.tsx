/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Check, 
  Star, 
  MousePointer2, 
  Mail, 
  Lock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-bold text-gray-800"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-red-500" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(27258); // 7h 34m 18s roughly

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleCheckout = () => {
    window.location.href = "https://pay.hotmart.com/J105130980G?checkoutMode=10&bid=1774819218146";
  };

  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-gray-900">
      {/* 1. Urgency Bar */}
      <div className="bg-[#ff0000] py-2 text-center text-xs font-bold text-white uppercase tracking-tight md:text-sm">
        <p className="mb-0.5">NÃO FECHE OU SAIA</p>
        <p>Desconto especial só HOJE nesta página: {new Date().toLocaleDateString('pt-BR')} | Tempo restante: {formatTime(timeLeft)}</p>
      </div>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-[#f0f0f0] px-4 pt-12 pb-16 md:px-8" style={{ backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block bg-[#3d2b1f] px-4 py-1 text-xl font-bold text-white md:text-3xl">
            AGORA VOCÊ PODE COMER
          </div>
          <br />
          <div className="mb-4 inline-block bg-[#ff6b81] px-4 py-1 text-2xl font-bold text-white md:text-5xl">
            SUA SOBREMESA FAVORITA
          </div>
          <h1 className="text-2xl font-bold text-[#ff6b81] md:text-4xl uppercase">
            DE DOMINGO A DOMINGO, <br /> SEM CULPA!
          </h1>
          
          <p className="mt-6 text-lg font-medium text-[#8b5e3c] md:text-2xl">
            + de 200 Receitas <span className="font-bold">Zero Açúcar, Glúten e Lactose.</span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-3 text-left">
              <img 
                src="https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/amanda-ballis-e1743041083343.webp" 
                alt="Helena Braga" 
                className="h-16 w-16 rounded-full border-2 border-white shadow-md object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-[#ff6b81]">Por Helena Braga</p>
                <p className="text-sm text-[#ff6b81]">Nutricionista</p>
              </div>
            </div>
          </div>

          <div 
            className="mt-10 mx-auto max-w-[350px] overflow-hidden rounded-2xl shadow-2xl border-4 border-[#ff6b81] relative cursor-pointer"
            onClick={() => setShowOverlay(false)}
          >
            <div style={{ padding: '173.33% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1178270647?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&muted=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="WhatsApp Video 2026-03-29 at 23.24.52"
              ></iframe>
            </div>
            {/* Overlay "Clique para assistir" */}
            {showOverlay && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pointer-events-none">
                <div className="animate-pulse rounded-full bg-[#ff6b81] px-6 py-3 text-lg font-bold text-white shadow-lg">
                  CLIQUE PARA ASSISTIR
                </div>
                <p className="mt-2 text-xs font-bold text-white uppercase drop-shadow-md">Ativar Som</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="text-sm font-bold text-gray-600">Avaliações:</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-sm font-bold text-gray-600">(2.137)</span>
            </div>
            <div className="mt-1 h-1 w-32 rounded-full bg-gray-200">
              <div className="h-full w-[97%] rounded-full bg-green-500"></div>
            </div>
            <span className="text-[10px] text-gray-400 uppercase">97%</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="mt-8 w-full max-w-md rounded-full bg-[#2ecc71] py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-105 md:text-2xl uppercase"
          >
            QUERO APROVEITAR O DESCONTO
          </button>
        </div>
      </section>

      {/* 3. "O que você vai poder comer" Section */}
      <section className="bg-[#f5f5f5] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-700 md:text-5xl">
            O que você <span className="text-[#ff6b81]">vai poder comer</span>
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">
            Com ingredientes <span className="font-bold">acessíveis e + de 200 receitas simples</span>, qualquer pessoa pode preparar sobremesas deliciosas <span className="font-bold">sem sair da dieta</span>.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {[
              { title: "Brownie", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/bownie.jpg" },
              { title: "Manjar", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/manjar-branco.jpg" },
              { title: "Doce de Leite", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/doce-de-leite.jpg" },
              { title: "Pavê", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pave.jpg" },
              { title: "Pudim", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pudim.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col rounded-2xl bg-[#ff6b81] p-2 text-white shadow-md">
                <img src={item.img} alt={item.title} className="h-32 w-full rounded-xl object-cover md:h-40" referrerPolicy="no-referrer" />
                <h3 className="mt-3 text-lg font-bold md:text-2xl">{item.title}</h3>
                <div className="mt-2 space-y-0.5 text-[10px] md:text-xs">
                  <p>Sem Açúcar</p>
                  <p>Sem Lactose</p>
                  <p>Sem Glúten</p>
                  <p className="font-bold">Sabor do Original</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Peach Section - Grid of Images */}
      <section className="bg-[#ffe0cc] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Sim! São mais de <span className="text-[#ff6b81]">200 receitas!</span>
          </h2>
          <p className="mt-4 text-gray-600 md:text-xl">
            Zero Açúcar, Zero Glúten e Zero Lactose com o sabor das tradicionais!
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/rocambole.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pave.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/mousse-maracuja.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/torta-chocolate.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/beijinho.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/torta-morango.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/manjar-branco.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/bownie.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/forrobodo.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/geleia.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/cocada.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/quindim.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/pudim.jpg"
            ].map((url, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow-md">
                <img 
                  src={url} 
                  alt="Receita" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Checklist Box Section */}
      <section className="bg-[#f5f5f5] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border-4 border-[#ff6b81] bg-[#f0f0f0] p-6 md:p-12">
          <h2 className="text-center text-2xl font-bold text-[#ff6b81] md:text-4xl">
            Baixando agora mais de 200 receitas, você vai:
          </h2>
          
          <ul className="mt-10 space-y-6">
            {[
              { title: "Controlar a compulsão por açúcar", desc: "" },
              { title: "Controlar sua glicemia", desc: "sem abrir mão do prazer de comer doces." },
              { title: "Garantir digestão leve e confortável", desc: "após comer sua sobremesa." },
              { title: "Perder peso", desc: "comendo seus doces favoritos na versão fit, com o mesmo sabor dos tradicionais." },
              { title: "Manter uma rotina de alimentação saudável", desc: "mesmo quando quiser comer um docinho." },
              { title: "Garantir que seu filho tenha uma alimentação equilibrada", desc: "enquanto curte os sabores da infância." },
              { title: "Ter sabores inéditos e saudáveis", desc: "para experimentar por anos." },
              { title: "Não tem muita experiência na cozinha.", desc: "São receitas MUITO fáceis de fazer, com ingredientes que todo mundo tem em casa!" },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#2ecc71] text-white">
                  <Check className="h-4 w-4 stroke-[4px]" />
                </div>
                <p className="text-lg text-[#8b5e3c] md:text-xl">
                  <span className="font-bold">{item.title}</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <button 
              onClick={handleCheckout}
              className="w-full max-w-md rounded-full bg-[#2ecc71] py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-105 md:text-2xl uppercase"
            >
              QUERO APROVEITAR O DESCONTO
            </button>
          </div>
        </div>
      </section>

      {/* 6. Bonus Section */}
      <section className="bg-[#ffe0cc] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Você ainda <span className="text-[#ff6b81]">ganha + 3 bônus</span> de presente!
          </h2>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Tortas Doces", price: "39,90", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/torta-bonus7.jpg" },
              { title: "Lanche da Tarde", price: "29,90", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/cafe-tarde-bonus.jpg" },
              { title: "Geléias Caseiras", price: "19,90", img: "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/geleia-bonus.jpg" },
            ].map((bonus, idx) => (
              <div key={idx} className="flex flex-col rounded-2xl bg-[#ff6b81] p-4 text-white shadow-lg">
                <img src={bonus.img} alt={bonus.title} className="h-48 w-full rounded-xl object-cover md:h-64" referrerPolicy="no-referrer" />
                <h3 className="mt-6 text-2xl font-bold md:text-4xl">{bonus.title}</h3>
                <p className="mt-2 text-sm md:text-lg">Zero açúcar, zero glúten e zero lactose</p>
                <p className="mt-6 text-2xl font-bold line-through opacity-80 md:text-4xl">DE R$ {bonus.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="bg-[#f5f5f5] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Elas já estão <span className="text-[#ff6b81]">praticando as receitas</span>
          </h2>
          
          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145243.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250311_192557.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250311_192714.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145126.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145154.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/depoimento-sobre-zero.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/depo-Leticia-.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/depo-wpp.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145305.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250311_192515.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/mousse-morango_.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/depo-insta_.jpg",
              "https://sobremesas-zero.descontoagora.site/wp-content/uploads/2025/03/IMG_20250325_145332.jpg"
            ].map((url, i) => (
              <div key={i} className="overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src={url} 
                  alt="Testimonial" 
                  className="w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Section */}
      <section id="checkout" className="bg-[#ffe0cc] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Tudo o que você <span className="text-[#ff6b81]">receberá</span>, aproveitando a <span className="text-[#ff6b81]">oferta de hoje</span>
          </h2>
          
          <div className="mt-12 rounded-3xl border-4 border-[#2ecc71] bg-[#f0f0f0] p-8 shadow-2xl md:p-16">
            <p className="text-2xl font-bold text-gray-500 line-through md:text-4xl uppercase">DE R$ 97,00</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xl font-bold text-gray-600 md:text-2xl uppercase">POR</span>
              <span className="text-5xl font-extrabold text-gray-700 md:text-8xl">R$ 10</span>
            </div>
            
            <ul className="mt-10 space-y-4 text-left">
              {[
                "+200 RECEITAS DE SOBREMESAS ZERO",
                "TORTAS DOCES (BÔNUS)",
                "LANCHE DA TARDE (BÔNUS)",
                "GELEIAS CASEIRAS (BÔNUS)",
                "ACESSO IMEDIATO E VITALÍCIO",
                "7 DIAS DE GARANTIA",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#2ecc71] text-white">
                    <Check className="h-4 w-4 stroke-[4px]" />
                  </div>
                  <span className="text-lg font-bold text-gray-500 md:text-xl uppercase">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleCheckout}
              className="mt-12 w-full rounded-full bg-[#2ecc71] py-5 text-xl font-extrabold text-white shadow-lg transition-transform hover:scale-105 md:text-3xl uppercase"
            >
              QUERO APROVEITAR O DESCONTO
            </button>
            <p className="mt-4 text-sm font-bold text-gray-400 uppercase">SOMENTE HOJE *</p>
          </div>
        </div>
      </section>

      {/* 9. Steps Section */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-600 md:text-5xl">
            Receba o seu acesso <span className="text-[#ff6b81]">em 2 passos</span>
          </h2>
          
          <div className="mt-16 flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b81]/10 text-[#ff6b81]">
                <MousePointer2 className="h-10 w-10 rotate-[-15deg] fill-current" />
              </div>
              <p className="max-w-[200px] text-lg font-bold text-[#ff6b81] md:text-xl">
                Clique no botão abaixo
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6b81]/10 text-[#ff6b81]">
                <Mail className="h-10 w-10 fill-current" />
              </div>
              <p className="max-w-[200px] text-lg font-bold text-[#ff6b81] md:text-xl">
                Digite seu melhor e-mail para receber todo o material
              </p>
            </div>
          </div>

          <button 
            onClick={handleCheckout}
            className="mt-16 w-full max-w-md rounded-full bg-[#2ecc71] py-4 text-lg font-extrabold text-white shadow-lg transition-transform hover:scale-105 md:text-2xl uppercase"
          >
            QUERO APROVEITAR O DESCONTO
          </button>
          
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2">
              <Lock className="h-6 w-6 text-gray-400" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-400 uppercase">COMPRA 100%</p>
                <p className="text-lg font-black text-green-600 uppercase leading-none">SEGURA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Optional but good for conversion) */}
      <section className="bg-gray-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-700">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Funciona para qualquer tipo de diabetes?" 
              answer="Sim! O Método Glicose Equilibrada foca em alimentos de baixo índice glicêmico, o que beneficia tanto quem tem Diabetes Tipo 1, Tipo 2 ou Pré-diabetes." 
            />
            <FAQItem 
              question="Preciso saber cozinhar pratos complexos?" 
              answer="De jeito nenhum. As receitas foram pensadas para o dia a dia, com instruções simples e ingredientes fáceis de encontrar em qualquer supermercado." 
            />
            <FAQItem 
              question="Como recebo o material?" 
              answer="O material é 100% digital (e-book em PDF). Assim que o pagamento for aprovado, você receberá um link de acesso no seu e-mail para baixar e começar hoje mesmo." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4">© 2026 Glicose Equilibrada. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto opacity-50">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. As informações contidas neste guia não substituem o aconselhamento médico profissional. Sempre consulte seu médico antes de fazer alterações em sua dieta ou tratamento.
          </p>
        </div>
      </footer>
    </div>
  );
}
