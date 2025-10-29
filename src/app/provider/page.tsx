'use client';

import { useState, useEffect } from 'react';
import { 
  Bell, 
  CheckCircle, 
  XCircle, 
  Clock, 
  DollarSign, 
  MapPin, 
  Star, 
  MessageCircle, 
  User, 
  Settings,
  Home,
  FileText,
  Filter,
  Calendar,
  AlertCircle,
  ArrowLeft,
  Edit
} from 'lucide-react';
import Link from 'next/link';

type TabType = 'home' | 'requests' | 'chat' | 'profile';
type ProviderStatus = 'pending_approval' | 'approved' | 'rejected';
type ViewType = 'main' | 'request-details' | 'job-details' | 'edit-profile';
type FilterType = 'all' | 'local' | 'remote';

interface RequestDetails {
  id: number;
  title: string;
  description: string;
  category: string;
  clientName: string;
  clientRating: number;
  maxBudget: number;
  deadline: string;
  location: string;
  distance: string | null;
  isLocal: boolean;
  postedAt: string;
  proposals: number;
  requirements: string[];
  skills: string[];
  clientHistory: {
    totalJobs: number;
    completionRate: number;
    avgRating: number;
  };
}

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [currentView, setCurrentView] = useState<ViewType>('main');
  const [selectedRequest, setSelectedRequest] = useState<RequestDetails | null>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [providerStatus] = useState<ProviderStatus>('approved');
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Função para formatar data de forma consistente
  const formatDate = (dateString: string) => {
    if (!mounted) return '';
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return '';
      
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch (error) {
      return '';
    }
  };

  const availableRequests = [
    {
      id: 1,
      title: 'Desenvolvimento de E-commerce',
      description: 'Preciso de um site de e-commerce completo com carrinho de compras, pagamento e gestão de produtos.',
      category: 'Web, Mobile & Software',
      clientName: 'Maria Santos',
      clientRating: 4.8,
      maxBudget: 5000,
      deadline: '2024-03-15',
      location: 'São Paulo, SP',
      distance: '3.2 km',
      isLocal: true,
      postedAt: '2024-01-28',
      proposals: 12,
      requirements: [
        'Experiência com React/Next.js',
        'Conhecimento em sistemas de pagamento',
        'Portfolio com projetos similares',
        'Disponibilidade para reuniões presenciais'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      clientHistory: {
        totalJobs: 15,
        completionRate: 95,
        avgRating: 4.8
      }
    },
    {
      id: 2,
      title: 'Design de Identidade Visual Completa',
      description: 'Startup precisa de logo, cartão de visita, papel timbrado e manual de marca.',
      category: 'Design & Criação',
      clientName: 'João Oliveira',
      clientRating: 4.9,
      maxBudget: 1500,
      deadline: '2024-02-20',
      location: 'Remoto',
      distance: null,
      isLocal: false,
      postedAt: '2024-01-27',
      proposals: 8,
      requirements: [
        'Portfolio com identidades visuais',
        'Experiência com startups',
        'Entrega de manual de marca',
        'Revisões incluídas no orçamento'
      ],
      skills: ['Adobe Illustrator', 'Photoshop', 'Branding', 'Design Gráfico'],
      clientHistory: {
        totalJobs: 8,
        completionRate: 100,
        avgRating: 4.9
      }
    },
    {
      id: 3,
      title: 'Consultoria em Marketing Digital',
      description: 'Empresa precisa de estratégia completa de marketing digital e gestão de redes sociais.',
      category: 'Vendas & Marketing',
      clientName: 'Ana Costa',
      clientRating: 4.7,
      maxBudget: 2000,
      deadline: '2024-02-10',
      location: 'Rio de Janeiro, RJ',
      distance: '450 km',
      isLocal: false,
      postedAt: '2024-01-26',
      proposals: 15,
      requirements: [
        'Experiência comprovada em marketing digital',
        'Cases de sucesso em redes sociais',
        'Conhecimento em Google Ads e Facebook Ads',
        'Relatórios mensais de performance'
      ],
      skills: ['Google Ads', 'Facebook Ads', 'Instagram', 'Analytics', 'SEO'],
      clientHistory: {
        totalJobs: 12,
        completionRate: 92,
        avgRating: 4.7
      }
    }
  ];

  const myProposals = [
    {
      id: 1,
      requestTitle: 'Desenvolvimento de App Mobile',
      clientName: 'Pedro Silva',
      proposedPrice: 3500,
      proposedDeadline: '2024-03-01',
      status: 'pending',
      sentAt: '2024-01-25'
    },
    {
      id: 2,
      requestTitle: 'Design de Website Institucional',
      clientName: 'Carla Mendes',
      proposedPrice: 1200,
      proposedDeadline: '2024-02-15',
      status: 'accepted',
      sentAt: '2024-01-20'
    },
    {
      id: 3,
      requestTitle: 'Consultoria em UX/UI',
      clientName: 'Roberto Lima',
      proposedPrice: 800,
      proposedDeadline: '2024-02-05',
      status: 'rejected',
      sentAt: '2024-01-18'
    }
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Design de Website Institucional',
      clientName: 'Carla Mendes',
      progress: 75,
      deadline: '2024-02-15',
      value: 1200,
      status: 'in_progress',
      description: 'Desenvolvimento de website institucional para empresa de consultoria',
      milestones: [
        { name: 'Briefing e Wireframes', completed: true, date: '2024-01-22' },
        { name: 'Design das Páginas', completed: true, date: '2024-01-28' },
        { name: 'Desenvolvimento Frontend', completed: false, date: '2024-02-05' },
        { name: 'Testes e Ajustes', completed: false, date: '2024-02-12' },
        { name: 'Entrega Final', completed: false, date: '2024-02-15' }
      ],
      nextDeliverable: 'Desenvolvimento Frontend - 05/02/2024'
    }
  ];

  // Função para filtrar solicitações
  const getFilteredRequests = () => {
    switch (activeFilter) {
      case 'local':
        return availableRequests.filter(request => request.isLocal);
      case 'remote':
        return availableRequests.filter(request => !request.isLocal);
      default:
        return availableRequests;
    }
  };

  // Handlers para os botões
  const handleViewRequest = (request: any) => {
    const fullRequest = availableRequests.find(r => r.id === request.id);
    if (fullRequest) {
      setSelectedRequest(fullRequest);
      setCurrentView('request-details');
    }
  };

  const handleSendProposal = (requestId: number) => {
    const request = availableRequests.find(r => r.id === requestId);
    if (request) {
      const proposalData = prompt(`Enviar proposta para: ${request.title}\n\nCliente: ${request.clientName}\nOrçamento máximo: R$ ${request.maxBudget}\n\nDigite sua proposta:\nValor: R$ ___\nPrazo: ___ dias\nDescrição: ___`);
      if (proposalData && proposalData.trim()) {
        alert(`✅ Proposta enviada com sucesso!\n\nProjeto: ${request.title}\nCliente: ${request.clientName}\nSua proposta: ${proposalData}\n\n📧 O cliente receberá sua proposta por e-mail\n🔔 Você será notificado quando houver resposta\n⏰ Resposta esperada em até 48h`);
      }
    }
  };

  const handleViewJobDetails = (job: any) => {
    setSelectedJob(job);
    setCurrentView('job-details');
  };

  const handleViewRequests = () => {
    setActiveTab('requests');
  };

  const handleEditProfile = () => {
    setCurrentView('edit-profile');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    setSelectedRequest(null);
    setSelectedJob(null);
  };

  const handleNotificationClick = (notificationId?: number) => {
    if (notificationId) {
      console.log(`Clicou na notificação ${notificationId}`);
      alert(`Abrindo notificação ${notificationId}...`);
      setShowNotifications(false);
    } else {
      setShowNotifications(!showNotifications);
      setShowSettings(false);
    }
  };

  const handleSettingsClick = (action?: string) => {
    if (action) {
      switch (action) {
        case 'edit-profile':
          handleEditProfile();
          setShowSettings(false);
          break;
        case 'notifications':
          console.log('Configurações de notificações');
          alert('Configurações de Notificações:\n\n• Notificações de novas solicitações\n• Alertas de propostas aceitas/rejeitadas\n• Lembretes de prazos\n• Mensagens de clientes\n• Atualizações do sistema');
          setShowSettings(false);
          break;
        case 'payments':
          console.log('Histórico de pagamentos');
          alert('Histórico de Pagamentos:\n\n• Pagamentos recebidos: R$ 12.450\n• Pendentes: R$ 1.200\n• Conta bancária: Banco *** - Ag: 1234\n• PIX cadastrado\n• Relatórios fiscais disponíveis');
          setShowSettings(false);
          break;
        case 'account':
          console.log('Configurações da conta');
          alert('Configurações da Conta:\n\n• Alterar senha\n• Dados pessoais\n• Configurações de privacidade\n• Preferências de trabalho\n• Disponibilidade');
          setShowSettings(false);
          break;
        case 'support':
          console.log('Suporte');
          alert('Suporte ao Prestador:\n\n• Central de ajuda\n• Chat com suporte\n• FAQ para prestadores\n• Reportar problema\n• Dicas para aumentar vendas');
          setShowSettings(false);
          break;
        case 'logout':
          console.log('Logout');
          if (confirm('Tem certeza que deseja sair?')) {
            alert('Fazendo logout...');
            window.location.href = '/';
          }
          setShowSettings(false);
          break;
        default:
          break;
      }
    } else {
      setShowSettings(!showSettings);
      setShowNotifications(false);
    }
  };

  const renderStatusBanner = () => {
    if (providerStatus === 'pending_approval') {
      return (
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-yellow-400" />
            <div>
              <h3 className="font-semibold text-yellow-400">Aguardando Aprovação</h3>
              <p className="text-sm text-yellow-300">Seu perfil está sendo analisado. Isso pode levar até 24 horas.</p>
            </div>
          </div>
        </div>
      );
    }

    if (providerStatus === 'rejected') {
      return (
        <div className="bg-red-900/20 border border-red-700 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <XCircle className="w-5 h-5 text-red-400" />
            <div>
              <h3 className="font-semibold text-red-400">Perfil Rejeitado</h3>
              <p className="text-sm text-red-300">Entre em contato com o suporte para mais informações.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-green-900/20 border border-green-700 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <div>
            <h3 className="font-semibold text-green-400">Perfil Aprovado</h3>
            <p className="text-sm text-green-300">Você pode receber e responder solicitações!</p>
          </div>
        </div>
      </div>
    );
  };

  const renderRequestDetails = () => {
    if (!selectedRequest) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={handleBackToMain}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold">Detalhes da Solicitação</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{selectedRequest.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{selectedRequest.category}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00FFC8]">R$ {selectedRequest.maxBudget}</div>
              <div className="text-xs text-gray-400">orçamento máximo</div>
            </div>
          </div>

          <p className="text-gray-300 mb-6">{selectedRequest.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2 text-sm">
              <User className="w-4 h-4 text-gray-400" />
              <span>{selectedRequest.clientName}</span>
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span>{selectedRequest.clientRating}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{mounted ? formatDate(selectedRequest.deadline) : ''}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{selectedRequest.isLocal ? selectedRequest.distance : 'Remoto'}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MessageCircle className="w-4 h-4 text-gray-400" />
              <span>{selectedRequest.proposals} propostas</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Requisitos</h4>
            <ul className="space-y-2">
              {selectedRequest.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#00FFC8] mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Habilidades Necessárias</h4>
            <div className="flex flex-wrap gap-2">
              {selectedRequest.skills.map((skill, index) => (
                <span key={index} className="bg-[#00FFC8]/10 text-[#00FFC8] px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-3">Histórico do Cliente</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-[#00FFC8]">{selectedRequest.clientHistory.totalJobs}</div>
                <div className="text-xs text-gray-400">Projetos</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#00FFC8]">{selectedRequest.clientHistory.completionRate}%</div>
                <div className="text-xs text-gray-400">Conclusão</div>
              </div>
              <div>
                <div className="text-lg font-bold text-[#00FFC8]">{selectedRequest.clientHistory.avgRating}★</div>
                <div className="text-xs text-gray-400">Avaliação</div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button 
              onClick={() => handleSendProposal(selectedRequest.id)}
              className="flex-1 bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90"
            >
              Enviar Proposta
            </button>
            <button className="px-6 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700">
              Salvar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderJobDetails = () => {
    if (!selectedJob) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={handleBackToMain}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold">Detalhes do Projeto</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{selectedJob.title}</h3>
              <p className="text-gray-400">Cliente: {selectedJob.clientName}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00FFC8]">R$ {selectedJob.value}</div>
              <div className="text-xs text-gray-400">valor total</div>
            </div>
          </div>

          <p className="text-gray-300 mb-6">{selectedJob.description}</p>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progresso Geral</span>
              <span>{selectedJob.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-[#00FFC8] h-3 rounded-full transition-all duration-300"
                style={{ width: `${selectedJob.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-4">Marcos do Projeto</h4>
            <div className="space-y-3">
              {selectedJob.milestones.map((milestone: any, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  {milestone.completed ? (
                    <CheckCircle className="w-5 h-5 text-[#00FFC8]" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-400" />
                  )}
                  <div className="flex-1">
                    <div className={`font-medium ${milestone.completed ? 'text-white' : 'text-gray-400'}`}>
                      {milestone.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {mounted ? formatDate(milestone.date) : ''}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#00FFC8]/10 border border-[#00FFC8]/20 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-[#00FFC8] mb-2">Próxima Entrega</h4>
            <p className="text-sm">{selectedJob.nextDeliverable}</p>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90">
              Atualizar Progresso
            </button>
            <button className="px-6 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700">
              Mensagens
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderEditProfile = () => {
    const handleSaveProfile = () => {
      alert('✅ Perfil atualizado com sucesso!\n\nTodas as alterações foram salvas.\nSeu perfil ficará mais atrativo para os clientes!');
      handleBackToMain();
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <button 
            onClick={handleBackToMain}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-bold">Editar Perfil</h2>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="bg-[#00FFC8] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00FFC8]/90">
              Alterar Foto
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input 
                type="text" 
                defaultValue="Carlos Santos"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Título Profissional</label>
              <input 
                type="text" 
                defaultValue="Desenvolvedor Full Stack"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <textarea 
                rows={4}
                defaultValue="Desenvolvedor Full Stack com 5+ anos de experiência em React, Node.js e bancos de dados. Especializado em e-commerce e aplicações web modernas."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Localização</label>
              <input 
                type="text" 
                defaultValue="São Paulo, SP"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Habilidades</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((skill, index) => (
                  <span key={index} className="bg-[#00FFC8]/10 text-[#00FFC8] px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                    <span>{skill}</span>
                    <button className="text-[#00FFC8] hover:text-red-400">×</button>
                  </span>
                ))}
              </div>
              <input 
                type="text" 
                placeholder="Adicionar nova habilidade"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Valor por Hora (R$)</label>
              <input 
                type="number" 
                defaultValue="85"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00FFC8]"
              />
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button 
              onClick={handleSaveProfile}
              className="flex-1 bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90"
            >
              Salvar Alterações
            </button>
            <button 
              onClick={handleBackToMain}
              className="px-6 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderHomeTab = () => (
    <div className="space-y-6">
      {renderStatusBanner()}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#00FFC8]">23</div>
          <div className="text-sm text-gray-400">Propostas Enviadas</div>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#00FFC8]">8</div>
          <div className="text-sm text-gray-400">Serviços Ativos</div>
        </div>
        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <div className="text-2xl font-bold text-[#00FFC8]">4.9★</div>
          <div className="text-sm text-gray-400">Avaliação</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-[#00FFC8]/10 to-[#00FFC8]/5 border border-[#00FFC8]/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={handleViewRequests}
            className="bg-[#00FFC8] text-black p-4 rounded-xl font-semibold hover:bg-[#00FFC8]/90 transition-colors flex items-center justify-center space-x-2"
          >
            <Bell className="w-5 h-5" />
            <span>Ver Solicitações</span>
          </button>
          <button 
            onClick={handleEditProfile}
            className="bg-gray-800 text-white p-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Settings className="w-5 h-5" />
            <span>Editar Perfil</span>
          </button>
        </div>
      </div>

      {/* Active Jobs */}
      {activeJobs.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Serviços em Andamento</h3>
          <div className="space-y-3">
            {activeJobs.map(job => (
              <div key={job.id} className="bg-gray-900 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{job.title}</h4>
                    <p className="text-sm text-gray-400">Cliente: {job.clientName}</p>
                  </div>
                  <span className="text-[#00FFC8] font-semibold">R$ {job.value}</span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progresso</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#00FFC8] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Prazo: {mounted ? formatDate(job.deadline) : ''}</span>
                  <button 
                    onClick={() => handleViewJobDetails(job)}
                    className="bg-[#00FFC8] text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#00FFC8]/90"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Opportunities */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Oportunidades Recentes</h3>
        <div className="space-y-3">
          {availableRequests.slice(0, 2).map(request => (
            <div key={request.id} className="bg-gray-900 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{request.title}</h4>
                <span className="text-[#00FFC8] font-semibold">R$ {request.maxBudget}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3 line-clamp-2">{request.description}</p>
              
              <div className="flex justify-between items-center text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3" />
                  <span>{request.isLocal ? request.distance : 'Remoto'}</span>
                </div>
                <button 
                  onClick={() => handleViewRequest(request)}
                  className="bg-[#00FFC8] text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#00FFC8]/90"
                >
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRequestsTab = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Solicitações Disponíveis</h2>
        <button className="p-2 hover:bg-gray-800 rounded-lg">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            activeFilter === 'all' 
              ? 'bg-[#00FFC8] text-black' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Todas
        </button>
        <button 
          onClick={() => setActiveFilter('local')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            activeFilter === 'local' 
              ? 'bg-[#00FFC8] text-black' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Locais
        </button>
        <button 
          onClick={() => setActiveFilter('remote')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            activeFilter === 'remote' 
              ? 'bg-[#00FFC8] text-black' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Remotas
        </button>
      </div>

      <div className="space-y-4">
        {getFilteredRequests().map(request => (
          <div key={request.id} className="bg-gray-900 p-4 rounded-xl">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{request.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{request.category}</p>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">{request.description}</p>
              </div>
              <div className="text-right ml-4">
                <div className="text-lg font-bold text-[#00FFC8]">R$ {request.maxBudget}</div>
                <div className="text-xs text-gray-400">orçamento máx.</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{request.clientName}</span>
                <Star className="w-3 h-3 text-yellow-400 fill-current ml-1" />
                <span>{request.clientRating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{mounted ? formatDate(request.deadline) : ''}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{request.isLocal ? request.distance : 'Remoto'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{request.proposals} propostas</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button 
                onClick={() => handleSendProposal(request.id)}
                className="flex-1 bg-[#00FFC8] text-black py-2 rounded-lg font-semibold hover:bg-[#00FFC8]/90"
              >
                Enviar Proposta
              </button>
              <button 
                onClick={() => handleViewRequest(request)}
                className="px-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {getFilteredRequests().length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">Nenhuma solicitação encontrada</div>
          <p className="text-sm text-gray-500">
            {activeFilter === 'local' && 'Não há solicitações locais disponíveis no momento.'}
            {activeFilter === 'remote' && 'Não há solicitações remotas disponíveis no momento.'}
          </p>
        </div>
      )}
    </div>
  );

  const renderChatTab = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Conversas</h2>
      
      <div className="space-y-3">
        {[1, 2, 3].map(chat => (
          <div key={chat} className="bg-gray-900 p-4 rounded-xl flex items-center space-x-4 hover:bg-gray-800 cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-${1500000000000 + chat}?w=50&h=50&fit=crop&crop=face`}
              alt="Client"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold">Cliente {chat}</h4>
              <p className="text-sm text-gray-400">Última mensagem do projeto...</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">14:30</div>
              <div className="w-2 h-2 bg-[#00FFC8] rounded-full mt-1"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900 p-6 rounded-xl">
        <div className="flex items-center space-x-4 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-bold">Carlos Santos</h3>
            <p className="text-gray-400">Desenvolvedor Full Stack</p>
            <p className="text-sm text-gray-500">Membro desde Janeiro 2024</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-[#00FFC8]">4.9★</div>
            <div className="text-sm text-gray-400">Avaliação</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#00FFC8]">47</div>
            <div className="text-sm text-gray-400">Serviços</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#00FFC8]">98%</div>
            <div className="text-sm text-gray-400">Aprovação</div>
          </div>
        </div>
      </div>

      {/* My Proposals */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Minhas Propostas</h3>
        <div className="space-y-3">
          {myProposals.slice(0, 3).map(proposal => (
            <div key={proposal.id} className="bg-gray-900 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">{proposal.requestTitle}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  proposal.status === 'pending' ? 'bg-yellow-900 text-yellow-300' :
                  proposal.status === 'accepted' ? 'bg-green-900 text-green-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {proposal.status === 'pending' ? 'Pendente' : 
                   proposal.status === 'accepted' ? 'Aceita' : 'Rejeitada'}
                </span>
              </div>
              <p className="text-sm text-gray-400">Cliente: {proposal.clientName}</p>
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-[#00FFC8] font-semibold">R$ {proposal.proposedPrice}</span>
                <span className="text-gray-400">{mounted ? formatDate(proposal.sentAt) : ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button 
          onClick={handleEditProfile}
          className="w-full bg-gray-900 p-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800"
        >
          <Edit className="w-5 h-5 text-gray-400" />
          <span>Editar Perfil</span>
        </button>
        <button 
          onClick={() => alert('Configurações da Conta:\n\n• Alterar senha\n• Dados pessoais\n• Configurações de privacidade\n• Preferências de trabalho\n• Disponibilidade')}
          className="w-full bg-gray-900 p-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800"
        >
          <Settings className="w-5 h-5 text-gray-400" />
          <span>Configurações da Conta</span>
        </button>
        <button 
          onClick={() => alert('Histórico de Pagamentos:\n\n• Pagamentos recebidos: R$ 12.450\n• Pendentes: R$ 1.200\n• Conta bancária configurada\n• PIX cadastrado\n• Relatórios fiscais')}
          className="w-full bg-gray-900 p-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800"
        >
          <DollarSign className="w-5 h-5 text-gray-400" />
          <span>Histórico de Pagamentos</span>
        </button>
        <button 
          onClick={() => alert('Suporte ao Prestador:\n\n• Central de ajuda\n• Chat com suporte\n• FAQ para prestadores\n• Reportar problema\n• Dicas para aumentar vendas')}
          className="w-full bg-gray-900 p-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800"
        >
          <MessageCircle className="w-5 h-5 text-gray-400" />
          <span>Suporte</span>
        </button>
      </div>
    </div>
  );

  // Não renderiza nada até que o componente seja montado no cliente
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-md mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">Z</span>
                </div>
                <h1 className="text-xl font-bold">ZYNKO</h1>
                <span className="text-xs bg-[#00FFC8] text-black px-2 py-1 rounded-full font-semibold">PRO</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-800 rounded-lg relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FFC8] rounded-full"></div>
                </button>
                <button className="p-2 hover:bg-gray-800 rounded-lg">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-md mx-auto px-4 py-6 pb-20">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Z</span>
              </div>
              <h1 className="text-xl font-bold">ZYNKO</h1>
              <span className="text-xs bg-[#00FFC8] text-black px-2 py-1 rounded-full font-semibold">PRO</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button 
                  onClick={() => handleNotificationClick()}
                  className="p-2 hover:bg-gray-800 rounded-lg relative"
                >
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FFC8] rounded-full"></div>
                </button>
                
                {/* Dropdown de Notificações */}
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="font-semibold text-white">Notificações</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      <button 
                        onClick={() => handleNotificationClick(1)}
                        className="w-full p-3 hover:bg-gray-800 border-b border-gray-800 text-left"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#00FFC8] rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-white">Nova solicitação disponível</p>
                            <p className="text-xs text-gray-400 mt-1">Desenvolvimento de E-commerce - R$ 5.000</p>
                            <p className="text-xs text-gray-500 mt-1">há 2 minutos</p>
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleNotificationClick(2)}
                        className="w-full p-3 hover:bg-gray-800 border-b border-gray-800 text-left"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-white">Proposta aceita!</p>
                            <p className="text-xs text-gray-400 mt-1">Seu projeto com Maria Santos foi aprovado</p>
                            <p className="text-xs text-gray-500 mt-1">há 1 hora</p>
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleNotificationClick(3)}
                        className="w-full p-3 hover:bg-gray-800 border-b border-gray-800 text-left"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-white">Nova mensagem</p>
                            <p className="text-xs text-gray-400 mt-1">João Oliveira enviou uma mensagem</p>
                            <p className="text-xs text-gray-500 mt-1">há 3 horas</p>
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => handleNotificationClick(4)}
                        className="w-full p-3 hover:bg-gray-800 text-left"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className="text-sm text-white">Prazo se aproximando</p>
                            <p className="text-xs text-gray-400 mt-1">Website Institucional - entrega em 2 dias</p>
                            <p className="text-xs text-gray-500 mt-1">há 5 horas</p>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="p-3 border-t border-gray-700">
                      <button 
                        onClick={() => handleNotificationClick(999)}
                        className="w-full text-center text-sm text-[#00FFC8] hover:text-[#00FFC8]/80"
                      >
                        Ver todas as notificações
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => handleSettingsClick()}
                  className="p-2 hover:bg-gray-800 rounded-lg"
                >
                  <Settings className="w-5 h-5" />
                </button>
                
                {/* Dropdown de Configurações */}
                {showSettings && (
                  <div className="absolute right-0 top-12 w-64 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="font-semibold text-white">Configurações</h3>
                    </div>
                    <div className="py-2">
                      <button 
                        onClick={() => handleSettingsClick('edit-profile')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <Edit className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Editar Perfil</span>
                      </button>
                      <button 
                        onClick={() => handleSettingsClick('notifications')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <Bell className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Notificações</span>
                      </button>
                      <button 
                        onClick={() => handleSettingsClick('payments')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Pagamentos</span>
                      </button>
                      <button 
                        onClick={() => handleSettingsClick('account')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Conta</span>
                      </button>
                      <div className="border-t border-gray-700 mt-2 pt-2">
                        <button 
                          onClick={() => handleSettingsClick('support')}
                          className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                        >
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">Suporte</span>
                        </button>
                        <button 
                          onClick={() => handleSettingsClick('logout')}
                          className="w-full px-4 py-3 text-left hover:bg-gray-800 text-red-400"
                        >
                          <span className="text-sm">Sair</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 pb-20">
        {currentView === 'main' && (
          <>
            {activeTab === 'home' && renderHomeTab()}
            {activeTab === 'requests' && renderRequestsTab()}
            {activeTab === 'chat' && renderChatTab()}
            {activeTab === 'profile' && renderProfileTab()}
          </>
        )}
        {currentView === 'request-details' && renderRequestDetails()}
        {currentView === 'job-details' && renderJobDetails()}
        {currentView === 'edit-profile' && renderEditProfile()}
      </main>

      {/* Bottom Navigation - Only show in main view */}
      {currentView === 'main' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
          <div className="max-w-md mx-auto px-4">
            <div className="flex justify-around py-2">
              {[
                { id: 'home', icon: Home, label: 'Início' },
                { id: 'requests', icon: FileText, label: 'Solicitações' },
                { id: 'chat', icon: MessageCircle, label: 'Chat' },
                { id: 'profile', icon: User, label: 'Perfil' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? 'text-[#00FFC8] bg-[#00FFC8]/10' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}