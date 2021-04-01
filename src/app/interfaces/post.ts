export interface Post {
  id: number
  body: string,
  categories: object,
  featured_image_thumb_url: string,
  featured_image_url: string,
  title: string,
  user: object,
  user_id: number,
  published_at?: string
}
