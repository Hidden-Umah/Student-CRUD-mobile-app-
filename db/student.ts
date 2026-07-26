import db from "./database";

export const createStudent = (
    name: string ,
    student_id : string ,
    email : string ,
    picture : string ,
    description : string ,
    age : number ,
    gender : string ,
    course : string 
) => {
    const statment = db.prepareSync(
        `INSERT INTO students (name, student_id , email , picture , description , age , gender , course  )
        VALUES ( ?, ? ,? ,? ,? ,?, ? , ?)`
    )

    try {
        statment.executeSync([name, student_id , email , picture , description , age , gender , course ])
    } finally {
        statment.finalizeSync
    }
}



export const getStudents =() => {
    const result = db.getAllSync(
        `SELECT * FROM students`
    )

    return result 
}



export const getStudentById = (id : number ) => {
    const result = db.getFirstSync(
        `SELECT * FROM students WHERE id = ?`, [id]
    )

    return result
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
    `UPDATE students SET 
      name = ?, 
      student_id = ?, 
      email = ?, 
      picture = ?, 
      description = ?, 
      age = ?, 
      gender = ?, 
      course = ?
     WHERE id = ?`
  )

  try {
    statement.executeSync([name, student_id, email, picture, description, age, gender, course, id])
  } finally {
    statement.finalizeSync()
  }
}


export const deleteStudent = (id: number) => {
  const statement = db.prepareSync(
    `DELETE FROM students WHERE id = ?`
  )

  try {
    statement.executeSync([id])
  } finally {
    statement.finalizeSync()
  }
}