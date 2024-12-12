
const sportsStories = [
{
  "id": "M001",
  "title": "The Vanishing Painting",
  "characters": ["Olivia", "Max"],
  "sport_image": "mystery_vanishing_painting.jpg",
  "story_content": "Olivia and Max visit a renowned art gallery where a famous painting suddenly disappears before their eyes. No alarms are triggered, and no one else seems to notice.",
  "choices": [
    "Investigate the gallery for secret passages.",
    "Confront the gallery owner about the missing painting."
  ],
  "outcomes": {
    "1": {
      "result": "They find a hidden door behind another painting leading to a dark hallway.",
      "next_choices": [
        "Follow the hallway to uncover its secrets.",
        "Leave and report it to the authorities."
      ]
    },
    "2": {
      "result": "The gallery owner seems evasive and nervous.",
      "next_choices": [
        "Sneak into the gallery after hours to gather evidence.",
        "Demand answers from the owner on the spot."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the painting was part of an elaborate heist.",
    "choices": [
      "Expose the truth and involve the police.",
      "Keep the discovery secret and use it to their advantage."
    ],
    "outcomes": {
      "1": { "result": "The authorities recover the painting, and they are hailed as heroes." },
      "2": { "result": "The painting remains hidden, but they uncover more mysteries connected to the heist." }
    }
  }
},
{
  "id": "M002",
  "title": "The Disappearing Train",
  "characters": ["Sophia", "Liam"],
  "sport_image": "mystery_disappearing_train.jpg",
  "story_content": "Sophia and Liam board a late-night train, but when they wake up, they find themselves in an abandoned station with no signs of the train or other passengers.",
  "choices": [
    "Explore the station for clues.",
    "Wait at the station in hopes of another train arriving."
  ],
  "outcomes": {
    "1": {
      "result": "They find old tickets and newspapers dated decades ago.",
      "next_choices": [
        "Search for an exit out of the station.",
        "Try to piece together the mystery of the old station."
      ]
    },
    "2": {
      "result": "A train approaches, but it looks eerily similar to the one they were on.",
      "next_choices": [
        "Board the approaching train.",
        "Run away from the station entirely."
      ]
    }
  },
  "final_interaction": {
    "situation": "They learn that the station is caught in a time loop.",
    "choices": [
      "Try to break the loop and escape.",
      "Stay to uncover the station’s history and secrets."
    ],
    "outcomes": {
      "1": { "result": "They manage to break the loop and return to the present." },
      "2": { "result": "They uncover the station’s tragic past but remain stuck in the loop." }
    }
  }
},
{
  "id": "M003",
  "title": "The Whispering Letters",
  "characters": ["Ella", "Ryan"],
  "sport_image": "mystery_whispering_letters.jpg",
  "story_content": "Ella starts receiving anonymous letters written in riddles, hinting at secrets about her family. Ryan agrees to help her solve them.",
  "choices": [
    "Follow the clues in the letters.",
    "Ignore the letters and focus on their daily lives."
  ],
  "outcomes": {
    "1": {
      "result": "The riddles lead them to an abandoned house in the woods.",
      "next_choices": [
        "Enter the house to investigate.",
        "Take the letters to the police for help."
      ]
    },
    "2": {
      "result": "More letters start arriving, becoming more urgent and cryptic.",
      "next_choices": [
        "Finally decide to follow the clues.",
        "Try to destroy the letters and end the mystery."
      ]
    }
  },
  "final_interaction": {
    "situation": "The letters reveal a hidden family secret tied to a fortune.",
    "choices": [
      "Search for the fortune and risk danger.",
      "Leave the mystery unsolved to stay safe."
    ],
    "outcomes": {
      "1": { "result": "They uncover the fortune and a shocking family history." },
      "2": { "result": "The mystery fades, but they always wonder what they missed." }
    }
  }
},
{
  "id": "M004",
  "title": "The Clock Tower’s Secret",
  "characters": ["Nina", "Eric"],
  "sport_image": "mystery_clock_tower.jpg",
  "story_content": "Nina and Eric find an old clock tower in their town that chimes at odd times. They learn it hasn’t worked for decades.",
  "choices": [
    "Climb the clock tower to investigate.",
    "Ask the townsfolk about the tower’s history."
  ],
  "outcomes": {
    "1": {
      "result": "Inside, they find gears moving on their own, marking a strange pattern.",
      "next_choices": [
        "Decipher the pattern to find its meaning.",
        "Stop the gears to end the anomaly."
      ]
    },
    "2": {
      "result": "The townsfolk share tales of the tower being cursed.",
      "next_choices": [
        "Ignore the stories and continue investigating.",
        "Leave the mystery alone for their safety."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the tower holds a key to a hidden underground chamber.",
    "choices": [
      "Explore the chamber to uncover its secrets.",
      "Seal the chamber and leave it undisturbed."
    ],
    "outcomes": {
      "1": { "result": "They find an ancient artifact that changes their lives." },
      "2": { "result": "The chamber remains hidden, but they avoid potential danger." }
    }
  }
},
{
  "id": "M005",
  "title": "The Missing Heirloom",
  "characters": ["Grace", "Ethan"],
  "sport_image": "mystery_missing_heirloom.jpg",
  "story_content": "Grace’s family heirloom, a rare sapphire necklace, goes missing during a family gathering. Grace and Ethan suspect foul play.",
  "choices": [
    "Question the family members discreetly.",
    "Search the house for clues."
  ],
  "outcomes": {
    "1": {
      "result": "Some family members act suspicious, refusing to answer questions.",
      "next_choices": [
        "Confront the most suspicious person.",
        "Set a trap to catch the culprit."
      ]
    },
    "2": {
      "result": "They find a torn piece of cloth near the safe.",
      "next_choices": [
        "Investigate who the cloth belongs to.",
        "Keep searching for more evidence."
      ]
    }
  },
  "final_interaction": {
    "situation": "They uncover that the heirloom was stolen to cover a family member’s secret debt.",
    "choices": [
      "Expose the thief to the whole family.",
      "Help the thief and keep the secret safe."
    ],
    "outcomes": {
      "1": { "result": "The heirloom is returned, but family tensions rise." },
      "2": { "result": "The thief avoids exposure, but they must live with their decision." }
    }
  }
},
{
  "id": "M006",
  "title": "The Case of the Silent Village",
  "characters": ["Emma", "Jake"],
  "sport_image": "mystery_silent_village.jpg",
  "story_content": "Emma and Jake arrive in a remote village only to find it eerily quiet. The villagers are present but refuse to speak to them or each other.",
  "choices": [
    "Try to communicate with the villagers using notes and gestures.",
    "Search the village for clues about the silence."
  ],
  "outcomes": {
    "1": {
      "result": "One villager slips them a note saying, 'Leave before nightfall.'",
      "next_choices": [
        "Stay to find out what happens after nightfall.",
        "Leave the village and report the situation."
      ]
    },
    "2": {
      "result": "They find strange symbols carved into the doors of the houses.",
      "next_choices": [
        "Investigate the meaning of the symbols.",
        "Destroy the symbols and see what happens."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the village is under a mysterious curse tied to an ancient artifact.",
    "choices": [
      "Break the curse by returning the artifact to its rightful place.",
      "Leave the artifact untouched and escape the village."
    ],
    "outcomes": {
      "1": { "result": "The villagers are freed from the curse, and they thank Emma and Jake." },
      "2": { "result": "The curse persists, but Emma and Jake escape unharmed." }
    }
  }
},
{
  "id": "M007",
  "title": "The Shadow in the Library",
  "characters": ["Clara", "Ben"],
  "sport_image": "mystery_shadow_library.jpg",
  "story_content": "Clara and Ben discover an old library where a shadowy figure seems to move among the bookshelves, leaving behind torn pages.",
  "choices": [
    "Follow the shadow to see where it leads.",
    "Collect the torn pages to piece together a clue."
  ],
  "outcomes": {
    "1": {
      "result": "The shadow leads them to a hidden room in the library.",
      "next_choices": [
        "Enter the room to investigate.",
        "Seal the room and avoid potential danger."
      ]
    },
    "2": {
      "result": "The torn pages form a map of the library with an 'X' marked on it.",
      "next_choices": [
        "Go to the marked location to investigate.",
        "Ignore the map and leave the library."
      ]
    }
  },
  "final_interaction": {
    "situation": "They uncover an ancient book with secrets about the shadowy figure.",
    "choices": [
      "Use the book to banish the shadow.",
      "Keep the book to study its secrets further."
    ],
    "outcomes": {
      "1": { "result": "The shadow vanishes, and the library becomes safe." },
      "2": { "result": "They learn powerful secrets but remain haunted by the shadow." }
    }
  }
},
{
  "id": "M008",
  "title": "The Midnight Signal",
  "characters": ["Ava", "Ethan"],
  "sport_image": "mystery_midnight_signal.jpg",
  "story_content": "Every night at midnight, Ava and Ethan hear a mysterious signal on their old radio, broadcasting numbers and phrases in different languages.",
  "choices": [
    "Decipher the signal to understand its meaning.",
    "Try to track the origin of the signal."
  ],
  "outcomes": {
    "1": {
      "result": "The numbers match coordinates on a map.",
      "next_choices": [
        "Visit the coordinates to investigate.",
        "Report the signal to experts for help."
      ]
    },
    "2": {
      "result": "They trace the signal to an abandoned radio station.",
      "next_choices": [
        "Enter the station to explore.",
        "Stay outside and observe the station from afar."
      ]
    }
  },
  "final_interaction": {
    "situation": "The signal turns out to be a distress call from someone trapped in another dimension.",
    "choices": [
      "Help free the trapped individual.",
      "Leave the mystery unsolved for safety."
    ],
    "outcomes": {
      "1": { "result": "The individual is saved, and they are forever grateful." },
      "2": { "result": "The signal fades, but they avoid further danger." }
    }
  }
},
{
  "id": "M009",
  "title": "The Puzzle Box",
  "characters": ["Mia", "Logan"],
  "sport_image": "mystery_puzzle_box.jpg",
  "story_content": "Mia finds an intricate puzzle box in her attic, left behind by her great-grandfather. Logan joins her in attempting to solve it, but the box reveals strange mechanisms as they progress.",
  "choices": [
    "Continue solving the puzzle box despite the risks.",
    "Research its origins before proceeding further."
  ],
  "outcomes": {
    "1": {
      "result": "The box reveals a hidden compartment containing an ancient key.",
      "next_choices": [
        "Find what the key unlocks.",
        "Keep the box locked and secure."
      ]
    },
    "2": {
      "result": "They discover the box is linked to a series of mysterious disappearances.",
      "next_choices": [
        "Use the box to uncover more secrets.",
        "Destroy the box to end its influence."
      ]
    }
  },
  "final_interaction": {
    "situation": "The box’s mystery leads to a treasure trove guarded by riddles.",
    "choices": [
      "Solve the riddles to claim the treasure.",
      "Leave the treasure untouched to avoid danger."
    ],
    "outcomes": {
      "1": { "result": "They solve the riddles and uncover priceless artifacts." },
      "2": { "result": "The treasure remains hidden, but they remain safe." }
    }
  }
},
{
  "id": "M010",
  "title": "The Forgotten Island",
  "characters": ["Zara", "Leo"],
  "sport_image": "mystery_forgotten_island.jpg",
  "story_content": "Zara and Leo find a map to a forgotten island that isn’t on any modern charts. When they arrive, they discover strange ruins and signs of an ancient civilization.",
  "choices": [
    "Explore the ruins for more information.",
    "Set up camp and observe the island first."
  ],
  "outcomes": {
    "1": {
      "result": "They find inscriptions hinting at a hidden chamber.",
      "next_choices": [
        "Search for the chamber immediately.",
        "Return with proper tools and experts."
      ]
    },
    "2": {
      "result": "They spot strange lights moving in the distance at night.",
      "next_choices": [
        "Follow the lights to their source.",
        "Stay at camp and avoid potential danger."
      ]
    }
  },
  "final_interaction": {
    "situation": "They uncover a lost artifact that could rewrite history.",
    "choices": [
      "Reveal the discovery to the world.",
      "Keep it hidden to preserve the island’s secrets."
    ],
    "outcomes": {
      "1": { "result": "The artifact brings fame but also controversy." },
      "2": { "result": "The island remains a mystery, but they leave with unforgettable memories." }
    }
  }
}











];

function getRandomStory() {
  const randomIndex = Math.floor(Math.random() * sportsStories.length);
  return sportsStories[randomIndex];
}

// Export the function to use it in the main HTML page
export { getRandomStory };