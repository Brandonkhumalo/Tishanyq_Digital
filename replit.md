# Overview

This is a React-based company website for Tishanyq Digital, a Zimbabwean technology company focused on African business empowerment. The application provides a professional corporate presence with service showcases, company information, and contact functionality. Built as a full-stack application, it combines a modern React frontend with an Express.js backend API, featuring contact form handling and database integration capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# Company Information

**Official Contact Details:**
- **Address**: 7 Martin Drive, Msasa, Harare, Zimbabwe
- **Office Phone**: +263 242 707267-9
- **Mobile Numbers**: +263 782 216826, +263 718 478929
- **Email**: Info@tishanyq.co.zw
- **Company Logo**: Tishanyq Digital logo with modern blue gradient design

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Services, and Contact
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submission and message retrieval
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with Vite integration for seamless development experience

## Database Layer
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured for production with Neon Database integration
- **Schema**: Structured tables for users and contact messages with proper relationships
- **Validation**: Zod schemas for runtime type validation matching database schema
- **Storage**: Dual implementation with in-memory storage for development and PostgreSQL for production

## Build System
- **Bundler**: Vite for fast development builds and optimized production bundles
- **Development**: Integrated development server with HMR and error overlay
- **Production**: Optimized builds with code splitting and asset optimization
- **TypeScript**: Strict type checking across client, server, and shared code

## Code Organization
- **Monorepo Structure**: Client, server, and shared code in separate directories
- **Shared Types**: Common TypeScript interfaces and Zod schemas in shared directory
- **Component Structure**: Organized UI components with sections, layout, and reusable UI primitives
- **Path Aliases**: Configured import aliases for clean and maintainable code organization

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Modern icon library for consistent iconography

## Database and API
- **Neon Database**: Serverless PostgreSQL for scalable cloud database hosting
- **Drizzle ORM**: Modern TypeScript ORM for type-safe database operations
- **Zod**: Runtime type validation and schema definition library

## Development Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side code compilation

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for Zod validation with React Hook Form

## Utilities
- **Class Variance Authority**: Utility for creating consistent component variants
- **CLSX & Tailwind Merge**: Conditional class composition and conflict resolution
- **Date-fns**: Modern date utility library for date formatting and manipulation