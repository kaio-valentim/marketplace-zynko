'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, Phone, Lock, User, MapPin, FileText, Camera, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

type AuthMode = 'login' | 'register-client' | 'register-provider';

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    city: '',
    state: '',
    zipCode: '',
    cpfCnpj: '',
    description: '',
    portfolioUrl: '',
    categories: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de autenticação
    console.log('Form submitted:', { mode, formData });
    
    // Simulação de redirecionamento após login/cadastro
    if (mode === 'login') {
      // Redirecionar baseado no tipo de usuário
      window.location.href = '/client'; // ou '/provider' baseado no login
    } else {
      alert('Cadastro realizado com sucesso! Aguarde aprovação.');
    }
  };

  const categories = [
    { id: 'design', name: 'Design & Criação' },
    { id: 'tech', name: 'Web, Mobile & Software' },
    { id: 'local', name: 'Serviços Locais' },
    { id: 'education', name: 'Educação & Consultoria' },
    { id: 'photo', name: 'Fotografia & Audiovisual' },
    { id: 'legal', name: 'Advogados & Leis' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
              <div className="w-8 h-8 bg-[#00FFC8] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Z</span>
              </div>
              <h1 className="text-2xl font-bold text-white">ZYNKO</h1>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Mode Selector */}
        {mode === 'login' && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h2>
            <p className="text-gray-400">Entre na sua conta ZYNKO</p>
          </div>
        )}

        {mode === 'register-client' && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Cadastro de Cliente</h2>
            <p className="text-gray-400">Crie sua conta para solicitar serviços</p>
          </div>
        )}

        {mode === 'register-provider' && (
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Cadastro de Prestador</h2>
            <p className="text-gray-400">Cadastre-se para oferecer seus serviços</p>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Login Form */}
          {mode === 'login' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="Sua senha"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90 transition-colors"
              >
                Entrar
              </button>

              <div className="text-center space-y-4">
                <p className="text-gray-400">
                  Não tem conta?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register-client')}
                    className="text-[#00FFC8] hover:underline"
                  >
                    Cadastre-se como Cliente
                  </button>
                </p>
                <p className="text-gray-400">
                  É prestador de serviços?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register-provider')}
                    className="text-[#00FFC8] hover:underline"
                  >
                    Cadastre-se aqui
                  </button>
                </p>
              </div>
            </>
          )}

          {/* Client Registration */}
          {mode === 'register-client' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="São Paulo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Estado</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="SP"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CEP</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="00000-000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="Crie uma senha"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90 transition-colors"
              >
                Criar Conta de Cliente
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-gray-400 hover:text-[#00FFC8]"
                >
                  Já tem conta? Faça login
                </button>
              </div>
            </>
          )}

          {/* Provider Registration */}
          {mode === 'register-provider' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">CPF/CNPJ</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="000.000.000-00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Descrição Profissional</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none resize-none"
                  placeholder="Descreva sua experiência e especialidades..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Categorias de Serviços</label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.categories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        className="w-4 h-4 text-[#00FFC8] bg-gray-900 border-gray-700 rounded focus:ring-[#00FFC8]"
                      />
                      <span className="text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00FFC8] focus:outline-none"
                    placeholder="Crie uma senha"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  ⚠️ Seu perfil passará por aprovação antes de receber solicitações. Isso pode levar até 24 horas.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FFC8] text-black py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90 transition-colors"
              >
                Criar Conta de Prestador
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-gray-400 hover:text-[#00FFC8]"
                >
                  Já tem conta? Faça login
                </button>
              </div>
            </>
          )}
        </form>

        {/* Social Login Options */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">Ou continue com</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Google
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-700 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}