import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Fetch({ url, children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url)

      setData(res.data)
    }

    fetchData()
  }, [url])

  return children(data)
}
