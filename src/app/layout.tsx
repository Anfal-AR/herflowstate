import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerDebug from "../components/ServiceWorkerDebug";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export (required for Next.js 15+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ec4899",
};

export const metadata: Metadata = {
  title: "HerFlowState - Self-Care & Productivity Toolkit",
  description: "A comprehensive self-care & productivity toolkit for modern women who build, create, and lead.",
  manifest: "/manifest.json",
  applicationName: "HerFlowState",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HerFlowState",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/icon-192x192.png",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "self-care",
    "productivity",
    "women",
    "wellness",
    "lifestyle",
    "modern lady",
    "balance",
    "mindfulness",
  ],
  authors: [{ name: "HerFlowState" }],
  creator: "HerFlowState",
  publisher: "HerFlowState",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "HerFlowState",
    title: "HerFlowState - Self-Care & Productivity Toolkit",
    description: "A comprehensive self-care & productivity toolkit for modern women who build, create, and lead.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HerFlowState - Self-Care & Productivity Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HerFlowState - Self-Care & Productivity Toolkit",
    description: "A comprehensive self-care & productivity toolkit for modern women who build, create, and lead.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Essential PWA meta tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="application-name" content="HerFlowState" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#ec4899" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ServiceWorkerDebug />
        {children}
        
        {/* Service Worker Registration Script */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration with Cache Busting
              const SW_VERSION = '1.0.1';
              
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', async () => {
                  try {
                    console.log('🔄 Starting Service Worker registration...');
                    
                    // Unregister any existing service workers first
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    for (let registration of registrations) {
                      console.log('🗑️ Unregistering old service worker...');
                      await registration.unregister();
                    }
                    
                    // Small delay to ensure cleanup
                    await new Promise(resolve => setTimeout(resolve, 100));
                    
                    // Register new versioned service worker
                    const registration = await navigator.serviceWorker.register(
                      '/sw-v' + SW_VERSION + '.js?v=' + Date.now(),
                      { 
                        scope: '/',
                        updateViaCache: 'none'
                      }
                    );
                    
                    console.log('✅ Service Worker v' + SW_VERSION + ' registered successfully');
                    console.log('📍 Scope:', registration.scope);
                    
                    // Handle updates
                    registration.addEventListener('updatefound', () => {
                      const newWorker = registration.installing;
                      console.log('🔄 New service worker version found, updating...');
                      
                      if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                          console.log('📱 SW State:', newWorker.state);
                          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('✨ New service worker installed, reloading page...');
                            window.location.reload();
                          }
                        });
                      }
                    });
                    
                    // Listen for controller changes
                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                      console.log('🔄 Service worker controller changed');
                      window.location.reload();
                    });
                    
                    // Force update check after 5 seconds
                    setTimeout(() => {
                      registration.update();
                    }, 5000);
                    
                  } catch (error) {
                    console.error('❌ Service Worker registration failed:', error);
                  }
                });
              } else {
                console.warn('⚠️ Service Workers not supported in this browser');
              }
            `
          }} 
        />
      </body>
    </html>
  );
}