// Simple error logging utility
export const logError = (error: any, context?: string) => {
  const errorInfo = {
    message: error?.message || 'Unknown error',
    stack: error?.stack,
    context,
    timestamp: new Date().toISOString(),
    url: window.location.href,
  };
  
  console.error('Application Error:', errorInfo);
  
  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, etc.
};

export const logWarning = (message: string, data?: any) => {
  console.warn('Application Warning:', { message, data, timestamp: new Date().toISOString() });
};