import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "jessicadavis@gmail.com",
    fullName: "Jessica Davis",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    email: "hennah.baker@gmail.com",
    fullName: "Hannah Baker",
    password: "87654321",
    profilePic: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    email: "ava.wilson@gmail.com",
    fullName: "Ava Wilson",
    password: "123456787",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "sheriholland@gmail.com",
    fullName: "Sheri Holland",
    password: "123453678",
    profilePic: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    email: "courtneycrimsen@gmail.com",
    fullName: "Courtney Crimsen",
    password: "123456782",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    email: "amelia.garcia@gmail.com",
    fullName: "Amelia Garcia",
    password: "123456896",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "clayjensen@gmail.com",
    fullName: "Clay Jensen",
    password: "12323456",
    profilePic: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    email: "alexstandall@gmail.com",
    fullName: "Alex Standall",
    password: "12345346",
    profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    email: "brycewalker@gmail.com",
    fullName: "Bryce Walker",
    password: "12345346",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "zachdempsey@gmail.com",
    fullName: "Zach Dempsey",
    password: "12344556",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "tylerdown@gmail.com",
    fullName: "Tyler Down",
    password: "12335456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "marcuscole@gmail.com",
    fullName: " Marcus Cole",
    password: "12345690",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "justinfoley@gmail.com",
    fullName: "Justin Foleyz",
    password: "12345986",
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