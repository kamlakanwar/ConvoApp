import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "jessicadavis@email.com",
    fullName: "Jessica Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    email: "hennah.baker@email.com",
    fullName: "Hannah Baker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    email: "ava.wilson@email.com",
    fullName: "Ava Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "sheriholland@email.com",
    fullName: "Sheri Holland",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    email: "courtneycrimsen@email.com",
    fullName: "Courtney Crimsen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    email: "amelia.garcia@email.com",
    fullName: "Amelia Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "clayjensen@email.com",
    fullName: "Clay Jensen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    email: "alexstandall@email.com",
    fullName: "Alex Standall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    email: "brycewalker@email.com",
    fullName: "Bryce Walker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "zachdempsey@email.com",
    fullName: "Zach Dempsey",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "tylerdown@email.com",
    fullName: "Tyler Down",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "marcuscole@email.com",
    fullName: " Marcus Cole",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "justinfoley@email.com",
    fullName: "Justin Foleyz",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();