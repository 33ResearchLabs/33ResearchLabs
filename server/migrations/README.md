# Database Migrations

## Seeding Posts

To populate the database with the initial blog posts, run:

```bash
cd server
npm run seed:posts
```

This will:
1. Connect to your MongoDB database using the connection string from `.env`
2. Clear all existing posts in the `blogs` collection
3. Insert all posts from the posts data
4. Close the database connection

**Note:** Make sure your `.env` file has the correct `MONGODB_URI` configured before running the migration.

## What Gets Seeded

The migration includes 7 blog posts covering topics like:
- Modular Blockchains
- Zero-Knowledge Proofs
- Quantum-Resistant Cryptography
- Multi-Chain Infrastructure
- MLOps at Scale
- Deep Tech Economics
- Trust in Trustless Systems

Each post includes:
- Title, content, and excerpt
- Author, date, and read time
- Category and icon
- Color scheme for UI display
