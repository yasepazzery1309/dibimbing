interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  return (
    <div className={`toast-notification ${isVisible ? 'show' : ''}`}>
      ✅ {message}
    </div>
  );
}
