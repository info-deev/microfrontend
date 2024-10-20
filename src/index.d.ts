declare global {
  // Расширяем интерфейс Window
  interface Window {
    microkernel?: any;
    microfrontend?: {
      render: (container: HTMLElement) => void;
    };
  }
}
