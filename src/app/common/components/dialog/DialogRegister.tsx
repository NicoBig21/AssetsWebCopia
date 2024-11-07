import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface DialogProps {
    open: boolean; // Tipo para saber si el dialogo esta abierto o cerrado osea true o false
    onClose: () => void; // Tipo para la función que se ejecutará al cerrar el dialogo osea al hacer click en cancelar se pone void porque no retorna nada
    title: string; // Tipo para el título del dialogo 
    content: React.ReactNode; // Tipo para el contenido del dialogo
    onConfirm?: () => void; // Tipo para la función que se ejecutará al confirmar
}

export default function DialogRegister({
    open,
    onClose,
    title,
    content,
    onConfirm,
    }: DialogProps) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" aria-labelledby="dynamic-dialog-title" fullWidth>
        <DialogTitle id="dynamic-dialog-title">{title}</DialogTitle>
        <DialogContent>
            {content} 
        </DialogContent>
        <DialogActions>
            <Button 
            onClick={onClose}  
            >
            Cancelar
            </Button>
            <Button onClick={onConfirm || onClose}>
            Confirmar
            </Button>
        </DialogActions>
        </Dialog>
    );
}
