export interface AuthorModel {
    name: string,
    id: string
}

export interface CourseModel {
    title: string,
    description: string,
    creationDate: string,
    duration: number,
    authors: string[],
    id: string
}

export interface UserModel {
    name: string;
    email: string;
    password: string;
    role: string;
  }
  
export interface SuccessfulRequest<T> {
    successful: boolean;
    result: T;
}
