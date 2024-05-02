import { config } from '@/config/config';
import { Db, MongoClient } from 'mongodb';

const uri = config.MONGODB_URI || '';
let db: Db | null = null

export async function getDb(): Promise<Db> {
  if (!db) {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
      db = client.db();
    } catch (error) {
      console.error('Error connecting to MongoDb Atlas:', error)
      throw error;
    }
  }
  return db;
}




