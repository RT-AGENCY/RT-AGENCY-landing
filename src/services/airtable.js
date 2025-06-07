// src/services/airtable.js
import Airtable from 'airtable'
import cases from '@/data/cases.json'

// Подключение к вашей базе
// const base = new Airtable({
//   apiKey: 'ВАШ_API_КЛЮЧ'
// }).base('ВАШ_ID_БАЗЫ')

// Функция получения кейсов
export async function getCases() {
  return Promise.resolve(cases)
}
