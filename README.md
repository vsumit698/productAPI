# Ecommerce productAPI
API for an ecommerce platform admin to manage product inventory

It is the simple product api developed for practice , User can add, update, delete ,and list the product detail

How to use--

1.  Add Product(Create)

->  request(Post Request)
    http://localhost:8000/products/create
    
->   response
{ "data": { "product": { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"} } }

2.  Delete Product

    ->request(Delete Request)
    http://localhost:8000/products/:id

    ->response
    { Product deleted! }


3. List All Product

  ->request(Get request)
         http://localhost:8000/products
  ->response
  { { "products": [ { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"}]  } }

4. Update Product 


   ->request(Get request)
         http://localhost:8000/products/:id/update-quantity
         
   ->response
        { "data": { "product": { "_id": "5e7218a50de915060b8be89a", "name": "iphone", "quantity": "34"} },
          "message" : "updated successfully" }
         
##Technologies
1-Backend ->Node.js
2-Database ->MongoDB
