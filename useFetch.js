import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = useCallback(async () => {
    setIsLoading(true)

    const res = await axios.get(url)

    setData(res.data)
    setIsLoading(false)
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData, url])

  return [data, isLoading, fetchData]
}

export default useFetch
