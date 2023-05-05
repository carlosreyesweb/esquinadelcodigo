import { NewsletterRepository } from '../domain/NewsletterRepository'
import { Subscriber } from '../domain/Subscriber'

export function subscribe(repo: NewsletterRepository) {
  return async (subscriber: Subscriber) => {
    await repo.subscribe(subscriber)
  }
}
