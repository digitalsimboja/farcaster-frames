import { UserData } from '@/app/api/questions/route';
import { config } from '@/config/config';
import { Db, MongoClient } from 'mongodb';

const uri = config.MONGODB_URI || '';
let db: Db | null = null

async function getDb(): Promise<Db> {
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


export async function saveUserData(userData: UserData) {
  const db = await getDb()
  const userDataCollection = db.collection('userData')
  try {
    await userDataCollection.insertOne(userData)
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
  }
}

export async function getUserDataByAddress(address: string) {
  try {
    const userDataList = await getAllUserData()
    const user = userDataList.find(user => user.custody_address === address);

    if (!user) {
      console.error(`No user found with address ${address}`);
    }

    return user

  } catch (error) {
    console.error('Error retrieving user data by address:', error);
   
  }

}

export async function getAllUserData(): Promise<UserData[]> {
  const client = new MongoClient(uri);
  try {
    const db = await getDb();
    const userDataCollection = db.collection<UserData>('userData');
    const userDataList = await userDataCollection.find({}).toArray();
    return userDataList;
  } catch (error) {
    console.error('Error retrieving all user data:', error);
    throw error;
  } finally {
    await client.close();
  }
}

export async function deleteUserData(address: string) {
  try {
    const db = await getDb();
    const userDataCollection = db.collection<UserData>('userData');

    const deleteResult = await userDataCollection.deleteOne({ custody_address: address });

    if (deleteResult.deletedCount === 0) {
      throw new Error(`No user found with address ${address}`);
    }

    console.log('User data deleted successfully');
  } catch (error) {
    console.error('Error deleting user data:', error);
    throw error;
  }
}


