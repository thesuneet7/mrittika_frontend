# Mrittika - AI Assistant for Indian Farmers

## Overview

Mrittika is a modern web application that provides AI-powered agricultural assistance specifically designed for Indian farmers. The platform offers hyperlocal farming advice through a conversational chat interface, supporting multiple languages including Hindi and English. The application aims to democratize access to agricultural expertise by providing 24/7 instant advice on crop management, disease identification, weather integration, and farming best practices tailored to Indian agricultural conditions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Comprehensive component library with consistent design tokens

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON communication
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development Server**: Custom Vite integration for hot module replacement in development

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definitions with Zod validation
- **Database**: PostgreSQL (configured but using in-memory storage currently)
- **Migrations**: Drizzle Kit for database schema management

### Chat System
- **Real-time Updates**: Polling-based approach for message updates (2-second intervals)
- **Session Management**: Unique session IDs for conversation tracking
- **AI Simulation**: Mock responses with realistic agricultural advice in multiple languages
- **Message Storage**: Persistent chat history per session

### Development Features
- **Hot Reload**: Full-stack development with Vite middleware integration
- **Type Safety**: End-to-end TypeScript with shared type definitions
- **Code Organization**: Monorepo structure with shared schemas between client and server
- **Path Aliases**: Convenient import paths for better code organization

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Comprehensive primitive component library for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Modern icon library with consistent design
- **class-variance-authority**: Type-safe variant API for component styling

### Development Tools
- **Vite**: Modern build tool with fast HMR and optimized builds
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with autoprefixer

### Data Management
- **TanStack Query**: Powerful data synchronization and caching
- **Drizzle ORM**: Type-safe database toolkit with migrations
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Performant form handling with validation

### Backend Infrastructure
- **Express.js**: Web application framework for Node.js
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **connect-pg-simple**: PostgreSQL session store (configured for future use)

### Specialized Libraries
- **date-fns**: Modern date utility library
- **wouter**: Minimalist routing for React applications
- **cmdk**: Command palette component for enhanced UX