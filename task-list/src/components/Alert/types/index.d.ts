export type AlertProps = {
  handleClose: () => void
  open: boolean
  severity: SeverityType
  description: string
}

type SeverityType = 'error' | 'info' | 'warning' | 'success'