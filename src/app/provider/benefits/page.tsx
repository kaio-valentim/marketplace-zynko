'use client';

import Link from 'next/link';
import { ArrowLeft, Check, Star, DollarSign, Users, Shield, Clock, TrendingUp } from 'lucide-react';

export default function ProviderBenefits() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">Z</span>
                </div>
                <h1 className="text-2xl font-bold text-white">ZYNKO</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/provider" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </Link>
              <Link 
                href="/auth" 
                className="bg-[#00FFC8] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00FFC8]/90 transition-colors"
              >
                Cadastrar-se
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#00FFC8] bg-clip-text text-transparent">
            Benefícios para Prestadores
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Descubra todas as vantagens de fazer parte da maior plataforma de serviços do Brasil
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Renda Extra Garantida</h3>
              <p className="text-gray-400 mb-4">
                Aumente sua renda oferecendo seus serviços para milhares de clientes em potencial
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Defina seus próprios preços</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Receba pagamentos seguros</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Sem taxa de cadastro</span>
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clientes Qualificados</h3>
              <p className="text-gray-400 mb-4">
                Conecte-se com clientes que realmente precisam dos seus serviços
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Solicitações pré-qualificadas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Informações detalhadas do projeto</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Orçamento definido pelo cliente</span>
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pagamento Seguro</h3>
              <p className="text-gray-400 mb-4">
                Sistema de custódia garante que você receba pelo trabalho realizado
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Pagamento em custódia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Liberação automática</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Suporte para disputas</span>
                </li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Flexibilidade Total</h3>
              <p className="text-gray-400 mb-4">
                Trabalhe quando e onde quiser, no seu próprio ritmo
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Defina seus horários</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Trabalho local ou remoto</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Escolha seus projetos</span>
                </li>
              </ul>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Construa sua Reputação</h3>
              <p className="text-gray-400 mb-4">
                Sistema de avaliações para destacar seu trabalho de qualidade
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Avaliações de clientes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Portfólio integrado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Ranking de prestadores</span>
                </li>
              </ul>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-[#00FFC8]/50 transition-all duration-300">
              <div className="w-16 h-16 bg-[#00FFC8]/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#00FFC8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Crescimento Profissional</h3>
              <p className="text-gray-400 mb-4">
                Expanda seus negócios e alcance novos mercados
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Alcance nacional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Múltiplas categorias</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#00FFC8]" />
                  <span>Ferramentas de gestão</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Prestadores ZYNKO em Números</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#00FFC8] mb-2">R$ 2.5K</div>
              <div className="text-gray-400">Renda Média Mensal</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00FFC8] mb-2">4.8★</div>
              <div className="text-gray-400">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00FFC8] mb-2">85%</div>
              <div className="text-gray-400">Taxa de Aprovação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00FFC8] mb-2">24h</div>
              <div className="text-gray-400">Tempo Médio de Resposta</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Pronto para Começar?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Cadastre-se agora e comece a receber solicitações de serviços hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/auth"
              className="bg-[#00FFC8] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00FFC8]/90 transition-all duration-300 transform hover:scale-105"
            >
              Cadastrar como Prestador
            </Link>
            <Link 
              href="/provider/help"
              className="border border-[#00FFC8] text-[#00FFC8] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00FFC8]/10 transition-all duration-300"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">Z</span>
                </div>
                <h1 className="text-xl font-bold">ZYNKO</h1>
              </div>
              <p className="text-gray-400">
                Conectando pessoas aos melhores profissionais da sua região ou do Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Para Clientes</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/client" className="hover:text-[#00FFC8]">Solicitar Serviço</Link></li>
                <li><Link href="/categories" className="hover:text-[#00FFC8]">Categorias</Link></li>
                <li><Link href="/help" className="hover:text-[#00FFC8]">Como Funciona</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Para Prestadores</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/provider" className="hover:text-[#00FFC8]">Cadastrar-se</Link></li>
                <li><Link href="/provider/benefits" className="hover:text-[#00FFC8]">Benefícios</Link></li>
                <li><Link href="/provider/help" className="hover:text-[#00FFC8]">Suporte</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-[#00FFC8]">Central de Ajuda</Link></li>
                <li><Link href="/contact" className="hover:text-[#00FFC8]">Contato</Link></li>
                <li><Link href="/terms" className="hover:text-[#00FFC8]">Termos de Uso</Link></li>
                <li><Link href="/privacy" className="hover:text-[#00FFC8]">Privacidade</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZYNKO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}