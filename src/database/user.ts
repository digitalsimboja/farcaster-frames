import { UserData } from "@/app/api/questions/route";
import { getDb } from "./connect";
import { MongoClient } from "mongodb";
import { config } from "@/config/config";

const uri = config.MONGODB_URI || '';

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
  