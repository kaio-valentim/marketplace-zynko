'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-gray-400 text-lg">
            Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFC8]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFC8]"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00FFC8]"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="suporte">Suporte Técnico</option>
                  <option value="duvida">Dúvida sobre Serviços</option>
                  <option value="pagamento">Problemas com Pagamento</option>
                  <option value="conta">Problemas com Conta</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FFC8] resize-none"
                  placeholder="Descreva sua dúvida ou problema..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FFC8] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00FFC8]/90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00FFC8]/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#00FFC8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Chat Online</h3>
                    <p className="text-gray-400">Disponível 24/7</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00FFC8]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#00FFC8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-gray-400">(11) 9999-9999</p>
                    <p className="text-sm text-gray-500">Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00FFC8]/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00FFC8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-gray-400">suporte@zynko.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00FFC8]/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#00FFC8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-gray-400">São Paulo, SP</p>
                    <p className="text-sm text-gray-500">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-8">
              <Link
                href="/help"
                className="inline-flex items-center space-x-2 text-[#00FFC8] hover:text-[#00FFC8]/80 transition-colors"
              >
                <span>Consulte nossa Central de Ajuda</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}