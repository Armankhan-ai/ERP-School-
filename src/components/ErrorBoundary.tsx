import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-8 overflow-auto">
          <div className="max-w-4xl w-full">
            <h1 className="text-3xl font-bold text-red-600 mb-4">React Error Caught!</h1>
            <p className="text-gray-700 mb-4">Please copy this error message and send it to me so I can fix the issue:</p>
            <div className="bg-gray-100 p-4 rounded border border-gray-300 overflow-x-auto text-left">
              <h2 className="font-bold text-black mb-2">{this.state.error?.message}</h2>
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">{this.state.error?.stack}</pre>
            </div>
            <button 
              onClick={() => window.location.href = '/'} 
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go back Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
