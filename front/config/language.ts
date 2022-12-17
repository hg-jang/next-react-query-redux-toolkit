const LANGUAGES = [
  'ko',
  'eng'
]

interface Dictionary {
  section: {
    none: string;
    doing: string;
    done: string;
  }
}

// type Langues = 

const DICTIONARY_SET = {
  ko: {
    section: {
      none: '할 일 목록',
      doing: '하는 중',
      done: '완료',
    }
  },
  eng: {
    section: {
      none: 'toDos',
      doing: 'doing',
      done: 'done',
    }
  }
}

export default DICTIONARY_SET