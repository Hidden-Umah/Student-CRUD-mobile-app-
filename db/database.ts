import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('students.db')

export const initDB = () => {
  db.execSync(
    'CREATE TABLE IF NOT EXISTS students (' +
    'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
    'name TEXT NOT NULL,' +
    'student_id TEXT NOT NULL UNIQUE,' +
    'email TEXT NOT NULL UNIQUE,' +
    'picture TEXT,' +
    'description TEXT,' +
    'age INTEGER,' +
    'gender TEXT,' +
    'course TEXT NOT NULL' +
    ')'
  )
}

export default db