import { supabase } from './supabase'

// Função para buscar dados do provedor
export async function getProviderData(providerId?: string) {
  try {
    const { data, error } = await supabase
      .from('providers')
      .select('*')
      .eq('email', 'carlos.santos@email.com')
      .single()

    if (error) {
      console.error('Erro ao buscar dados do provedor:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Erro na função getProviderData:', error)
    return null
  }
}

// Função para buscar solicitações disponíveis
export async function getAvailableRequests() {
  try {
    const { data, error } = await supabase
      .from('service_requests')
      .select('*')
      .eq('status', 'open')
      .order('posted_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar solicitações:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Erro na função getAvailableRequests:', error)
    return []
  }
}

// Função para buscar propostas do provedor
export async function getProviderProposals(providerId?: string) {
  try {
    const { data, error } = await supabase
      .from('proposals')
      .select('*')
      .order('sent_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar propostas:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Erro na função getProviderProposals:', error)
    return []
  }
}

// Função para buscar trabalhos ativos
export async function getActiveJobs(providerId?: string) {
  try {
    const { data, error } = await supabase
      .from('active_jobs')
      .select('*')
      .eq('status', 'in_progress')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar trabalhos ativos:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Erro na função getActiveJobs:', error)
    return []
  }
}

// Função para criar uma nova proposta
export async function createProposal(proposalData: {
  request_id: string
  request_title: string
  client_name: string
  proposed_price: number
  proposed_deadline: string
  message: string
}) {
  try {
    const { data, error } = await supabase
      .from('proposals')
      .insert([proposalData])
      .select()
      .single()

    if (error) {
      console.error('Erro ao criar proposta:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Erro na função createProposal:', error)
    return null
  }
}

// Função para atualizar progresso de um trabalho
export async function updateJobProgress(jobId: string, progress: number) {
  try {
    const { data, error } = await supabase
      .from('active_jobs')
      .update({ progress })
      .eq('id', jobId)
      .select()
      .single()

    if (error) {
      console.error('Erro ao atualizar progresso:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Erro na função updateJobProgress:', error)
    return null
  }
}