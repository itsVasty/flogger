export interface BlogPost {
    id: string
    title: string
    description: string | undefined
    content: string
    owner: User | null
    digs: number
    comments: Comment[] | undefined
}

export interface Comment {
    id: string
    owner: User
    content: string
    digs: number
}

export interface User {
    id: string
    name: string
}