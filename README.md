# 🏭 React Manufacturing Dashboard

A modern and responsive manufacturing industry dashboard built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Router**. This dashboard displays production data, orders, equipment, and analytics with support for light/dark mode and collapsible sidebar.

---

## ✨ Features

- 📊 Dashboard with production metrics and charts
- 🧾 Orders and equipment management sections
- 📈 Analytics section (placeholder)
- 🌗 Custom light/dark mode toggle
- 🎯 Responsive design
- 🎬 Animated sidebar (Framer Motion)
- 🧭 Navigation with active route highlighting
- ⚙️ Built with modern tooling: React + TypeScript + Tailwind CSS

---

## 📦 Tech Stack

- React + TypeScript
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone
cd manufacturing-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will be available at http://localhost:5173

## 🧱 Project Structure

```bash
src/
│
├── components/            # Reusable UI components
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── DashboardCards.tsx
│   ├── OrdersTable.tsx
│   └── ProductionChart.tsx
│
├── pages/                 # Page-level components
│   ├── Home.tsx
│   ├── Dashboard.tsx           # Main layout with Sidebar + Outlet
│   ├── DashboardMain.tsx      # Shown at route "/dashboard"
│   ├── OrdersPage.tsx
│   ├── EquipmentPage.tsx
│   └── AnalyticsPage.tsx
│
├── App.tsx                # React Router configuration
└── main.tsx               # Entry point
```
