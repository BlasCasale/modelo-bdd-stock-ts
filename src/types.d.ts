export type Id = `${string}-${string}-${string}-${string}-${string}`

type MailType = 'gmail' | 'hotmail' | 'yahoo' | 'outlook'

type MailComplete = 'com' | `com.${string}`

type Mail = `${string}@${MailType}.${MailComplete}`

// aca se definen los interfaces para las entradas y salidas del servidor

export interface UserT {
  id: Id
  userName: string
  pin: number
}

export type UserPost = Omit<UserT, 'id'>

export interface Product {
  id: Id
  name: string
  code: string
}

export type ProductPost = Omit<Product, 'id'>

export interface StockType {
  id: Id
  measure: string
}

export type StockTypePost = Omit<StockType, 'id'>

export interface Stock {
  id: Id
  product: Id
  measure: Id
  quantity: number
}

export type StockPost = Omit<Stock, 'id'>

// interface para el error

export interface CustomError extends Error {
  statusCode: number
  message?: string
}

// respuestas para el usuario

export interface UserResponse {
  message?: string
  user?: UserT
}
