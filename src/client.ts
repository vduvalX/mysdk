
import { Users, type User } from './resources/user.js'

export type SDKOptions = {
    //apiKey: string
    //baseUrl?: string
    domainName?: string
}

export class Client {
    //private apiKey: string
    //private baseUrl: string
    private domainName: string
    private readonly usersResource: Users

    constructor(options: SDKOptions) {
        //this.apiKey = apiKey
        //this.baseUrl = baseUrl
        this.domainName = options.domainName ?? 'example.com'
        this.usersResource = new Users(this)
    }
    
    public getDomainName(): string { return this.domainName }

    public setDomainName(domainName: string): string { this.domainName = domainName; return this.domainName }

    public get users(): Users { return this.usersResource }        
}


