import { include, Model, string, hasMany } from '@triframe/scribe'
import { Resource } from '@triframe/core'

export class User extends Resource {

    @include(Model)

    @string
    name = ""

    @hasMany({ as: 'owner' })
    pets = []

}