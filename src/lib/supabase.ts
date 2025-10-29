import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface Provider {
  id: string
  name: string
  email: string
  category: string
  rating: number
  total_services: number
  approval_rate: number
  status: 'pending_approval' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

export interface ServiceRequest {
  id: string
  title: string
  description: string
  category: string
  client_name: string
  client_rating: number
  max_budget: number
  deadline: string
  location: string
  distance: string | null
  is_local: boolean
  posted_at: string
  proposals_count: number
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
}

export interface Proposal {
  id: string
  request_id: string
  provider_id: string
  request_title: string
  client_name: string
  proposed_price: number
  proposed_deadline: string
  status: 'pending' | 'accepted' | 'rejected'
  sent_at: string
  message: string
}

export interface ActiveJob {
  id: string
  title: string
  client_name: string
  progress: number
  deadline: string
  value: number
  status: 'in_progress' | 'completed' | 'paused'
  provider_id: string
}