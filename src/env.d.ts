export {};

declare global {
  interface Window {
    electronAPI: {
      printPrescription: (options: any) => void;
      getPrinters: () => Promise<any[]>;
    };
  }
}