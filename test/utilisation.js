import { Client } from '../dist/client.js'
//import type { User } from from './dist/client.js'

const client = new Client({ domainName: 'mesdonneesadministratives.fr' })

const user0 = client.users.create({ firstName: 'Christophe', lastName: 'Van Cawvenberghe', domainName: 'gmail.com' })
console.log(`user0: ${JSON.stringify(user0)}`)

const user1 = client.users.create({ firstName: 'John', lastName: 'Doe', domainName: 'gmail.com' })
console.log(`user1: ${JSON.stringify(user1)}`)

const user2 = client.users.create({ firstName: 'Vincent', lastName: 'Duval', email: '20101.duval@gmail.com' })
console.log(`user2: ${JSON.stringify(user2)}`)

const domainName = client.getDomainName()
console.log(`\ndomainName: ${domainName}`)
client.setDomainName('vduval.com')

const newDomainName = client.getDomainName()
console.log(`newDomainName: ${newDomainName}`)

const user3 = client.users.create({ firstName: 'Vincent', lastName: 'Duval' })
console.log(`\nuser3: ${JSON.stringify(user3)}`)

const userList = client.users.list()
console.log(`\nuserList: ${JSON.stringify(userList)}`)

const aleatoireUser = client.users.get()
console.log(`\naleatoireUser: ${JSON.stringify(aleatoireUser)}`)

client.users.modify(0, { lastName: 'Dupont' })
client.users.modify(1, { })
client.users.modify(2, { email: 'vincent.duval@melix.org' })
client.users.modify(3, { domainName: 'vduval.com' })
console.log(`\nuserList après modifications: ${JSON.stringify(client.users.list())}`)

client.users.delete(1)
console.log(`\nuserList après suppression du user 1: ${JSON.stringify(client.users.list())}`)

client.users.deleteAll()
console.log(`\nuserList après suppression de tous les users: ${JSON.stringify(client.users.list())}`)