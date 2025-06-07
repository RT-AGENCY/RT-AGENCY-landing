// scripts/fetch-cases.js
import fs from 'fs'
import path from 'path'
import Airtable from 'airtable'
import dotenv from 'dotenv'

// Загружаем переменные из .env
dotenv.config()

// Проверяем, что переменные загрузились
console.log('API Key загружен:', process.env.AIRTABLE_API_KEY ? '✅' : '❌')
console.log('Base ID загружен:', process.env.AIRTABLE_BASE_ID ? '✅' : '❌')

// Имя таблицы: сначала из .env, иначе дефолт `Cases`
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Generate'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)

async function fetchCases() {
  try {
    console.log(`Подключаемся к таблице "${TABLE_NAME}"...`)

    // Если у вас в Airtable другой вид (view), укажите его здесь:
    const records = await base(TABLE_NAME)
      .select({ view: 'Grid view' })
      .all()

    console.log(`Найдено записей: ${records.length}`)

    if (records.length > 0) {
      console.log('Доступные поля:', Object.keys(records[0].fields))
      console.log('Первая запись:', records[0].fields)
    }

    return records.map(rec => ({
      id: rec.id,
      company: rec.get('Company') || '',
      title: rec.get('Title') || '',
      description: rec.get('Description') || '',
      results: rec.get('Results') || '',
      slug: rec.get('Slug') || '',
      industry: rec.get('Industry') || '',
      services: rec.get('Services') || [],
      image: rec.get('Image')?.[0]?.url || null,
      date: rec.get('Date') || '',
      roi: rec.get('ROI') || 0,
      published: rec.get('Published') || false
    }))
  } catch (error) {
    console.error('Ошибка при получении данных из Airtable:', error)
    throw error
  }
}

async function main() {
  if (!process.env.AIRTABLE_API_KEY) {
    console.error('❌ AIRTABLE_API_KEY не найден в .env')
    process.exit(1)
  }
  if (!process.env.AIRTABLE_BASE_ID) {
    console.error('❌ AIRTABLE_BASE_ID не найден в .env')
    process.exit(1)
  }

  const cases = await fetchCases()
  const outDir = path.resolve(process.cwd(), 'src/data')

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  fs.writeFileSync(
    path.join(outDir, 'cases.json'),
    JSON.stringify(cases, null, 2),
    'utf-8'
  )

  console.log(`✔️ Получено ${cases.length} кейсов в ${path.join('src', 'data', 'cases.json')}`)
}

main().catch(err => {
  console.error('❌ Ошибка в main():', err)
  process.exit(1)
})
