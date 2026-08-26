import type { Client } from '../client.js'

export type User = { firstName: string; lastName: string; email: string }

export class Users extends Array<User> {

    constructor(private client: Client) { super() }

    list() { return [...this.client.users] }

    create(data: { firstName: string; lastName: string; domainName?: string; email?: string }) {
        const firstName = data.firstName
        const lastName = data.lastName
        const domainName = data.domainName ? data.domainName.replace(/\s+/g, '') : this.client.getDomainName()
        const email = data.email ?? `${firstName.toLowerCase()}.${lastName.replace(/\s+/g, '.').toLowerCase()}@${domainName}`
        const newUser: User = { firstName, lastName, email }
        this.client.users.push(newUser)
        return newUser
    }

    get(index?: number) {
        const nb = this.client.users.length
        if (nb == 0) return null
        if (!index) { index = Math.floor(Math.random() * nb) }
        if (index < 0 || index >= nb) throw new Error(`Index ${index} is out of bounds (0-${nb - 1})`)
        return this.client.users[index]
    }

    delete(index?: number | undefined) {
        const nb = this.client.users.length
        if (nb == 0) return null
        if (!index) { index = Math.floor(Math.random() * nb) }
        if (index < 0 || index >= nb) throw new Error(`Index ${index} is out of bounds (0-${nb - 1})`)
        const deletedUser = this.client.users[index]
        this.client.users.splice(index, 1)
        return deletedUser
    }
    
    deleteAll() { this.client.users.length = 0; return this.client.users }

    modify(index: number, data: { firstName?: string; lastName?: string; email?: string; domainName?: string }) {
        const nb = this.client.users.length
        if (nb == 0) return null
        if (index < 0 || index >= nb) throw new Error(`Index ${index} is out of bounds (0-${nb - 1})`)
        const currentUser = this.client.users[index]
        if (!currentUser) return null
        const firstName = data.firstName ?? currentUser.firstName
        const lastName = data.lastName ?? currentUser.lastName
        const newDomainName = data.domainName ? data.domainName.replace(/\s+/g, '') : currentUser.email.split('@')[1]
        const email = data.email ?? `${firstName.toLowerCase()}.${lastName.replace(/\s+/g, '.').toLowerCase()}@${newDomainName}`
        const modifiedUser: User = { firstName, lastName, email }
        this.client.users[index] = modifiedUser
        return modifiedUser
    }
}