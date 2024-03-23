export interface Credentials{
  user: string;
  password: string
}

export const createEmptyCredentials
 = (): Credentials => ({
  user: '',
  password: '',
})

export interface CredentialFormErrors {
  user: string;
  password: string;
}

export const createEmptyCredentialsFormErrors = (): CredentialFormErrors => ({
  user: '',
  password: ''
})