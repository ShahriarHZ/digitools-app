import React from 'react';

const Ready = () => {
  return (
    <section className="hero bg-linear-to-r from-blue-600 to-purple-600 h-[600px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Ready to Transform Your Workflow?
          </h1>
          
          <p className="py-6 text-lg">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <button className="btn btn-primary px-8">Explore Products</button>
            <button className="btn btn-outline btn-primary px-8 text-red-500">View Pricing</button>
          </div>

          <p className="text-sm opacity-75">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ready;