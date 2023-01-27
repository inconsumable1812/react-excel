import { FC } from 'react'
import { ClearButton, FileUploader, DataTable, MockUploader } from 'components'

type Props = {}

const Main: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center gap-x-10 justify-center">
        <FileUploader />
        <MockUploader />
        <ClearButton />
      </div>
      <DataTable />
    </div>
  )
}

export default Main
