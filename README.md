# 💰 Investment Calculator

A simple **investment calculator** built with React.  
This is an **educational project** that demonstrates how to use React for building interactive applications with dynamic inputs and computed results.

## 🚀 Features
- User input for initial investment, annual investment, expected return, and duration  
- Automatic recalculation of results on input changes  
- Validation for duration (must be greater than zero)  
- Tabular output showing yearly growth, interest, and invested capital  
- Clean and reusable React components (`Header`, `UserInput`, `Results`)  

## 📚 React Concepts Demonstrated
- **Components** – splitting UI into smaller reusable parts  
- **Props** – passing data and event handlers to child components  
- **State (`useState`)** – managing dynamic input values  
- **Derived state** – computed data via helper functions (`calculateInvestmentResults`)  
- **Conditional rendering** – error message for invalid input  
- **Event handling** – updating state on input changes  

## 🛠 Installation & Run
```bash
# Clone repository
git clone <your-repo-url>

# Navigate to project folder
cd investment-calculator

# Install dependencies
npm install

# Start development server
npm run dev

