import Swal from 'sweetalert2';

interface SweetAlertProps {
    title: string;
    text: string;
    confirmBtn: string;
    icon: "warning" | "error" | "info" | "question" | "success";
    titleConfirm: string;
    textConfirm: string;
}

export const SAlert = ({ title, text, icon, confirmBtn, titleConfirm, textConfirm }:SweetAlertProps) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmBtn,
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: titleConfirm,
            text: textConfirm,
            icon: "success"
          });
        }
      });
};