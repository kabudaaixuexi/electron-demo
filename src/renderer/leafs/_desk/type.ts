type elType = 0 | 1 | 2 | 3

export interface programItem {
    icon: string
    explain: string
    programType: elType
    programId: number
    programPath: string
    titleBarStyle?:string
}