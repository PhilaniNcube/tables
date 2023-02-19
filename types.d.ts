interface Database {
  public: {
    Tables: {
      Restaurant: {
        Row: {
          id: number
          name: string
          main_image: string
          images: string[]
          description: string
          open_time: string
          close_time: string
          slug: string
          price: 'CHEAP'|"REGULAR"|"EXPENSIVE"
          location_id: {
            id: number
            name: string
            created_at: string
            updated_at: string
          }
          cuisine_id: {
            id: number
            name: string
            created_at: string
            updated_at: string
          }
          created_at: string
          updated_at: string
        } // The data expected to be returned from a "select" statement.
        Insert: {
           id?: number
          name?: string
          main_image?: string
          images?: string[]
          description?: string
          open_time?: string
          close_time?: string
          slug?: string
          price?: 'CHEAP'|"REGULAR"|"EXPENSIVE"
          location_id?: number
          cuisine_id?: number
          updated_at?: string
        } // The data expected passed to an "insert" statement.
        Update: {
          id?: number
          name?: string
          main_image?: string
          images?: string[]
          descriptions?: string
          open_time?: string
          close_time?: string
          slug?: string
          price?: 'CHEAP'|"REGULAR"|"EXPENSIVE"
          location_id?: number
          cuisine_id?: number
          updated_at?: string
        } // The data expected passed to an "update" statement.
      }
      Cuisine: {
        Row: {
            id: number
            name: string
            created_at: string
            updated_at: string
        }
        Update: {
            id?: number
            name?: string
            created_at?: string
            updated_at?: string
        }
        Insert: {
            id?: number
            name?: string
            created_at?: string
            updated_at?: string
        }
      }
      Location : {
         Row: {
            id: number
            name: string
            created_at: string
            updated_at: string
        }
        Update: {
            id?: number
            name?: string
            created_at?: string
            updated_at?: string
        }
        Insert: {
            id?: number
            name?: string
            created_at?: string
            updated_at?: string
        }
      }
      Item : {
        Row : {
          id: number
          name: string
          description: string
          price:string
          restaurant_id: {
           id: number
          name: string
          main_image: string
          images: string[]
          description: string
          open_time: string
          close_time: string
          slug: string
          price: 'CHEAP'|"REGULAR"|"EXPENSIVE"

          }
        }
        Update: {
           id?: number
          name?: string
          description?: string
          restaurant_id?: number
        }
        Insert: {
          id?: number
          name?: string
          description?: string
          restaurant_id?:number
        }
      }
    }

  }
}
