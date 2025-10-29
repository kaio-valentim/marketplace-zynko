'use client'

import { useState } from 'react'
import { User, Settings, Car, BarChart3, MapPin, Clock, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [userType, setUserType] = useState<'client' | 'provider' | 'admin' | null>(null)

  // Handler para alterar endereço
  const handleChangeAddress = () => {
    const newAddress = prompt('Digite o novo endereço:', 'Rua das Flores, 123 - Centro');
    if (newAddress) {
      alert(`Endereço alterado para: ${newAddress}`);
    }
  };

  // Handler para solicitar novo serviço
  const handleRequestService = () => {
    alert('Redirecionando para solicitação de novo serviço...');
  };

  // Handler para serviços disponíveis
  const handleServiceClick = (serviceName: string) => {
    alert(`Abrindo categoria: ${serviceName}`);
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-gray-800 p-4">
          <div className="max-w-md mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">ServiApp</h1>
            <Settings className="w-6 h-6" />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-md mx-auto p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Bem-vindo</h2>
            <p className="text-gray-400 text-lg">Escolha como deseja acessar a plataforma</p>
          </div>

          <div className="space-y-4">
            {/* Cliente */}
            <button
              onClick={() => setUserType('client')}
              className="w-full bg-white text-black p-6 rounded-xl flex items-center space-x-4 hover:bg-gray-100 transition-colors"
            >
              <div className="bg-black text-white p-3 rounded-full">
                <User className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">Sou Cliente</h3>
                <p className="text-gray-600">Solicitar serviços</p>
              </div>
            </button>

            {/* Prestador */}
            <Link href="/provider">
              <button className="w-full bg-gray-900 text-white p-6 rounded-xl flex items-center space-x-4 hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="bg-white text-black p-3 rounded-full">
                  <Car className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Sou Prestador</h3>
                  <p className="text-gray-400">Oferecer serviços</p>
                </div>
              </button>
            </Link>

            {/* Admin */}
            <Link href="/admin">
              <button className="w-full bg-gray-900 text-white p-6 rounded-xl flex items-center space-x-4 hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="bg-white text-black p-3 rounded-full">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">Sou Administrador</h3>
                  <p className="text-gray-400">Gerenciar plataforma</p>
                </div>
              </button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // Dashboard Cliente
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setUserType(null)}
              className="text-gray-400 hover:text-white"
            >
              ←
            </button>
            <h1 className="text-xl font-bold">Olá, João</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/client">
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto p-6 space-y-6">
        {/* Localização Atual */}
        <div className="bg-gray-900 p-4 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <MapPin className="w-5 h-5 text-white" />
            <span className="font-semibold">Sua localização</span>
          </div>
          <p className="text-gray-400">Rua das Flores, 123 - Centro</p>
          <button 
            onClick={handleChangeAddress}
            className="text-white text-sm mt-2 underline hover:text-gray-300 transition-colors"
          >
            Alterar endereço
          </button>
        </div>

        {/* Serviços Disponíveis */}
        <div>
          <h3 className="text-xl font-bold mb-4">Serviços Disponíveis</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleServiceClick('Manutenção')}
              className="bg-white text-black p-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-2xl mb-2">🔧</div>
              <h4 className="font-bold">Manutenção</h4>
              <p className="text-sm text-gray-600">Reparos domésticos</p>
            </button>
            <button 
              onClick={() => handleServiceClick('Limpeza')}
              className="bg-white text-black p-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-2xl mb-2">🧹</div>
              <h4 className="font-bold">Limpeza</h4>
              <p className="text-sm text-gray-600">Limpeza residencial</p>
            </button>
            <button 
              onClick={() => handleServiceClick('Mudança')}
              className="bg-white text-black p-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-2xl mb-2">🚚</div>
              <h4 className="font-bold">Mudança</h4>
              <p className="text-sm text-gray-600">Transporte de móveis</p>
            </button>
            <button 
              onClick={() => handleServiceClick('Tecnologia')}
              className="bg-white text-black p-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-2xl mb-2">💻</div>
              <h4 className="font-bold">Tecnologia</h4>
              <p className="text-sm text-gray-600">Suporte técnico</p>
            </button>
          </div>
        </div>

        {/* Histórico Recente */}
        <div>
          <h3 className="text-xl font-bold mb-4">Serviços Recentes</h3>
          <div className="space-y-3">
            <div className="bg-gray-900 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">Limpeza Residencial</h4>
                  <p className="text-gray-400 text-sm">Maria Silva</p>
                </div>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Concluído</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>2h</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9</span>
                </div>
                <span>R$ 120,00</span>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">Reparo Elétrico</h4>
                  <p className="text-gray-400 text-sm">Carlos Santos</p>
                </div>
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Concluído</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>1h 30min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>5.0</span>
                </div>
                <span>R$ 85,00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Principal */}
        <button 
          onClick={handleRequestService}
          className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          Solicitar Novo Serviço
        </button>
      </main>
    </div>
  )
}