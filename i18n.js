import { createContext } from 'react'

export const i18n = {
  en: {
    header: {
      posts: 'Posts',
      users: 'Users',
      comments: 'Comments',
    },
  },
  th: {
    header: {
      posts: 'บทความ',
      users: 'ผู้ใช้งาน',
      comments: 'ความคิดเห็น',
    },
  },
}

export default createContext()
