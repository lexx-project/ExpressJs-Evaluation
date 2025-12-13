# API External Testing Results

Date: 2025-12-13T03:14:01.822Z

## ✅ GET /category
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Categories retrieved successfully",
  "data": [
    {
      "id": "43745dad-b26a-47e7-be6a-5300d35211ad",
      "name": "Romance",
      "createdAt": "2025-12-13T03:11:57.142Z",
      "updatedAt": "2025-12-13T03:11:57.142Z",
      "deletedAt": null
    }
  ]
}
```

## ✅ POST /category
- **Status**: 201
- **Response**:
```json
{
  "succes": true,
  "message": "Category created successfully",
  "data": {
    "id": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "name": "Final Test Category 1765595642168",
    "createdAt": "2025-12-13T03:14:02.218Z",
    "updatedAt": "2025-12-13T03:14:02.218Z",
    "deletedAt": null
  }
}
```

## ✅ GET /category/b3749129-b642-4f2d-9a0b-46e91088c298
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Category retrieved successfully",
  "data": {
    "id": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "name": "Final Test Category 1765595642168",
    "createdAt": "2025-12-13T03:14:02.218Z",
    "updatedAt": "2025-12-13T03:14:02.218Z",
    "deletedAt": null
  }
}
```

## ✅ PUT /category/b3749129-b642-4f2d-9a0b-46e91088c298
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Category updated successfully",
  "data": {
    "id": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "name": "Updated Final Category",
    "createdAt": "2025-12-13T03:14:02.218Z",
    "updatedAt": "2025-12-13T03:14:02.315Z",
    "deletedAt": null
  }
}
```

## ✅ GET /books
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Books fetched successfully",
  "data": [
    {
      "id": "975e79fd-4ea7-4aba-ad67-a87b8e6b5947",
      "title": "Programmer Ndlogok",
      "author": "Gw",
      "publishedYear": 2000,
      "stock": 10,
      "isbn": "1922-91273871263",
      "categoryId": "ee144cac-c346-40ea-843a-71a70eb22587",
      "createdAt": "2025-12-13T03:07:41.680Z",
      "updatedAt": "2025-12-13T03:07:41.680Z",
      "deletedAt": null,
      "category": {
        "name": "Updated Category Name"
      }
    }
  ]
}
```

## ✅ POST /books
- **Status**: 201
- **Response**:
```json
{
  "succes": true,
  "message": "Book created succesfully",
  "data": {
    "id": "2dce80dd-4122-4ea3-8049-50a1992092da",
    "title": "Final Test Book",
    "author": "Test Author",
    "publishedYear": 2024,
    "stock": 50,
    "isbn": "978-5595642344",
    "categoryId": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "createdAt": "2025-12-13T03:14:02.357Z",
    "updatedAt": "2025-12-13T03:14:02.357Z",
    "deletedAt": null
  }
}
```

## ✅ GET /books/2dce80dd-4122-4ea3-8049-50a1992092da
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Book fetched successfully",
  "data": {
    "id": "2dce80dd-4122-4ea3-8049-50a1992092da",
    "title": "Final Test Book",
    "author": "Test Author",
    "publishedYear": 2024,
    "stock": 50,
    "isbn": "978-5595642344",
    "categoryId": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "createdAt": "2025-12-13T03:14:02.357Z",
    "updatedAt": "2025-12-13T03:14:02.357Z",
    "deletedAt": null,
    "category": {
      "name": "Updated Final Category"
    }
  }
}
```

## ✅ PUT /books/2dce80dd-4122-4ea3-8049-50a1992092da
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Book updated successfully",
  "data": {
    "id": "2dce80dd-4122-4ea3-8049-50a1992092da",
    "title": "Updated Final Book",
    "author": "Test Author",
    "publishedYear": 2024,
    "stock": 100,
    "isbn": "978-5595642344",
    "categoryId": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "createdAt": "2025-12-13T03:14:02.357Z",
    "updatedAt": "2025-12-13T03:14:02.390Z",
    "deletedAt": null
  }
}
```

## ✅ DELETE /books/2dce80dd-4122-4ea3-8049-50a1992092da
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Book deleted successfully",
  "data": {
    "id": "2dce80dd-4122-4ea3-8049-50a1992092da",
    "title": "Updated Final Book",
    "author": "Test Author",
    "publishedYear": 2024,
    "stock": 100,
    "isbn": "978-5595642344",
    "categoryId": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "createdAt": "2025-12-13T03:14:02.357Z",
    "updatedAt": "2025-12-13T03:14:02.408Z",
    "deletedAt": "2025-12-13T03:14:02.404Z"
  }
}
```

## ✅ DELETE /category/b3749129-b642-4f2d-9a0b-46e91088c298
- **Status**: 200
- **Response**:
```json
{
  "succes": true,
  "message": "Category deleted successfully",
  "data": {
    "id": "b3749129-b642-4f2d-9a0b-46e91088c298",
    "name": "Updated Final Category",
    "createdAt": "2025-12-13T03:14:02.218Z",
    "updatedAt": "2025-12-13T03:14:02.425Z",
    "deletedAt": "2025-12-13T03:14:02.424Z"
  }
}
```

