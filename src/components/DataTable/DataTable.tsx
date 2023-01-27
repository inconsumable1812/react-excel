import { DataTable as DataTableComponent } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useAppSelector } from 'app/hooks'
import { FC } from 'react'
import { selectSpreadSheet } from 'store/spreadSheet/selectors'

type Props = {}

export const DataTable: FC<Props> = () => {
  const { spreadSheet } = useAppSelector(selectSpreadSheet)

  return (
    <DataTableComponent
      value={spreadSheet.rows}
      emptyMessage="Нет данных"
      paginator
      removableSort
      rows={10}
      rowsPerPageOptions={[10, 20, 50]}
      responsiveLayout="scroll"
      selectionMode="single">
      {spreadSheet.headers.map((col, index) => (
        <Column
          key={index}
          field={col.field}
          header={col.header}
          sortable
        />
      ))}
    </DataTableComponent>
  )
}
