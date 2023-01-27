import { useAppDispatch } from 'app/hooks'
import { FC } from 'react'
import { Button } from 'primereact/button'
import { clearSpreadSheet } from 'store/spreadSheet/slice'

type Props = {
  label?: string
}

export const ClearButton: FC<Props> = ({ label = 'Очистить' }) => {
  const dispatch = useAppDispatch()

  const cancelHandler = () => {
    dispatch(clearSpreadSheet())
  }

  return (
    <Button
      onClick={cancelHandler}
      label={label}
      icon="pi pi-times"
      className="p-button-danger"
    />
  )
}
