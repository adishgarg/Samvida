import React from 'react';
import { Bitcoin, Shield, Zap, Globe } from 'lucide-react';

const Button = ({ children, ...props }) => (
  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded" {...props}>
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...props} />
);

export default function BlockchainHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Bitcoin className="h-6 w-6" />
          <span className="sr-only">Samvida</span>
        </a>    
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to the Future of Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Secure, transparent, and decentralized. Join our blockchain network and revolutionize the way you transact.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Join Waitlist</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">Secure Transactions</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our blockchain ensures the highest level of security for all your transactions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Zap className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Experience blazing fast transaction speeds with our optimized blockchain network.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Globe className="h-10 w-10 text-primary" />
                <h2 className="text-xl font-bold">Global Accessibility</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Access your assets and perform transactions from anywhere in the world, anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Blockchain Co. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}