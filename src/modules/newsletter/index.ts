// @Infrastructure
import { SendgridNewsletterRepository } from './infrastructure/SendgridNewsletterRepository'
// @Application
import { subscribe } from './application/subscribe'
// @Domain
import { NewsletterRepository } from './domain/NewsletterRepository'
export type { Subscriber } from './domain/Subscriber'

export const sendgridNewsletterRepository = new SendgridNewsletterRepository()
export const postsService = createServiceWithUseCases(
  sendgridNewsletterRepository
)

function createServiceWithUseCases(repo: NewsletterRepository) {
  return {
    subscribe: subscribe(repo),
  }
}
