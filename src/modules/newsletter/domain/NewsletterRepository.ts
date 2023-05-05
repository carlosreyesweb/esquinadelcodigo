import { Subscriber } from './Subscriber'

export interface NewsletterRepository {
  subscribe(subscriber: Subscriber): Promise<void>
}
