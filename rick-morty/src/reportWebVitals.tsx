import { ReportHandler } from 'web-vitals';

interface Metric {
  name: string;
  delta: number;
  value: number;
  id: string;
}

type OnPerfEntry = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: OnPerfEntry): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const reportHandler: ReportHandler = (metric: Metric) => {
        onPerfEntry(metric);
      };

      getCLS(reportHandler);
      getFID(reportHandler);
      getFCP(reportHandler);
      getLCP(reportHandler);
      getTTFB(reportHandler);
    });
  }
};

export default reportWebVitals;
