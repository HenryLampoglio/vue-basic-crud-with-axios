import { test, describe, beforeEach, expect, vi } from 'vitest'
import { createDistributor, fetchDistributors, fetchUniqueDistributor, updateDistributor, deleteDistributor } from './distributors'
import apiClient from '../helpers/axios'

vi.mock('../helpers/axios')

    beforeEach(() =>
    {
        apiClient.get.mockReset()
        apiClient.post.mockReset()
        apiClient.put.mockReset()
        apiClient.delete.mockReset()
    })

    describe('fetchDistributors', () =>
    {
        test('make a Get request to fetch distributors', async () =>
        {
            const distributorMock = [ {id: 5}, {id: 10} ]

            apiClient.get.mockResolvedValue(
            {
                data: [ {id: 5}, {id: 10} ]
            })

            const distributors = await fetchDistributors()

            expect(apiClient.get).toHaveBeenCalledWith('distributors')
            expect(distributors).toStrictEqual(distributorMock)
        })
    })

    describe('createDistributors', () =>
    {
        test('make a POST request to create a new products', async () =>
        {
            const newDistributorPayload =
            {
                company_name: 'empresa 42',
                adress: 'endereço 42',
                description: 'esta é a empresa 42'
            }

            const newDistributorMock =
            {
                ...newDistributorPayload
            }

            apiClient.post.mockResolvedValue(
            {
                data: newDistributorPayload
            })

            const newDistributor = await createDistributor(newDistributorPayload)

            expect(apiClient.post).toHaveBeenCalledWith('distributors', newDistributorPayload)
            expect(newDistributor).toStrictEqual(newDistributorMock)
        })
    })

    describe('fetch a unique distributor', () =>
    {
        test('make a request to fetch a unique distributor', async () =>
        {
            const distributorMock = 
            {
                company_name: 'empresa 2',
                adress: 'endereço 2',
                description: 'esta é a empresa 2'
            }

            apiClient.get.mockResolvedValue(
            {
                data: distributorMock
            })

            const distributor = await fetchUniqueDistributor(distributorMock)

            expect(apiClient.get).toHaveBeenCalledWith('distributors/3935e4c3-03c4-4331-9c8f-49c61a45fdd9')
            expect(distributor).toStrictEqual(distributorMock)
        })
    })

    describe('update a distributor', () =>
    {
        test('make a put request to update a new distributor', async ()=>
        {
            const updateDistributorPayload = 
            {
                company_name: 'empresa 68',
                adress: 'endereço 68',
                description: 'esta é a empresa 68'
            }

            const updatedDistributorMock = 
            {
                ...updateDistributorPayload
            }

            apiClient.put.mockResolvedValue(
            {
                data: updateDistributorPayload
            })

            const updatedDistributor = await updateDistributor(updateDistributorPayload)

            expect(apiClient.put).toHaveBeenCalledWith("distributors/3935e4c3-03c4-4331-9c8f-49c61a45fdd9")
            expect(updatedDistributor).toStrictEqual(updatedDistributorMock)
        })
    })

    describe('delete a product', () =>
    {
        test('make a request to delete a distributor', async () =>
        {
            apiClient.delete.mockResolvedValue(
            {
                data: 'produto deletado com sucesso',
            })

            await deleteDistributor()

            expect(apiClient.delete).toHaveBeenCalledWith('distributors/3935e4c3-03c4-4331-9c8f-49c61a45fdd9')
        })
    })
  