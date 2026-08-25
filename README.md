
# PRESENTATION

SDK qui permet de gérer les utilisateurs d'un domaine donné.

Nom de de domaine par défaut : 'mesdonneesadministratives.fr'.


## Instanciation du SDK

```typescript
    import { Client } from 'mySDK'      // à modifier selon publication
    import type { User } from 'mySDK'   // à modifier selon publication

    const client = new Client(domainName: string)

    // possibilité d'instancier d'autres clients avec d'autres noms de domaine en parallèle
    const client2 = new Client(otherDomainName: string)
```

## Utilisation

### récupérer le nom de domaine
```typescript
    const domainName: string = client.getDomainName()
```

 ### modifier le nom de domaine pour les futurs utilisateurs inscrits
 ```typescript
    const newDomainName = client.setDomainName('nouveauNomDeDomaine.fr')
    //ou
    client.setDomainName('nouveauNomDeDomaine.fr')    
```

### lister les utilisateurs
```typescript
    const users = client.users.list()
```

### récupérer un utilisateur
```typescript
    const user = client.users.get(rang: number)
    // si rang non précisé, un utilisateur aléatoire est retourné
```

### supprimer un utilisateur
```typescript
    const deletedUser = client.users.delete(rang: number)
    //ou
    client.users.delete(rang: number)   
    //si rang non précisé, un utilisateur aléatoire est supprimé
```

### créer un utilisateur
```typescript
    const newUser = client.users.create({ firstName: 'John', lastName: 'Doe', domainName: 'nouveauNomDeDomaine.fr', email: 'john.doe@example.com' })
    //ou
    client.users.create({ firstName: 'John', lastName: 'Doe', domainName: 'nouveauNomDeDomaine.fr', email: 'john.doe@example.com' })
    // si domainName non précisé, le nom de domaine du client est utilisé
    // si email non précisé, l'email est généré automatiquement à partir du prénom, nom et nom de domaine
    // si email précisé, il est utilisé tel quel et écrase le nom de domaine précisé, ainsi que firstName et lastName précisés
```

### supprimer tous les utilisateurs
```typescript
    const emptyList: Array<User> = client.users.deleteAll()
    //ou
    client.users.deleteAll()    
```
 
### modifier un utilisateur
```typescript
    const modifiedUser = client.users.modify(
        rang: number,
        { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' })
    //ou
    client.users.modify(rang: number, { firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' })
    // si domainName non précisé, le nom de domaine du client est utilisé
    // si email non précisé, l'email est généré automatiquement à partir du prénom, nom et nom de domaine
    // si email précisé, il est utilisé tel quel et écrase le nom de domaine précisé, ainsi que firstName et lastName précisés
```

