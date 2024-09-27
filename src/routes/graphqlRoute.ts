import { Router } from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { userSchema } from '../schemas/userSchema';
import { userResolver } from '../resolvers/userResolver';

const router = Router();

router.use('/graphql', createHandler({
  schema: userSchema,
  rootValue: userResolver,
//   graphiql: true, // Enable GraphiQL for testing
}));

export default router;
