'use client';

import Link from 'next/link';
import { ArrowLeft, HelpCircle, MessageCircle, Phone, Mail, Clock } from 'lucide-react';

export default function HelpPage() {
  const faqs = [
    {
      question: "Como funciona o ZYNKO?",
      answer: "O ZYNKO conecta clientes que precisam de serviços com prestadores qualificados. Você pode solicitar um serviço, receber propostas de múltiplos profissionais e escolher a melhor opção."
    },
    {
      question: "Como solicitar um serviço?",
      answer: "1. Faça seu cadastro como cliente\n2. Clique em 'Solicitar Serviço'\n3. Escolha a categoria e descreva o que precisa\n4. Defina seu orçamento e prazo\n5. Receba propostas dos prestadores\n6. Escolha a melhor proposta"
    },
    {
      question: "O pagamento é seguro?",
      answer: "Sim! Utilizamos um sistema de custódia (escrow). O pagamento fica bloqueado até você confirmar que o serviço foi concluído satisfatoriamente."
    },
    {
      question: "Como me tornar um prestador?",
      answer: "1. Cadastre-se como prestador\n2. Preencha seu perfil profissional\n3. Escolha suas categorias de serviço\n4. Aguarde aprovação do nosso time\n5. Comece a receber solicitações"
    },
    {
      question: "Qual a taxa cobrada?",
      answer: "Cobramos 15% de comissão sobre o valor do serviço concluído. Esta taxa é descontada automaticamente do pagamento ao prestador."
    },
    {
      question: "Posso cancelar um serviço?",
      answer: "Sim, tanto clientes quanto prestadores podem cancelar um serviço. Consulte nossos Termos de Uso para conhecer as políticas de cancelamento."
    },
    {
      question: "Como funciona o sistema de avaliações?",
      answer: "Após a conclusão do serviço, cliente e prestador avaliam um ao outro com notas de 1 a 5 estrelas e comentários. Isso ajuda a manter a qualidade da plataforma."
    },
    {
      question: "Posso trabalhar remotamente?",
      answer: "Sim! Muitos serviços podem ser realizados remotamente. Ao criar sua solicitação, você pode escolher entre 'Local' ou 'Nacional' para incluir prestadores de todo o Brasil."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">Z</span>
                </div>
                <h1 className="text-2xl font-bold text-white">ZYNKO</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Central de Ajuda</h1>
          <p className="text-gray-400 text-lg">
            Encontre respostas para as perguntas mais frequentes sobre o ZYNKO
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/contact" className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-[#00FFC8] transition-colors">
            <MessageCircle className="w-8 h-8 text-[#00FFC8] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chat Online</h3>
            <p className="text-gray-400 text-sm">Fale conosco em tempo real</p>
          </Link>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <Phone className="w-8 h-8 text-[#00FFC8] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Telefone</h3>
            <p className="text-gray-400 text-sm">(11) 9999-9999</p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <Mail className="w-8 h-8 text-[#00FFC8] mb-4" />
            <h3 className="text-lg font-semibold mb-2">E-mail</h3>
            <p className="text-gray-400 text-sm">suporte@zynko.com.br</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-900 rounded-xl border border-gray-800">
                <summary className="p-6 cursor-pointer hover:bg-gray-800 rounded-xl transition-colors">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-[#00FFC8] flex-shrink-0" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <div className="pl-8 text-gray-300 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-6 h-6 text-[#00FFC8]" />
            <h3 className="text-lg font-semibold">Horário de Atendimento</h3>
          </div>
          <div className="text-gray-300">
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 9h às 14h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}