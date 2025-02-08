import { type SchemaTypeDefinition } from 'sanity'
import {product} from './product'
// import {payment} from './payment'

// import {shipment} from './shipment'
import { customer } from './customer'
import { order } from './order'
import payment from './payment'
import { user } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user,product,customer,order,payment],
}
