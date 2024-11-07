export type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';

export interface SnackbarContextProps {
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
}