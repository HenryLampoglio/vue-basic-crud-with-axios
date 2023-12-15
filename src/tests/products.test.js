import{test,describe,beforeEach, expect, vi}  from 'vitest'
import { createProduct, fetchProducts, fetchUniqueProduct, updateProduct, deleteProduct } from './products';
import apiClient from '../helpers/axios';

vi.mock('../helpers/axios')

    beforeEach(() =>
    {
        apiClient.get.mockReset()
        apiClient.post.mockReset()
        apiClient.put.mockReset()
        apiClient.delete.mockReset()
    })

    describe('fetchProducts',() =>
    {
        test('make a Get request to fetch products', async () =>
        {
            const productsMock = [ {id: 1}, {id: 2} ]
            
            // aqui esta sendo simulado um valor do chamado da promisse
            apiClient.get.mockResolvedValue({
                data: [  {id: 1}, {id: 2} ] 
            })

            const products = await fetchProducts()
            
            expect(apiClient.get).toHaveBeenCalledWith('products')
            expect(products).toStrictEqual(productsMock)  
        })
    })

    describe('createProducts', () =>
    {
        test('make a POST request to create a new product', async () =>
        {
            const newProductPayload = 
            {
                name_product: 'produto 29',
                price: 29.99,
                description: 'este é o produto 29',
                distributor_id: '3935e4c3-03c4-4331-9c8f-49c61a45fdd9'
            }

            const newProductMock = 
            {
                ...newProductPayload
            }

            apiClient.post.mockResolvedValue(
            {
                data: newProductPayload
            })

            const newProduct = await createProduct(newProductPayload)

            expect(apiClient.post).toHaveBeenCalledWith('products', newProductPayload)
            expect(newProduct).toStrictEqual(newProductMock)
        })
    })

    describe('fetch a unique product', () =>
    {
        test('make a request to fetch a unique product', async () =>
        {
            const productMock = 
            {
                name_product: 'produto 5',
                price: 5.99,
                description: 'este é o produto 5',
                distributor_id: '356bc142-7093-4975-855f-d1bd265298c1'
            }

            apiClient.get.mockResolvedValue(
            {
                data: productMock,
            })

            const product = await fetchUniqueProduct(productMock)

            expect(apiClient.get).toHaveBeenCalledWith('products/1f5e8a08-a27e-47f8-af59-684b1fde7cbd')
            expect(product).toStrictEqual(productMock)
        })
    })

    describe('update a product', () =>
    {
        test('make a put request to update a new product', async () =>
        {
            const updateProductPayload = 
            {
                name_product: 'produto 15',
                price: 15.99,
                description: 'este é o produto 15',
                distributor_id: '356bc142-7093-4975-855f-d1bd265298c1'
            }

            const updatedProductMock = 
            {
               ...updateProductPayload
            }

            apiClient.put.mockResolvedValue(
            {
                data: updateProductPayload
            })

            const updatedProduct = await updateProduct(updateProductPayload)

            expect(apiClient.put).toHaveBeenCalledWith("products/1f5e8a08-a27e-47f8-af59-684b1fde7cbd")
            expect(updatedProduct).toStrictEqual(updatedProductMock)
        })
    })

    describe('delete a product', () =>
    {
        test('make a request to delete a product', async () =>
        {
            apiClient.delete.mockResolvedValue(
            {
                data: 'produto deletado com sucesso',
            })

            await deleteProduct()

            expect(apiClient.delete).toHaveBeenCalledWith('products/1f5e8a08-a27e-47f8-af59-684b1fde7cbd')
        })
    })