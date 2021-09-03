import React, { useState, useEffect, ReactElement } from 'react'


interface Row{
  id: string
}
type Rows = Row[]
export const MyTable = () => {

  const rowLen = 20;
  const [rows, setRows] = useState(new Array(rowLen).fill([]));

  useEffect(() => {
    const rows = new Array(rowLen).fill([])
    for (let i = 0;i < rowLen;i++){
      for (let j = 0;j < rowLen;j++){
        rows[i].push(j)
      }
    }
    setRows(rows)
    return () => {

    }
  }, [])

  const renderRow = (row: string[]) => {
    return (row?.map((cell: string) => {
      return <span>{cell} </span>
    }))
  }
  return (
    rows.map((row) => {
      return(
        <div>
          { renderRow(row)}
        </div>
      )
    })
  )
}