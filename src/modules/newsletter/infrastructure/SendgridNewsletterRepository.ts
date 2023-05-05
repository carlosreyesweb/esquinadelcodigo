import { Client } from '@sendgrid/client'
import { config } from 'config'
import { NewsletterRepository } from '../domain/NewsletterRepository'
import { Subscriber } from '../domain/Subscriber'

const sgApi = new Client()
sgApi.setApiKey(config.sendGrid.apiKey!)

export class SendgridNewsletterRepository implements NewsletterRepository {
  private client = sgApi
  private listId = config.sendGrid.listId!

  async subscribe(subscriber: Subscriber) {
    await this.client.request({
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        list_ids: [this.listId],
        contacts: [subscriber],
      },
    })
  }
}
