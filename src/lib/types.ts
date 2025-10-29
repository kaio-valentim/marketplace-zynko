// Tipos e interfaces do ZYNKO

export type UserType = 'client' | 'provider' | 'admin';

export type ServiceStatus = 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'disputed';

export type ProviderStatus = 'pending_approval' | 'approved' | 'rejected' | 'suspended';

export type PaymentStatus = 'pending' | 'in_escrow' | 'released' | 'refunded';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  userType: UserType;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client extends User {
  city: string;
  state: string;
  zipCode: string;
  rating: number;
  totalServices: number;
}

export interface Provider extends User {
  cpfCnpj: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  portfolioUrl?: string;
  profileImage?: string;
  categories: string[];
  status: ProviderStatus;
  rating: number;
  totalServices: number;
  verificationDocuments?: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  subcategories: ServiceSubcategory[];
}

export interface ServiceSubcategory {
  id: string;
  name: string;
  categoryId: string;
}

export interface ServiceRequest {
  id: string;
  clientId: string;
  categoryId: string;
  subcategoryId: string;
  title: string;
  description: string;
  maxBudget: number;
  deadline: Date;
  isLocal: boolean;
  radius?: number; // em km, apenas para serviços locais
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  attachments?: string[];
  status: ServiceStatus;
  selectedProviderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceProposal {
  id: string;
  serviceRequestId: string;
  providerId: string;
  proposedPrice: number;
  proposedDeadline: Date;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Transaction {
  id: string;
  serviceRequestId: string;
  clientId: string;
  providerId: string;
  amount: number;
  platformFee: number; // 15% padrão
  paymentMethod: string;
  status: PaymentStatus;
  createdAt: Date;
  releasedAt?: Date;
}

export interface ChatMessage {
  id: string;
  serviceRequestId: string;
  senderId: string;
  message: string;
  attachments?: string[];
  timestamp: Date;
}

export interface Review {
  id: string;
  serviceRequestId: string;
  reviewerId: string;
  reviewedId: string;
  rating: number; // 1-5
  comment: string;
  createdAt: Date;
}

// Categorias de serviços conforme especificação
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'admin-contabilidade',
    name: 'Administração & Contabilidade',
    subcategories: [
      { id: 'contabilidade', name: 'Contabilidade', categoryId: 'admin-contabilidade' },
      { id: 'consultoria-financeira', name: 'Consultoria Financeira', categoryId: 'admin-contabilidade' },
      { id: 'gestao-empresarial', name: 'Gestão Empresarial', categoryId: 'admin-contabilidade' },
    ]
  },
  {
    id: 'advogados-leis',
    name: 'Advogados & Leis',
    subcategories: [
      { id: 'direito-civil', name: 'Direito Civil', categoryId: 'advogados-leis' },
      { id: 'direito-trabalhista', name: 'Direito Trabalhista', categoryId: 'advogados-leis' },
      { id: 'direito-empresarial', name: 'Direito Empresarial', categoryId: 'advogados-leis' },
    ]
  },
  {
    id: 'design-criacao',
    name: 'Design & Criação',
    subcategories: [
      { id: 'design-grafico', name: 'Design Gráfico', categoryId: 'design-criacao' },
      { id: 'ui-ux', name: 'UI/UX Design', categoryId: 'design-criacao' },
      { id: 'branding', name: 'Branding', categoryId: 'design-criacao' },
    ]
  },
  {
    id: 'educacao-consultoria',
    name: 'Educação & Consultoria',
    subcategories: [
      { id: 'aulas-particulares', name: 'Aulas Particulares', categoryId: 'educacao-consultoria' },
      { id: 'consultoria-negócios', name: 'Consultoria de Negócios', categoryId: 'educacao-consultoria' },
      { id: 'treinamentos', name: 'Treinamentos', categoryId: 'educacao-consultoria' },
    ]
  },
  {
    id: 'engenharia-arquitetura',
    name: 'Engenharia & Arquitetura',
    subcategories: [
      { id: 'projetos-arquitetonicos', name: 'Projetos Arquitetônicos', categoryId: 'engenharia-arquitetura' },
      { id: 'engenharia-civil', name: 'Engenharia Civil', categoryId: 'engenharia-arquitetura' },
      { id: 'design-interiores', name: 'Design de Interiores', categoryId: 'engenharia-arquitetura' },
    ]
  },
  {
    id: 'fotografia-audiovisual',
    name: 'Fotografia & Audiovisual',
    subcategories: [
      { id: 'fotografia', name: 'Fotografia', categoryId: 'fotografia-audiovisual' },
      { id: 'video-producao', name: 'Produção de Vídeo', categoryId: 'fotografia-audiovisual' },
      { id: 'edicao', name: 'Edição', categoryId: 'fotografia-audiovisual' },
    ]
  },
  {
    id: 'servicos-locais',
    name: 'Serviços Locais & Manutenção',
    subcategories: [
      { id: 'limpeza', name: 'Limpeza', categoryId: 'servicos-locais' },
      { id: 'manutencao', name: 'Manutenção', categoryId: 'servicos-locais' },
      { id: 'jardinagem', name: 'Jardinagem', categoryId: 'servicos-locais' },
    ]
  },
  {
    id: 'web-mobile-software',
    name: 'Web, Mobile & Software',
    subcategories: [
      { id: 'desenvolvimento-web', name: 'Desenvolvimento Web', categoryId: 'web-mobile-software' },
      { id: 'apps-mobile', name: 'Apps Mobile', categoryId: 'web-mobile-software' },
      { id: 'software-personalizado', name: 'Software Personalizado', categoryId: 'web-mobile-software' },
    ]
  },
];