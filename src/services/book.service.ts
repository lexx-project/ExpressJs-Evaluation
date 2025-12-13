import prisma from "../prisma.js"

export const getAllBooks = async () => {
  return await prisma.book.findMany({
    where: {
      deletedAt: null as any
    },
  
  })
}


export const getBookById = async (id: string) => {
  return await prisma.book.findUnique({
    where: {
      id: id,
      deletedAt: null as any
    },
  
  })
}

export const createBook = async (data: any) => {
  return await prisma.book.create({
    data
  })
}

export const updateBook  = async (id: string, data: any) => {
  return await prisma.book.update({
    where: {
      id: id,
      deletedAt: null as any
    },
    data
  })
}

export const deleteBook = async (id: string) => {
  return await prisma.book.update({
    where: {
      id: id,
    },
    data: {
      deletedAt: new Date()
    }
  })
}