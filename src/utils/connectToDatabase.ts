import { UserData } from '@/app/api/questions/route';
import { config } from '@/config/config';
import { MongoClient } from 'mongodb';

const uri = config.MONGODB_URI || '';

export async function connectToDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db();
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    throw error;
  }
}

export async function savedUserData(userData: UserData) {
  const client = new MongoClient(uri);
  const db = await connectToDatabase()
  const userDataCollection = db.collection('userData')
  try {
    await userDataCollection.insertOne(userData)
    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  } finally {
    await client.close()
  }

}

export async function getUserDataByAddress(address: string) {
  const client = new MongoClient(uri);
  const db = await connectToDatabase()
  const userDataCollection = db.collection<UserData>('UserData');
 
  try {
    const userData = await userDataCollection.findOne({ userAddress: address });

    if (!userData) {
      throw Error(`No user found with address ${address}`);
    }

    return userData;

  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  } finally {
    await client.close()
  }

}

export async function getAllUserData(): Promise<UserData[]> {
  try {
    const db = await connectToDatabase(); 
    const userDataCollection = db.collection<UserData>('UserData'); 

    const userDataList = await userDataCollection.find({}).toArray(); 


    return userDataList;
  } catch (error) {
    console.error('Error retrieving all user data:', error);
    throw error;
  }
}


