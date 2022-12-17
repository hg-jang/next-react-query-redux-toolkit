const languages = [
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

const dictionary = {
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