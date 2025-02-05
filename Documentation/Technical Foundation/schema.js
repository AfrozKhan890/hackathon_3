const User = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'password', title: 'Password', type: 'string', hidden: true },
      {
        name: 'addresses',
        title: 'Addresses',
        type: 'array',
        of: [{ type: 'object', fields: [
          { name: 'line1', title: 'Line 1', type: 'string' },
          { name: 'city', title: 'City', type: 'string' },
          { name: 'state', title: 'State', type: 'string' },
          { name: 'zip', title: 'ZIP Code', type: 'string' },
        ]}],
      },
      { name: 'isAdmin', title: 'Is Admin', type: 'boolean' },
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],
  };



const Product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'stock', title: 'Stock', type: 'number' },
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],
  };


const Category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],
  };
  


  const order = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      { 
        name: 'user', 
        title: 'User', 
        type: 'reference', 
        to: [{ type: 'user' }] 
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { 
                name: 'product', 
                title: 'Product', 
                type: 'reference', 
                to: [{ type: 'product' }] 
              },
              { 
                name: 'quantity', 
                title: 'Quantity', 
                type: 'number' 
              },
            ],
          },
        ],
      },
      { 
        name: 'totalPrice', 
        title: 'Total Price', 
        type: 'number' 
      },
      { 
        name: 'paymentStatus', 
        title: 'Payment Status', 
        type: 'string', 
        options: { list: ['Pending', 'Paid', 'Failed'] } 
      },
      { 
        name: 'orderStatus', 
        title: 'Order Status', 
        type: 'string', 
        options: { list: ['Processing', 'Shipped', 'Delivered', 'Cancelled'] } 
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          { name: 'line1', title: 'Line 1', type: 'string' },
          { name: 'city', title: 'City', type: 'string' },
          { name: 'state', title: 'State', type: 'string' },
          { name: 'zip', title: 'ZIP Code', type: 'string' },
        ],
      },
      { 
        name: 'createdAt', 
        title: 'Created At', 
        type: 'datetime' 
      },
    ],
  };
  
  export default order;

  

  


const Payment = {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      { name: 'order', title: 'Order', type: 'reference', to: [{ type: 'order' }] },
      { name: 'amount', title: 'Amount', type: 'number' },
      { name: 'status', title: 'Status', type: 'string', options: { list: ['Pending', 'Successful', 'Failed'] }},
      { name: 'method', title: 'Method', type: 'string', options: { list: ['Credit Card', 'PayPal', 'COD'] }},
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],
  };
  