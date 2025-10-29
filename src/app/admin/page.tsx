'use client'

import { useState } from 'react'
import { BarChart3, Users, DollarSign, TrendingUp, Settings, Bell, Search, Filter, Eye, Edit, Trash2, Plus } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Usuários Ativos', value: '12.5K', change: '+12%', icon: Users },
    { label: 'Receita Mensal', value: 'R$ 45.2K', change: '+8%', icon: DollarSign },
    { label: 'Serviços Realizados', value: '3.2K', change: '+15%', icon: BarChart3 },
    { label: 'Taxa de Crescimento', value: '23%', change: '+5%', icon: TrendingUp },
  ]

  const recentUsers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', type: 'Cliente', status: 'Ativo', joinDate: '15/02/2024' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', type: 'Prestador', status: 'Ativo', joinDate: '14/02/2024' },
    { id: 3, name: 'Carlos Lima', email: 'carlos@email.com', type: 'Cliente', status: 'Inativo', joinDate: '13/02/2024' },
    { id: 4, name: 'Ana Costa', email: 'ana@email.com', type: 'Prestador', status: 'Pendente', joinDate: '12/02/2024' },
  ]

  const recentServices = [
    { id: 1, service: 'Limpeza Residencial', client: 'João Silva', provider: 'Maria Santos', value: 'R$ 120', status: 'Concluído' },
    { id: 2, service: 'Reparo Elétrico', client: 'Ana Costa', provider: 'Carlos Lima', value: 'R$ 85', status: 'Em Andamento' },
    { id: 3, service: 'Mudança', client: 'Pedro Souza', provider: 'José Santos', value: 'R$ 350', status: 'Agendado' },
  ]

  // Handlers para ações dos usuários
  const handleNewUser = () => {
    const userData = prompt('Criar novo usuário:\n\nDigite os dados no formato:\nNome, Email, Tipo (Cliente/Prestador)')
    if (userData && userData.trim()) {
      alert(`✅ Novo usuário criado com sucesso!\n\nDados: ${userData}\n\n📧 O usuário receberá um e-mail de boas-vindas\n🔐 Senha temporária será enviada por e-mail\n📱 Acesso liberado imediatamente`)
    }
  }

  const handleViewUser = (userId: number) => {
    const user = recentUsers.find(u => u.id === userId)
    if (user) {
      alert(`👤 Detalhes do Usuário:\n\n📋 INFORMAÇÕES BÁSICAS:\nNome: ${user.name}\nEmail: ${user.email}\nTipo: ${user.type}\nStatus: ${user.status}\nData de Cadastro: ${user.joinDate}\n\n📊 ESTATÍSTICAS:\n• Serviços realizados: ${Math.floor(Math.random() * 50) + 1}\n• Avaliação média: ${(4 + Math.random()).toFixed(1)}⭐\n• Último acesso: ${Math.floor(Math.random() * 24) + 1}h atrás\n\n💰 FINANCEIRO:\n• Valor total movimentado: R$ ${(Math.random() * 5000 + 500).toFixed(2)}\n• Comissão gerada: R$ ${(Math.random() * 500 + 50).toFixed(2)}`)
    }
  }

  const handleEditUser = (userId: number) => {
    const user = recentUsers.find(u => u.id === userId)
    if (user) {
      const newData = prompt(`✏️ Editar usuário: ${user.name}\n\n📋 DADOS ATUAIS:\nNome: ${user.name}\nEmail: ${user.email}\nTipo: ${user.type}\nStatus: ${user.status}\n\n📝 Digite os novos dados separados por vírgula:\n(Nome, Email, Tipo, Status)`)
      if (newData && newData.trim()) {
        alert(`✅ Usuário ${user.name} atualizado com sucesso!\n\n📝 Novos dados: ${newData}\n\n📧 Usuário será notificado das alterações\n🔄 Alterações aplicadas imediatamente`)
      }
    }
  }

  const handleDeleteUser = (userId: number) => {
    const user = recentUsers.find(u => u.id === userId)
    if (user) {
      if (confirm(`⚠️ ATENÇÃO: Exclusão de usuário\n\nTem certeza que deseja excluir:\n👤 ${user.name}\n📧 ${user.email}\n\n❌ Esta ação NÃO pode ser desfeita!\n\n✅ Todos os dados serão permanentemente removidos:\n• Perfil e informações pessoais\n• Histórico de serviços\n• Conversas e mensagens\n• Avaliações e comentários`)) {
        alert(`✅ Usuário excluído com sucesso!\n\n👤 ${user.name} foi removido do sistema\n\n🗑️ DADOS REMOVIDOS:\n• Perfil completo\n• Histórico de transações\n• Conversas e mensagens\n• Avaliações recebidas/enviadas\n\n📧 E-mail de confirmação enviado para o administrador`)
      }
    }
  }

  const handleUserSettings = (userId: number) => {
    const user = recentUsers.find(u => u.id === userId)
    if (user) {
      alert(`⚙️ Configurações para ${user.name}:\n\n🔧 OPÇÕES DISPONÍVEIS:\n\n🔐 SEGURANÇA:\n• Redefinir senha\n• Bloquear/Desbloquear conta\n• Ativar autenticação 2FA\n• Histórico de logins\n\n👤 PERFIL:\n• Alterar permissões\n• Configurar visibilidade\n• Gerenciar dados pessoais\n\n📱 NOTIFICAÇÕES:\n• Configurar alertas\n• Preferências de e-mail\n• Notificações push\n\n📊 RELATÓRIOS:\n• Atividades recentes\n• Histórico completo\n• Relatório de performance\n\n⚠️ AÇÕES ADMINISTRATIVAS:\n• Suspender temporariamente\n• Aplicar advertência\n• Histórico de penalidades`)
    }
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-6 h-6 text-white" />
              <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 p-4 rounded-xl">
        <h3 className="text-lg font-bold text-white mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white text-sm">Novo usuário cadastrado: João Silva</p>
              <p className="text-gray-400 text-xs">Há 5 minutos</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white text-sm">Serviço concluído: Limpeza Residencial</p>
              <p className="text-gray-400 text-xs">Há 12 minutos</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-white text-sm">Pagamento processado: R$ 120,00</p>
              <p className="text-gray-400 text-xs">Há 18 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Gerenciar Usuários</h3>
        <button 
          onClick={handleNewUser}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Usuário</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar usuários..."
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-white focus:outline-none"
          />
        </div>
        <button 
          onClick={() => alert('🔍 Filtros Disponíveis:\n\n👥 POR TIPO:\n• Clientes\n• Prestadores de serviço\n• Administradores\n\n📊 POR STATUS:\n• Ativos\n• Inativos\n• Pendentes de aprovação\n• Suspensos\n\n📅 POR DATA:\n• Cadastrados hoje\n• Últimos 7 dias\n• Último mês\n• Período personalizado\n\n📍 POR LOCALIZAÇÃO:\n• Por estado\n• Por cidade\n• Por região\n\n⭐ POR AVALIAÇÃO:\n• 5 estrelas\n• 4+ estrelas\n• 3+ estrelas\n• Sem avaliação')}
          className="bg-gray-800 text-white p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Users List */}
      <div className="space-y-3">
        {recentUsers.map((user) => (
          <div key={user.id} className="bg-gray-900 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-white">{user.name}</h4>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  user.status === 'Ativo' ? 'bg-green-600 text-white' :
                  user.status === 'Inativo' ? 'bg-red-600 text-white' :
                  'bg-yellow-600 text-black'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4 text-gray-400">
                <span>{user.type}</span>
                <span>Desde {user.joinDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleViewUser(user.id)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800"
                  title="Ver detalhes"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleEditUser(user.id)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800"
                  title="Editar usuário"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-gray-800"
                  title="Excluir usuário"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleUserSettings(user.id)}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-800"
                  title="Configurações"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderServices = () => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Serviços</h3>
        <button 
          onClick={() => alert('📊 Relatório Completo de Serviços:\n\n📈 ESTATÍSTICAS GERAIS:\n• Total de serviços: 3.247\n• Receita total: R$ 145.230,50\n• Taxa de conclusão: 94.2%\n• Avaliação média: 4.7⭐\n• Tempo médio de execução: 2.3h\n\n📅 PERÍODO ATUAL (Fevereiro 2024):\n• Serviços realizados: 287\n• Receita do mês: R$ 12.450,00\n• Crescimento: +15% vs mês anterior\n\n🏆 TOP CATEGORIAS:\n1. Limpeza Residencial (32%)\n2. Reparos Elétricos (18%)\n3. Encanamento (15%)\n4. Mudanças (12%)\n5. Jardinagem (10%)\n\n💰 FATURAMENTO POR REGIÃO:\n• São Paulo: R$ 45.200\n• Rio de Janeiro: R$ 32.100\n• Belo Horizonte: R$ 18.900\n• Outras: R$ 49.030\n\n📋 Relatório detalhado disponível para download em PDF/Excel')}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Relatório Completo
        </button>
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {recentServices.map((service) => (
          <div key={service.id} className="bg-gray-900 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-white">{service.service}</h4>
                <p className="text-gray-400 text-sm">Cliente: {service.client}</p>
                <p className="text-gray-400 text-sm">Prestador: {service.provider}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{service.value}</p>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  service.status === 'Concluído' ? 'bg-green-600 text-white' :
                  service.status === 'Em Andamento' ? 'bg-blue-600 text-white' :
                  'bg-yellow-600 text-black'
                }`}>
                  {service.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-gray-400 hover:text-white">
              ←
            </Link>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => alert('🔔 Notificações do Admin:\n\n⚠️ PENDÊNCIAS:\n• 3 novos usuários aguardando aprovação\n• 2 relatórios de problemas não resolvidos\n• 1 solicitação de suporte em aberto\n\n📊 ALERTAS DO SISTEMA:\n• Sistema funcionando normalmente\n• Backup realizado com sucesso (02:00)\n• 99.8% de uptime nas últimas 24h\n\n💰 FINANCEIRO:\n• 5 pagamentos pendentes de processamento\n• Receita do dia: R$ 2.340,00\n• Meta mensal: 78% atingida\n\n🚨 SEGURANÇA:\n• Nenhuma tentativa de acesso suspeita\n• Certificado SSL válido até 15/08/2024\n• Última atualização de segurança: ontem')}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Bell className="w-5 h-5" />
            </button>
            <button 
              onClick={() => alert('⚙️ Configurações do Sistema:\n\n🔧 CONFIGURAÇÕES GERAIS:\n• Configurações da plataforma\n• Parâmetros de funcionamento\n• Políticas de uso\n• Termos de serviço\n\n👥 GERENCIAR ADMINISTRADORES:\n• Adicionar novos admins\n• Definir permissões\n• Histórico de ações\n• Controle de acesso\n\n💳 CONFIGURAÇÕES DE PAGAMENTO:\n• Gateways de pagamento\n• Taxas e comissões\n• Métodos aceitos\n• Configurações fiscais\n\n🔒 BACKUP E SEGURANÇA:\n• Backup automático\n• Configurações de segurança\n• Monitoramento de ameaças\n• Logs de auditoria\n\n📊 LOGS DO SISTEMA:\n• Logs de erro\n• Logs de acesso\n• Logs de transações\n• Relatórios de performance')}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-md mx-auto px-6 pt-4">
        <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'users' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Usuários
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'services' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Serviços
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'services' && renderServices()}
      </main>
    </div>
  )
}