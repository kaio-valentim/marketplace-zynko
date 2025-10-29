'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Star, Clock, Phone } from 'lucide-react'

// Importação dinâmica do mapa para evitar problemas de SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)
const Circle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Circle),
  { ssr: false }
)

interface ServiceProvider {
  id: number
  name: string
  service: string
  rating: number
  distance: string
  price: string
  lat: number
  lng: number
  phone: string
  available: boolean
  responseTime: string
}

export default function ServiceMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null)

  // Prestadores de serviço simulados próximos (dentro de 20km)
  const serviceProviders: ServiceProvider[] = [
    {
      id: 1,
      name: 'Maria Silva',
      service: 'Limpeza Residencial',
      rating: 4.9,
      distance: '2.3 km',
      price: 'R$ 80-120',
      lat: -23.5505,
      lng: -46.6333,
      phone: '(11) 99999-1111',
      available: true,
      responseTime: '15 min'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      service: 'Reparo Elétrico',
      rating: 5.0,
      distance: '1.8 km',
      price: 'R$ 60-100',
      lat: -23.5515,
      lng: -46.6343,
      phone: '(11) 99999-2222',
      available: true,
      responseTime: '10 min'
    },
    {
      id: 3,
      name: 'João Lima',
      service: 'Encanamento',
      rating: 4.8,
      distance: '3.1 km',
      price: 'R$ 70-90',
      lat: -23.5495,
      lng: -46.6323,
      phone: '(11) 99999-3333',
      available: false,
      responseTime: '30 min'
    },
    {
      id: 4,
      name: 'Ana Costa',
      service: 'Jardinagem',
      rating: 4.7,
      distance: '4.2 km',
      price: 'R$ 50-80',
      lat: -23.5525,
      lng: -46.6353,
      phone: '(11) 99999-4444',
      available: true,
      responseTime: '20 min'
    },
    {
      id: 5,
      name: 'Pedro Transportes',
      service: 'Mudança',
      rating: 4.6,
      distance: '5.8 km',
      price: 'R$ 200-400',
      lat: -23.5485,
      lng: -46.6313,
      phone: '(11) 99999-5555',
      available: true,
      responseTime: '45 min'
    },
    {
      id: 6,
      name: 'Lucia Pintora',
      service: 'Pintura',
      rating: 4.9,
      distance: '7.2 km',
      price: 'R$ 150-300',
      lat: -23.5535,
      lng: -46.6363,
      phone: '(11) 99999-6666',
      available: true,
      responseTime: '25 min'
    }
  ]

  useEffect(() => {
    // Função para obter localização do usuário
    const getUserLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocalização não é suportada pelo seu navegador')
        setLoading(false)
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
          setLoading(false)
        },
        (error) => {
          console.error('Erro ao obter localização:', error)
          // Usar localização padrão (São Paulo) se não conseguir obter GPS
          setUserLocation({
            lat: -23.5505,
            lng: -46.6333
          })
          setError('Usando localização padrão. Permita acesso ao GPS para melhor precisão.')
          setLoading(false)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutos
        }
      )
    }

    getUserLocation()
  }, [])

  const handleProviderClick = (provider: ServiceProvider) => {
    setSelectedProvider(provider)
  }

  const handleContactProvider = (provider: ServiceProvider) => {
    alert(`Entrando em contato com ${provider.name}...\n\nServiço: ${provider.service}\nTelefone: ${provider.phone}\nTempo de resposta: ${provider.responseTime}\nPreço estimado: ${provider.price}\n\nVocê será redirecionado para o WhatsApp.`)
  }

  const handleRequestService = (provider: ServiceProvider) => {
    alert(`Solicitando serviço para ${provider.name}...\n\nServiço: ${provider.service}\nDistância: ${provider.distance}\nPreço: ${provider.price}\nAvaliação: ${provider.rating}⭐\n\nSua solicitação foi enviada!\nO prestador entrará em contato em até ${provider.responseTime}.`)
  }

  if (loading) {
    return (
      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Prestadores Próximos
        </h3>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p className="text-gray-400">Obtendo sua localização...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!userLocation) {
    return (
      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          Prestadores Próximos
        </h3>
        <div className="text-center py-8">
          <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 mb-2">Não foi possível obter sua localização</p>
          {error && <p className="text-yellow-400 text-sm">{error}</p>}
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <MapPin className="w-5 h-5 mr-2" />
        Prestadores Próximos (20km)
      </h3>
      
      {error && (
        <div className="bg-yellow-900/20 border border-yellow-600 text-yellow-400 p-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      {/* Mapa */}
      <div className="h-64 rounded-lg overflow-hidden mb-4 relative">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          className="z-10"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Círculo de 20km */}
          <Circle
            center={[userLocation.lat, userLocation.lng]}
            radius={20000} // 20km em metros
            pathOptions={{
              color: '#3B82F6',
              fillColor: '#3B82F6',
              fillOpacity: 0.1,
              weight: 2
            }}
          />
          
          {/* Marcador do usuário */}
          <Marker position={[userLocation.lat, userLocation.lng]}>
            <Popup>
              <div className="text-center">
                <strong>Sua Localização</strong>
                <br />
                <span className="text-sm text-gray-600">Você está aqui</span>
              </div>
            </Popup>
          </Marker>
          
          {/* Marcadores dos prestadores */}
          {serviceProviders.map((provider) => (
            <Marker
              key={provider.id}
              position={[provider.lat, provider.lng]}
              eventHandlers={{
                click: () => handleProviderClick(provider)
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-sm">{provider.name}</strong>
                    <div className={`w-2 h-2 rounded-full ${provider.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{provider.service}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span>{provider.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{provider.distance}</span>
                    <span>•</span>
                    <span>{provider.price}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Responde em {provider.responseTime}</span>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleContactProvider(provider)}
                      className="flex-1 bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Contato
                    </button>
                    <button
                      onClick={() => handleRequestService(provider)}
                      className="flex-1 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700 transition-colors"
                    >
                      Solicitar
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Lista de prestadores */}
      <div className="space-y-3">
        <h4 className="font-semibold text-white text-sm">Prestadores Disponíveis</h4>
        <div className="max-h-48 overflow-y-auto space-y-2">
          {serviceProviders.filter(p => p.available).map((provider) => (
            <div
              key={provider.id}
              className="bg-gray-800 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => handleProviderClick(provider)}
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h5 className="font-semibold text-white text-sm">{provider.name}</h5>
                  <p className="text-gray-400 text-xs">{provider.service}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="text-white text-xs font-semibold">{provider.rating}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{provider.distance}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{provider.responseTime}</span>
                </div>
                <span className="text-white text-xs font-semibold">{provider.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalhes do prestador selecionado */}
      {selectedProvider && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-sm w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">{selectedProvider.name}</h3>
              <button
                onClick={() => setSelectedProvider(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Serviço</p>
                <p className="text-white font-semibold">{selectedProvider.service}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-gray-400 text-sm">Avaliação</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-white font-semibold">{selectedProvider.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Distância</p>
                  <p className="text-white font-semibold">{selectedProvider.distance}</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Preço estimado</p>
                <p className="text-white font-semibold">{selectedProvider.price}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">Tempo de resposta</p>
                <p className="text-white font-semibold">{selectedProvider.responseTime}</p>
              </div>
              
              <div className="flex space-x-2 pt-4">
                <button
                  onClick={() => {
                    handleContactProvider(selectedProvider)
                    setSelectedProvider(null)
                  }}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contatar</span>
                </button>
                <button
                  onClick={() => {
                    handleRequestService(selectedProvider)
                    setSelectedProvider(null)
                  }}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Solicitar Serviço
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}