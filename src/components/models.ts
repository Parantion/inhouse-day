export type AnswerType = {
  questionName: string,
  Answer: string | number
}

export type UserWithAnswersType = {
  firstname: string,
  lastname: string,
  answer: AnswerType[]
}

export type OptionGroupType = {
  label: string,
  optionGroupName: string,
  multiple: 'Y' | 'N'
}

export type OptionGroupOptionType = {
  label: string,
  optionGroupName: string,
  name: string,
  value: number,
  dontWeight: 'Y' | 'N'
}

export type VarType = {
  label: string,
  name: string,
  type: 'letters' | 'text' | 'choice' | 'date',
  selectionField?: string,
}

export type QuestionType = {
  label: string,
  name: string,
  type: 'letters' | 'text' | 'choice' | 'date',
  selectionField?: string,
  optionGroup?: {
      label: string,
      optionGroupName: string,
      multiple: 'Y' | 'N',
      options: OptionGroupOptionType[]
  }
}
