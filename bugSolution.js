```javascript
// pages/about.js
import ErrorBoundary from '../components/ErrorBoundary';

export default function About() {
  throw new Error('Intentional error');
}

function AboutWithBoundary() {
  return (
    <ErrorBoundary>
      <About />
    </ErrorBoundary>
  );
}
export default AboutWithBoundary; 
```
```javascript
// components/ErrorBoundary.js
import { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  function handleError() {
    setHasError(true);
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onError: handleError,
        })
      )}
    </div>
  );
}

export default ErrorBoundary;
```