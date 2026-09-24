export type TaskType =
  | 'write-code'
  | 'function'
  | 'debug'
  | 'predict'

export type Difficulty =
  | 'easy'
  | 'medium'
  | 'hard'
 export type Language = 'de' | 'en' | 'ru'
  export type LocalizedContent = {
    title: string
    description: string
    hints: string[]
  }

export type Task = {
  id: string
  programmingLanguage: 'javascript'
  type: TaskType
  topics: string[]
  difficulty: Difficulty
  category: string
expectedResult: unknown
  content: Record<Language, LocalizedContent>
  starterCode: string
}