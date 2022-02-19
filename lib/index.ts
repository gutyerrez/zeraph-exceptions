export abstract class Exception extends Error {
  public status!: number

  constructor(
    status: number,
    message: string
  ) {
    super(message)

    this.status = status

    delete this.stack
  }
}

export class FileNotFoundException extends Exception {
  constructor(
    status: number = 404,
    message: string = 'file not found'
  ) { super(status, message) }
}
