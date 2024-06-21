import sql from 'mssql'

import dbConfig from './db-config.mjs'

async function connectAndQuery() {
  try {
    await sql.connect(dbConfig)

    const result = await sql.query`SELECT * from alunos`

    console.dir(result)
  } catch (err) {
    console.error('Error trying to connect:', err)
  } finally {
    sql.close()
  }
}

connectAndQuery()