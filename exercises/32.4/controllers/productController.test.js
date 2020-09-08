const prodController = require('./productController.js');
const prodModel = require('../models/productModel');

describe('Product Controller', () => {

  const token = '123-456-789_123A';

  describe('getAllProducts', () => {
    test('When getAllProducts called, return all products', async () => {

      const reqMock = { headers: { authorization: token } };
      const prodMock = { id: 3, name: "MacBook Air", brand: "Apple" };
      const resMock = { status: jest.fn(), json: jest.fn() };

      const getAllProductsSpy = jest
        .spyOn(prodModel.prototype, 'getAll')
        .mockReturnValueOnce(prodMock);

      await prodController.getAllProducts(reqMock, resMock);

      expect(getAllProductsSpy).toBeCalledTimes(1);
      expect(resMock.status).toBeCalledWith(200);
      expect(resMock.json).toBeCalledWith(prodMock);

      getAllProductsSpy.mockRestore();
    });
  });

  describe('getProductById', () => {
    test('if ID is null, return error 404', async () => {

      const reqMock = {
        headers: { authorization: token },
        params: { id: 456789 }
      };

      const resMock = { status: jest.fn(), send: jest.fn() }

      const getProductByIdSpy = jest
        .spyOn(prodModel.prototype, 'getById')
        .mockReturnValueOnce(null);

      await prodController.getProductById(reqMock, resMock);

      expect(getProductByIdSpy).toBeCalledTimes(1);
      expect(resMock.status).toBeCalledWith(404);

      getProductByIdSpy.mockRestore();
    });

    test('if ID exists, return a JSON product', async () => {
      const reqMock = {
        headers: { authorization: token },
        params: { id: 3 }
      };

      const resMock = { status: jest.fn(), json: jest.fn() }

      const prodMock = { id: 3, name: "MacBook Air", brand: "Apple" };

      const getProductByIdSpy = jest
        .spyOn(prodModel.prototype, 'getById')
        .mockReturnValueOnce(prodMock);

      await prodController.getProductById(reqMock, resMock);

      expect(getProductByIdSpy).toBeCalledTimes(1);
      expect(resMock.status).toBeCalledWith(200);
      expect(resMock.json).toBeCalledWith(prodMock);

      getProductByIdSpy.mockRestore();
    });
  });
});
