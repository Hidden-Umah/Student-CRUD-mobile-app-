import db from './database'


export const createStudent = (
  name: string,
  student_id: string,
  email: string,
  picture: string,
  description: string,
  age: number,
  gender: string,
  course: string
) => {
  const statement = db.prepareSync(
    'INSERT INTO students (name, student_id, email, picture, description, age, gender, course) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  )
  try {
    statement.executeSync([name, student_id, email, picture, description, age, gender, course])
  } finally {
    statement.finalizeSync()
  }
}


export const getStudents = () => {
  return db.getAllSync('SELECT * FROM students')
}


export const getStudentById = (id: number) => {
  return db.getFirstSync('SELECT * FROM students WHERE id = ?', [id])
}


export const updateStudent = (
  id: number,
  name: string,
  student_id: string,
  email: string,
  picture: string,
  description: string,
  age: number,
  gender: string,
  course: string
) => {
  const statement = db.prepareSync(
    'UPDATE students SET ' +
    'name = ?, ' +
    'student_id = ?, ' +
    'email = ?, ' +
    'picture = ?, ' +
    'description = ?, ' +
    'age = ?, ' +
    'gender = ?, ' +
    'course = ? ' +
    'WHERE id = ?'
  )
  try {
    statement.executeSync([name, student_id, email, picture, description, age, gender, course, id])
  } finally {
    statement.finalizeSync()
  }
}


export const deleteStudent = (id: number) => {
  const statement = db.prepareSync(
    'DELETE FROM students WHERE id = ?'
  )
  try {
    statement.executeSync([id])
  } finally {
    statement.finalizeSync()
  }
}