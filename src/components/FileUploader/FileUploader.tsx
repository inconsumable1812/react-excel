import { FC, useRef } from 'react'
import { Toast } from 'primereact/toast'
import { FileUpload, FileUploadUploadParams } from 'primereact/fileupload'
import { useAppDispatch } from 'app/hooks'
import { changeHeaders, changeRows } from 'store/spreadSheet/slice'
import { getDataFromXLSX, getHeaders, getRows } from 'utils'

type Props = {}

export const FileUploader: FC<Props> = ({}) => {
  const toast = useRef<Toast | null>(null)
  const dispatch = useAppDispatch()

  async function handleFileAsync(files: File[]) {
    const data = await getDataFromXLSX(files)
    const cols = data.shift()!.map((el) => el.toString())
    const headers = getHeaders(cols)
    const rows = getRows(data, cols)

    dispatch(changeHeaders(headers))
    dispatch(changeRows(rows))
  }

  const onUpload = (e: FileUploadUploadParams) => {
    if (toast.current === null) return

    toast.current.show({
      severity: 'success',
      summary: 'Успех',
      detail: 'Файл загружен'
    })
    handleFileAsync(e.files)
  }

  return (
    <>
      <Toast ref={toast}></Toast>
      <div className="card p-0">
        <FileUpload
          auto
          name="spreadSheet"
          url="./upload.php"
          accept=".xlsx,.xls"
          onUpload={onUpload}
          maxFileSize={1000000}
          invalidFileSizeMessageDetail="Превышен максимальный размер файла {0}"
          chooseOptions={{
            label: 'Добавить',
            icon: 'pi pi-file-excel',
            className: 'p-button-success'
          }}
          emptyTemplate={<p className="m-0">Перетащите сюда файл</p>}
        />
      </div>
    </>
  )
}
