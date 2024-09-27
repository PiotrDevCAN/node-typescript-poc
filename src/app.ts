import express from 'express';
import graphqlRoute from './routes/graphqlRoute';

const app = express();

// Use GraphQL route
app.use('/api', graphqlRoute);

export default app;
