import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CodeBlock from '../components/CodeBlock';

const exampleCode = `
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
`;

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Welcome to CodeDocs</h1>
      <p className="text-xl text-gray-600">Your comprehensive guide to modern web development.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Begin your journey with CodeDocs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Learn the basics and set up your development environment.</p>
            <Button>Start Here</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Detailed documentation of our APIs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore the full capabilities of our platform.</p>
            <Button>View APIs</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
            <CardDescription>Real-world code samples</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">See how to implement various features in your projects.</p>
            <Button>Browse Examples</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Code Example</CardTitle>
          <CardDescription>Here's a simple JavaScript function with syntax highlighting</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="javascript" code={exampleCode} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;