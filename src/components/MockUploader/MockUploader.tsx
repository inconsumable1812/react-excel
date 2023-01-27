import { FC, useEffect, useRef } from 'react'
import { Button } from 'primereact/button'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getData } from 'store/spreadSheet/slice'
import { selectSpreadSheet } from 'store/spreadSheet/selectors'
import { Toast } from 'primereact/toast'

type Props = {}

export const MockUploader: FC<Props> = ({}) => {
  const toast = useRef<Toast | null>(null)
  const dispatch = useAppDispatch()
  const { isLoading, error, spreadSheet } = useAppSelector(selectSpreadSheet)

  useEffect(() => {
    if (error !== '' && toast.current) {
      toast.current.show({
        severity: 'error',
        summary: 'Ошибка',
        detail: error
      })
    }
    const isSuccess =
      error === '' &&
      !isLoading &&
      (spreadSheet.rows.length !== 0 || spreadSheet.headers.length !== 0)

    if (isSuccess && toast.current) {
      toast.current.show({
        severity: 'success',
        summary: 'Успех',
        detail: 'Данные загружены'
      })
    }
  }, [error, isLoading])

  const clickHandler = () => {
    dispatch(getData())
  }

  return (
    <>
      <Toast ref={toast} />
      <Button
        onClick={clickHandler}
        loading={isLoading}
        icon="pi pi-cloud-download"
        label="Скачать"
        aria-label="Скачать данные"
      />
    </>
  )
}
