import { User } from './models/User'
import { Pet } from './models/Pet'
import { serve } from '@triframe/arbiter'
import path from 'path'

serve(path.resolve(__dirname, './models'), {
    session: {}
}).then(seed)

async function seed(){
    let [user] = await User.list()
    if(user == null){
        user = await User.create({ name: 'Melissa' })
        await Pet.create({ ownerId: user.id, name: 'Tess' })
        await Pet.create({ ownerId: user.id, name: 'Tilly' })
    }
}