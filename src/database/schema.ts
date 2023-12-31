export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          body: string | null
          created_at: string
          id: number
          tags: string[] | null
          title: string | null
          url: string | null
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
          url?: string | null
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      tag: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
