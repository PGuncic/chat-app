import getRandomItem from "./get-random-item.js";

export default function getRandomUsername() {
    const firstNames = [
        "Angry", "Arogant", "Confused", "Cruel", "Demanding", "Frisky", 
        "Greedy", "Hyperactive", "Maniacal", "Misunderstood", "Pea-brained", 
        "Narrow-minded", "Rebelious", "Slippery", "Stubborn", "Teritorial", 
        "Useless", "Shaky","Self-absorbed",  "Twisted", "Zombie-like"
    ];
    const lastNames = [
        "Buffalo", "Bubble", "Sheep", "Toilet", "Lizard", "Waffle", 
        "Kumquat", "Burger", "Chimp","Gorilla", "Rhino", "Emu", "Gerbil",
        "Pickle", "Tofu", "Chicken", "Potato", "Hamster", "Lemur", "Frog",
        "Fish", "Goat", "Rat"
    ];
    return getRandomItem(firstNames) + " " + getRandomItem(lastNames);   
  }