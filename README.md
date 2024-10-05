# Factorial Growth Metrics Dashboard

This project is a full-stack application for Factorial's Growth Team, featuring a metrics visualization dashboard and A/B testing functionality.

## Technologies Used

- Frontend: Next.js (React) with TypeScript
- Backend: Ruby on Rails
- Database: PostgreSQL
- Styling: Tailwind CSS
- Testing: Jest, React Testing Library, RSpec
- Deployment: Docker, GitHub Actions, Heroku

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Ruby (v3.0.0 or later)
- PostgreSQL
- Docker (optional)

### Installation

1. Clone the repository:
   git clone https://github.com/alexfrontendfr/growth-metrics.git
   cd growth-metrics

2. Set up the backend:
   cd backend
   bundle install
   rails db:create db:migrate

3. Set up the frontend:
   cd ../frontend
   npm install

4. Create and configure the `.env` files as described in the Environment Variables section.

### Running the Application

1. Start the backend server:
   cd backend
   rails server

2. In a new terminal, start the frontend development server:
   cd frontend
   npm run dev

3. Open your browser and navigate to `http://localhost:3000`

## Testing

### Backend Tests

cd backend
rspec

### Frontend Tests

cd frontend
npm test

## Deployment

This project is set up for deployment on Heroku. Follow the Deployment section in the project guide for detailed instructions.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
