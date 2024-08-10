import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import CodeBlock from '../components/CodeBlock';

const apiExampleCode = `
// Example API call using fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example API endpoint using Express
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.json(users);
});
`;

const ApiReference = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">API Reference</h1>
      <p className="text-xl text-gray-600">Explore our API documentation and examples.</p>

      <Card>
        <CardHeader>
          <CardTitle>API Usage Examples</CardTitle>
          <CardDescription>Here are some common API usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="javascript" code={apiExampleCode} />
        </CardContent>
      </Card>

      {/* Add more API documentation sections here */}
    </div>
  );
};

export default ApiReference;