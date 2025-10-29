'use client'

import { useState } from 'react'
import { MapPin, Clock, Star, Search, Filter, Plus, User, Settings, Bell } from 'lucide-react'
import Link from 'next/link'
import ServiceMap from '@/components/ServiceMap'

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const serviceHistory = [
    {
      id: 1,
      service: 'Limpeza Residencial',
      provider: 'Maria Silva',
      date: '15/02/2024',
      time: '14:30',
      duration: '2h',
      price: 'R$ 120',
      rating: 4.9,
      status: 'Concluído'
    },
    {
      id: 2,
      service: 'Reparo Elétrico',
      provider: 'Carlos Santos',
      date: '12/02/2024',
      time: '09:00',
      duration: '1h 30min',
      price: 'R$ 85',
      rating: 5.0,
      status: 'Concluído'
    },
    {
      id: 3,
      service: 'Encanamento',
      provider: 'João Lima',
      date: '08/02/2024',
      time: '16:00',
      duration: '45min',
      price: 'R$ 70',
      rating: 4.8,
      status: 'Concluído'
    }
  ]

  const activeBookings = [
    {
      id: 1,
      service: 'Mudança',
      provider: 'Pedro Transportes',
      date: '18/02/2024',
      time: '08:00',
      status: 'Agendado',
      address: 'Rua das Flores, 123'
    }
  ]

  const handleNotificationClick = (notificationId?: number) => {
    if (notificationId) {
      // Lógica específica para cada notificação
      console.log(`Clicou na notificação ${notificationId}`)
      alert(`Abrindo notificação ${notificationId}...`)
      setShowNotifications(false)
    } else {
      setShowNotifications(!showNotifications)
      setShowSettings(false)
    }
  }

  const handleSettingsClick = (action?: string) => {
    if (action) {
      switch (action) {
        case 'profile':
          console.log('Editar perfil')
          alert('Abrindo edição de perfil...\n\nFuncionalidades:\n• Alterar foto de perfil\n• Editar informações pessoais\n• Configurar preferências\n• Histórico de atividades')
          setShowSettings(false)
          break
        case 'notifications':
          console.log('Configurações de notificações')
          alert('Configurações de Notificações:\n\n• Notificações push\n• E-mail de confirmação\n• SMS para serviços urgentes\n• Lembretes de agendamento\n• Ofertas e promoções')
          setShowSettings(false)
          break
        case 'payments':
          console.log('Histórico de pagamentos')
          alert('Histórico de Pagamentos:\n\n• Cartão de crédito: **** 1234\n• PIX cadastrado\n• Histórico de transações\n• Faturas em aberto\n• Métodos de pagamento')
          setShowSettings(false)
          break
        case 'account':
          console.log('Configurações da conta')
          alert('Configurações da Conta:\n\n• Alterar senha\n• Configurações de privacidade\n• Dados pessoais\n• Endereços salvos\n• Preferências de serviço')
          setShowSettings(false)
          break
        case 'support':
          console.log('Suporte')
          alert('Ajuda e Suporte:\n\n• Central de ajuda\n• Chat com suporte\n• FAQ - Perguntas frequentes\n• Reportar problema\n• Contato direto')
          setShowSettings(false)
          break
        case 'logout':
          console.log('Logout')
          if (confirm('Tem certeza que deseja sair?')) {
            alert('Fazendo logout...')
            // Aqui você pode redirecionar para a página de login
            window.location.href = '/'
          }
          setShowSettings(false)
          break
        default:
          break
      }
    } else {
      setShowSettings(!showSettings)
      setShowNotifications(false)
    }
  }

  // Handler para solicitar novo serviço
  const handleRequestNewService = () => {
    console.log('Solicitar novo serviço')
    alert('Formulário de Solicitação de Serviço:\n\n• Escolha o tipo de serviço\n• Descreva o que precisa\n• Selecione data e horário\n• Defina seu orçamento\n• Confirme seu endereço\n\nSeu pedido será enviado para prestadores próximos!')
    // Aqui você pode abrir um modal ou navegar para uma página de solicitação
  }

  // Handlers para as ações rápidas
  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'search':
        console.log('Buscar serviço')
        alert('Busca de Serviços:\n\nFuncionalidades:\n• Buscar por categoria\n• Filtrar por localização\n• Ver prestadores disponíveis\n• Comparar preços e avaliações\n• Agendar imediatamente')
        break
      case 'schedule':
        console.log('Agendar serviço')
        alert('Agendamento de Serviços:\n\nFuncionalidades:\n• Escolher data e horário\n• Selecionar prestador\n• Confirmar agendamento\n• Receber confirmação\n• Lembretes automáticos')
        break
      default:
        break
    }
  }

  // Handler para botões de próximos serviços
  const handleBookingAction = (action: string, bookingId: number) => {
    const booking = activeBookings.find(b => b.id === bookingId)
    switch (action) {
      case 'details':
        console.log(`Ver detalhes do agendamento ${bookingId}`)
        alert(`Detalhes do Serviço:\n\nServiço: ${booking?.service}\nPrestador: ${booking?.provider}\nData: ${booking?.date}\nHorário: ${booking?.time}\nEndereço: ${booking?.address}\nStatus: ${booking?.status}\n\nContato do prestador disponível`)
        break
      case 'cancel':
        console.log(`Cancelar agendamento ${bookingId}`)
        if (confirm('Tem certeza que deseja cancelar este serviço?')) {
          alert('Serviço cancelado com sucesso!\n\nVocê receberá um e-mail de confirmação.\nSe houver taxa de cancelamento, será informada.')
        }
        break
      default:
        break
    }
  }

  // Handler para botões de histórico
  const handleHistoryAction = (action: string, serviceId: number) => {
    const service = serviceHistory.find(s => s.id === serviceId)
    switch (action) {
      case 'details':
        console.log(`Ver detalhes do serviço ${serviceId}`)
        alert(`Detalhes do Serviço:\n\nServiço: ${service?.service}\nPrestador: ${service?.provider}\nData: ${service?.date}\nHorário: ${service?.time}\nDuração: ${service?.duration}\nPreço: ${service?.price}\nAvaliação: ${service?.rating}⭐\nStatus: ${service?.status}\n\nRecibo e fotos disponíveis`)
        break
      case 'repeat':
        console.log(`Solicitar novamente serviço ${serviceId}`)
        if (confirm(`Deseja solicitar novamente: ${service?.service} com ${service?.provider}?`)) {
          alert(`Solicitação enviada!\n\nServiço: ${service?.service}\nPrestador: ${service?.provider}\n\nVocê receberá uma confirmação em breve.\nO prestador entrará em contato para agendar.`)
        }
        break
      default:
        break
    }
  }

  // Handler para alterar endereço
  const handleChangeAddress = () => {
    const newAddress = prompt('Digite o novo endereço:', 'Rua das Flores, 123 - Centro, São Paulo')
    if (newAddress && newAddress.trim()) {
      alert(`Endereço alterado com sucesso!\n\nNovo endereço: ${newAddress}\n\nTodos os prestadores próximos foram atualizados com base na nova localização.`)
    }
  }

  // Handler para filtro no histórico
  const handleFilter = () => {
    alert('Filtros Disponíveis:\n\n• Por data (últimos 30 dias, 3 meses, 6 meses)\n• Por tipo de serviço\n• Por prestador\n• Por status (concluído, cancelado)\n• Por avaliação (4+ estrelas, 3+ estrelas)')
  }

  const renderHome = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-2">Olá, João! 👋</h2>
        <p className="text-gray-400">O que você precisa hoje?</p>
      </div>

      {/* Location */}
      <div className="bg-gray-900 p-4 rounded-xl">
        <div className="flex items-center space-x-3 mb-3">
          <MapPin className="w-5 h-5 text-white" />
          <span className="font-semibold text-white">Sua localização</span>
        </div>
        <p className="text-gray-400 mb-2">Rua das Flores, 123 - Centro, São Paulo</p>
        <button 
          onClick={handleChangeAddress}
          className="text-white text-sm underline hover:text-gray-300 transition-colors"
        >
          Alterar endereço
        </button>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleQuickAction('search')}
            className="bg-white text-black p-4 rounded-xl text-left hover:bg-gray-100 transition-colors"
          >
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="font-bold">Buscar Serviço</h4>
            <p className="text-sm text-gray-600">Encontre o que precisa</p>
          </button>
          <button 
            onClick={() => handleQuickAction('schedule')}
            className="bg-white text-black p-4 rounded-xl text-left hover:bg-gray-100 transition-colors"
          >
            <div className="text-2xl mb-2">📅</div>
            <h4 className="font-bold">Agendar</h4>
            <p className="text-sm text-gray-600">Marque para depois</p>
          </button>
        </div>
      </div>

      {/* Solicitar Novo Serviço */}
      <div>
        <button 
          onClick={handleRequestNewService}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Solicitar Novo Serviço</span>
        </button>
      </div>

      {/* Mapa com Prestadores Próximos - SUBSTITUINDO "Serviços Disponíveis" */}
      <div>
        <ServiceMap />
      </div>

      {/* Active Bookings */}
      {activeBookings.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Próximos Serviços</h3>
          <div className="space-y-3">
            {activeBookings.map((booking) => (
              <div key={booking.id} className="bg-gray-900 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{booking.service}</h4>
                    <p className="text-gray-400 text-sm">{booking.provider}</p>
                  </div>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {booking.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>📅 {booking.date}</span>
                  <span>🕐 {booking.time}</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">📍 {booking.address}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleBookingAction('details', booking.id)}
                    className="flex-1 bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Ver Detalhes
                  </button>
                  <button 
                    onClick={() => handleBookingAction('cancel', booking.id)}
                    className="flex-1 bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Services */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Serviços Recentes</h3>
        <div className="space-y-3">
          {serviceHistory.slice(0, 2).map((service) => (
            <div key={service.id} className="bg-gray-900 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-white">{service.service}</h4>
                  <p className="text-gray-400 text-sm">{service.provider}</p>
                </div>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {service.status}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{service.rating}</span>
                </div>
                <span>{service.price}</span>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => handleHistoryAction('details', service.id)}
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderHistory = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Histórico de Serviços</h3>
        <button 
          onClick={handleFilter}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {serviceHistory.map((service) => (
          <div key={service.id} className="bg-gray-900 p-4 rounded-xl">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-white">{service.service}</h4>
                <p className="text-gray-400 text-sm">{service.provider}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{service.price}</p>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {service.status}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
              <span>📅 {service.date}</span>
              <span>🕐 {service.time}</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-white font-semibold">{service.rating}</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleHistoryAction('details', service.id)}
                  className="bg-gray-800 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  Ver Detalhes
                </button>
                <button 
                  onClick={() => handleHistoryAction('repeat', service.id)}
                  className="bg-white text-black px-3 py-1 rounded text-sm hover:bg-gray-100 transition-colors"
                >
                  Solicitar Novamente
                </button>
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
            <h1 className="text-xl font-bold">Cliente</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <button 
                onClick={() => handleNotificationClick()}
                className="p-2 hover:bg-gray-800 rounded-lg relative"
              >
                <Bell className="w-5 h-5 text-gray-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
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
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm text-white">Serviço concluído</p>
                          <p className="text-xs text-gray-400 mt-1">Limpeza residencial foi finalizada</p>
                          <p className="text-xs text-gray-500 mt-1">há 30 minutos</p>
                        </div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNotificationClick(2)}
                      className="w-full p-3 hover:bg-gray-800 border-b border-gray-800 text-left"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm text-white">Nova proposta recebida</p>
                          <p className="text-xs text-gray-400 mt-1">Carlos Santos enviou uma proposta</p>
                          <p className="text-xs text-gray-500 mt-1">há 2 horas</p>
                        </div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNotificationClick(3)}
                      className="w-full p-3 hover:bg-gray-800 border-b border-gray-800 text-left"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm text-white">Lembrete de agendamento</p>
                          <p className="text-xs text-gray-400 mt-1">Mudança agendada para amanhã às 8h</p>
                          <p className="text-xs text-gray-500 mt-1">há 4 horas</p>
                        </div>
                      </div>
                    </button>
                    <button 
                      onClick={() => handleNotificationClick(4)}
                      className="w-full p-3 hover:bg-gray-800 text-left"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm text-white">Avaliação pendente</p>
                          <p className="text-xs text-gray-400 mt-1">Avalie o serviço de reparo elétrico</p>
                          <p className="text-xs text-gray-500 mt-1">há 1 dia</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="p-3 border-t border-gray-700">
                    <button 
                      onClick={() => handleNotificationClick(999)}
                      className="w-full text-center text-sm text-blue-400 hover:text-blue-300"
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
                className="bg-white text-black p-2 rounded-full hover:bg-gray-100"
              >
                <User className="w-4 h-4" />
              </button>
              
              {/* Dropdown de Configurações */}
              {showSettings && (
                <div className="absolute right-0 top-12 w-64 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50">
                  <div className="p-4 border-b border-gray-700">
                    <h3 className="font-semibold text-white">Minha Conta</h3>
                  </div>
                  <div className="py-2">
                    <button 
                      onClick={() => handleSettingsClick('profile')}
                      className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                    >
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Meu Perfil</span>
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
                      <Settings className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Pagamentos</span>
                    </button>
                    <button 
                      onClick={() => handleSettingsClick('account')}
                      className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Configurações</span>
                    </button>
                    <div className="border-t border-gray-700 mt-2 pt-2">
                      <button 
                        onClick={() => handleSettingsClick('support')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <Settings className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Ajuda e Suporte</span>
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
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-md mx-auto px-6 pt-4">
        <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'home' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'history' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
            }`}
          >
            Histórico
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-6">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'history' && renderHistory()}
      </main>
    </div>
  )
}