import { DataTable as DataTableComponent } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ClearButton, FileUploader } from 'components'
import { useAppSelector } from 'app/hooks'
import { FC } from 'react'
import { selectSpreadSheet } from 'store/spreadSheet/selectors'

type Props = {}

export const DataTable: FC<Props> = () => {
  const { headers, rows } = useAppSelector(selectSpreadSheet)

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-10 justify-center">
        <FileUploader />
        <ClearButton />
      </div>
      <DataTableComponent
        value={rows}
        emptyMessage="No data"
        paginator
        rows={10}
        alwaysShowPaginator={false}
        responsiveLayout="scroll"
        selectionMode="single"
        onSelectionChange={() => console.log('select')}>
        {headers.map((col, index) => (
          <Column
            key={index}
            field={col.field}
            header={col.header}
          />
        ))}
      </DataTableComponent>
    </div>
  )
}
