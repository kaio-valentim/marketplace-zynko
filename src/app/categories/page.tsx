'use client';

import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';

const categorias = [
  {
    nome: "Administração & Contabilidade",
    subcategorias: [
      "Análise de Dados & Estatística",
      "Contabilidade",
      "Financeiro",
      "Gestão de Projetos",
      "Planejamento de Negócios",
      "Recursos Humanos",
      "Outra - Administração & Contabilidade"
    ]
  },
  {
    nome: "Advogados & Leis",
    subcategorias: [
      "Ambiental",
      "Civil",
      "Conciliação & Mediação",
      "Consumidor",
      "Contratos",
      "Criminal",
      "Empresarial",
      "Família",
      "Imigração & Internacional",
      "Imóveis",
      "Previdenciário",
      "Propriedade Intelectual",
      "Relações Domésticas",
      "Trabalhista",
      "Tributação",
      "Outra - Advogados & Leis"
    ]
  },
  {
    nome: "Atendimento ao Consumidor",
    subcategorias: [
      "Atendimento ao Consumidor",
      "Suporte Técnico",
      "Outra - Atendimento ao Consumidor"
    ]
  },
  {
    nome: "Design & Criação",
    subcategorias: [
      "Animação",
      "Apresentação",
      "Design 3D",
      "Design de Moda",
      "Design de Produto",
      "Design Gráfico",
      "Diagramação",
      "Ilustração",
      "Logotipos",
      "Motion Design",
      "Rótulos e Embalagens",
      "Outra - Design & Criação"
    ]
  },
  {
    nome: "Educação & Consultoria",
    subcategorias: [
      "Agricultura",
      "Assessor de Investimentos",
      "Assessoria de Imprensa",
      "Consultoria Pessoal",
      "Contabilidade",
      "Corretor (Seguros, Consórcios, Imóveis)",
      "Design & Criação",
      "Engenharia & Arquitetura",
      "Escrita & Conteúdo",
      "Fundamental & Ensino Médio",
      "Idiomas",
      "Jurídico",
      "Negócios & Finanças (Seguros, Consórcios, Investimentos)",
      "Saúde & Fitness (Personal Trainer, Nutricionista)",
      "Tecnologia da Informação",
      "Vendas & Marketing",
      "Web, Mobile & Software",
      "Outra - Educação & Consultoria"
    ]
  },
  {
    nome: "Engenharia & Arquitetura",
    subcategorias: [
      "Arquitetura",
      "Design de Interiores",
      "Design Industrial",
      "Engenharia Civil",
      "Engenharia Elétrica & Eletrônica",
      "Engenharia Mecânica",
      "Engenharia Química",
      "Modelagem 3D & CAD",
      "Outra - Engenharia & Arquitetura"
    ]
  },
  {
    nome: "Escrita",
    subcategorias: [
      "Assessoria de Imprensa",
      "Copywriting",
      "Currículo & Carta de Apresentação",
      "Edição & Revisão",
      "Jornalismo",
      "Redação",
      "Roteiro",
      "Outra - Escrita"
    ]
  },
  {
    nome: "Fotografia & Audiovisual",
    subcategorias: [
      "Áudio - Edição e Produção",
      "Cinegrafia",
      "Edição de Imagens",
      "Fotografia",
      "Locução & Narração",
      "Vídeo - Edição e Produção",
      "Outra - Fotografia & Audiovisual"
    ]
  },
  {
    nome: "Serviços Locais & Manutenção",
    subcategorias: [
      "Beleza & Cuidados Pessoais",
      "Saúde & Bem-Estar",
      "Reparos e Instalações Residenciais",
      "Limpeza e Organização",
      "Jardinagem e Zeladoria",
      "Serviços Automotivos",
      "Eventos e Ocasiões Especiais",
      "Assistência Técnica",
      "Transporte e Entregas",
      "Alimentação e Gastronomia",
      "Serviços para Animais",
      "Consultoria e Vendas Locais",
      "Outra - Serviços Locais & Manutenção"
    ]
  },
  {
    nome: "Suporte Administrativo",
    subcategorias: [
      "Outra - Suporte Administrativo"
    ]
  },
  {
    nome: "Tradução",
    subcategorias: [
      "Alemão",
      "Chinês",
      "Espanhol",
      "Francês",
      "Inglês",
      "Italiano",
      "Japonês",
      "Outra - Tradução"
    ]
  },
  {
    nome: "Vendas & Marketing",
    subcategorias: [
      "Comercial",
      "Gestão de Mídias Sociais",
      "Marketing Digital",
      "Pesquisa de Mercado",
      "Relações Públicas",
      "SEO (Search Engine Optimization)",
      "Outra - Vendas & Marketing"
    ]
  },
  {
    nome: "Web, Mobile & Software",
    subcategorias: [
      "Banco de Dados",
      "Cloud Computing",
      "Desenvolvimento de Games",
      "Desenvolvimento Desktop",
      "Desenvolvimento Mobile",
      "Desenvolvimento Web",
      "Teste de Software",
      "UX/UI & Web Design",
      "Outra - Web, Mobile & Software"
    ]
  }
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categorias.filter(categoria =>
    categoria.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    categoria.subcategorias.some(sub => 
      sub.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Categorias de Serviços</h1>
          <p className="text-gray-400 text-lg">
            Explore todas as categorias disponíveis na plataforma ZYNKO
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar categoria ou subcategoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFC8]"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6">
          {filteredCategories.map((categoria, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <button
                onClick={() => setSelectedCategory(selectedCategory === categoria.nome ? null : categoria.nome)}
                className="w-full text-left"
              >
                <h3 className="text-xl font-bold text-[#00FFC8] mb-2 hover:text-[#00FFC8]/80 transition-colors">
                  {categoria.nome}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {categoria.subcategorias.length} subcategorias disponíveis
                </p>
              </button>

              {selectedCategory === categoria.nome && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-700">
                  {categoria.subcategorias.map((subcategoria, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <span className="text-sm text-gray-300">{subcategoria}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Nenhuma categoria encontrada para "{searchTerm}"
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/client"
            className="inline-flex items-center space-x-2 bg-[#00FFC8] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00FFC8]/90 transition-all duration-300"
          >
            <span>Solicitar Serviço</span>
          </Link>
        </div>
      </div>
    </div>
  );
}