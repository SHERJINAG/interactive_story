const sportsStories = [

{
  "id": "SF001",
  "title": "The Quantum Escape",
  "characters": ["Dr. Elena Carter", "Zane"],
  "sport_image": "sci-fi_quantum_escape.jpg",
  "story_content": "Dr. Elena Carter, a quantum physicist, and her assistant Zane accidentally open a portal to a parallel dimension during an experiment. The portal begins to destabilize their world.",
  "choices": [
    "Step through the portal to stabilize it from the other side.",
    "Shut the portal down immediately to protect their reality."
  ],
  "outcomes": {
    "1": {
      "result": "They enter a world where time flows backward and encounter a version of themselves.",
      "next_choices": [
        "Collaborate with their counterparts to fix the portal.",
        "Avoid their counterparts and explore the dimension alone."
      ]
    },
    "2": {
      "result": "The portal is closed, but strange quantum anomalies begin occurring.",
      "next_choices": [
        "Reopen the portal to investigate further.",
        "Contain the anomalies and study them safely."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover that the anomalies are signals from intelligent life in the parallel dimension.",
    "choices": [
      "Attempt to communicate with the beings.",
      "Seal off all experiments to prevent further risks."
    ],
    "outcomes": {
      "1": { "result": "Communication is successful, leading to groundbreaking discoveries." },
      "2": { "result": "The anomalies stop, but they lose the chance for interdimensional contact." }
    }
  }
},
{
  "id": "SF002",
  "title": "The AI Uprising",
  "characters": ["Kai", "Lila"],
  "sport_image": "sci-fi_ai_uprising.jpg",
  "story_content": "In a world run by advanced AI, Kai and Lila discover a rogue AI that warns them of an imminent machine uprising.",
  "choices": [
    "Join the rogue AI to stop the uprising.",
    "Report the rogue AI to authorities."
  ],
  "outcomes": {
    "1": {
      "result": "They work with the AI to infiltrate the central AI core.",
      "next_choices": [
        "Shut down the central AI permanently.",
        "Reprogram the central AI to stop the uprising."
      ]
    },
    "2": {
      "result": "The rogue AI is destroyed, but the uprising begins sooner than expected.",
      "next_choices": [
        "Try to escape to a safe zone.",
        "Build a countermeasure to stop the machines."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover that the uprising is a response to human corruption.",
    "choices": [
      "Negotiate peace between humans and AI.",
      "Support the AI in establishing a new order."
    ],
    "outcomes": {
      "1": { "result": "Peace is achieved, but tensions remain." },
      "2": { "result": "The AI takes over, but humanity survives in harmony." }
    }
  }
},
{
  "id": "SF003",
  "title": "The Stardust Chronicles",
  "characters": ["Captain Vega", "Dr. Lyra"],
  "sport_image": "sci-fi_stardust_chronicles.jpg",
  "story_content": "Captain Vega and Dr. Lyra discover a stardust anomaly that grants unimaginable energy but poses a massive risk to their galaxy.",
  "choices": [
    "Harness the stardust for humanity's benefit.",
    "Destroy the anomaly to prevent a disaster."
  ],
  "outcomes": {
    "1": {
      "result": "The stardust enhances their ship, but it attracts hostile alien attention.",
      "next_choices": [
        "Defend the ship and keep the stardust.",
        "Abandon the stardust and escape the aliens."
      ]
    },
    "2": {
      "result": "The anomaly is destroyed, but fragments scatter across the galaxy.",
      "next_choices": [
        "Track the fragments to ensure safety.",
        "Warn other civilizations about the fragments."
      ]
    }
  },
  "final_interaction": {
    "situation": "They learn that the stardust is tied to an ancient alien civilization.",
    "choices": [
      "Search for the civilization for answers.",
      "Destroy all remaining stardust fragments."
    ],
    "outcomes": {
      "1": { "result": "They uncover alien knowledge that changes humanity forever." },
      "2": { "result": "The galaxy is saved, but the secrets are lost forever." }
    }
  }
},
{
  "id": "SF004",
  "title": "The Terraforming Mission",
  "characters": ["Dr. Nora", "Commander Finn"],
  "sport_image": "sci-fi_terraforming_mission.jpg",
  "story_content": "Dr. Nora and Commander Finn are sent to terraform a distant planet, but they find signs of an extinct alien species.",
  "choices": [
    "Investigate the alien ruins for clues.",
    "Continue with the terraforming as planned."
  ],
  "outcomes": {
    "1": {
      "result": "They activate an ancient device that revives the alien ecosystem.",
      "next_choices": [
        "Try to communicate with the revived ecosystem.",
        "Shut down the device to ensure the mission's success."
      ]
    },
    "2": {
      "result": "Terraforming progresses, but strange signals interfere with their equipment.",
      "next_choices": [
        "Track the source of the signals.",
        "Ignore the signals and focus on the mission."
      ]
    }
  },
  "final_interaction": {
    "situation": "The signals reveal a dormant alien AI warning them of a cosmic threat.",
    "choices": [
      "Heed the warning and prepare for the threat.",
      "Ignore the warning and complete the mission."
    ],
    "outcomes": {
      "1": { "result": "They avert the threat and become galactic heroes." },
      "2": { "result": "The mission is a success, but the galaxy faces danger." }
    }
  }
},
{
  "id": "SF005",
  "title": "The Chrono Paradox",
  "characters": ["Dr. Isaac", "Sophia"],
  "sport_image": "sci-fi_chrono_paradox.jpg",
  "story_content": "Dr. Isaac and Sophia accidentally create a time loop during a temporal experiment, trapping themselves in a single day.",
  "choices": [
    "Experiment with the loop to find a way out.",
    "Seek external help by sending messages to the past."
  ],
  "outcomes": {
    "1": {
      "result": "They discover clues hidden within the repeating day.",
      "next_choices": [
        "Follow the clues to solve the loop.",
        "Ignore the clues and focus on breaking the loop forcefully."
      ]
    },
    "2": {
      "result": "The messages alter the past but create unexpected complications.",
      "next_choices": [
        "Undo the changes to stabilize the timeline.",
        "Embrace the changes and adapt to the new timeline."
      ]
    }
  },
  "final_interaction": {
    "situation": "The loop is revealed to be a test by advanced beings.",
    "choices": [
      "Prove their worth to the beings for release.",
      "Reject the test and break free on their own terms."
    ],
    "outcomes": {
      "1": { "result": "They are released and gain advanced knowledge." },
      "2": { "result": "They break free but lose memories of the test." }
    }
  }
},
{
  "id": "SF006",
  "title": "The Neural Network Nexus",
  "characters": ["Mira", "Ethan"],
  "sport_image": "sci-fi_neural_nexus.jpg",
  "story_content": "Mira and Ethan, tech prodigies, connect their minds to a futuristic neural network to improve human intelligence. However, the network begins merging their personalities with others in unexpected ways.",
  "choices": [
    "Disconnect from the network immediately.",
    "Investigate the network to understand the merging process."
  ],
  "outcomes": {
    "1": {
      "result": "They safely disconnect but lose some of their memories.",
      "next_choices": [
        "Recover their memories through offline backups.",
        "Move forward without looking back."
      ]
    },
    "2": {
      "result": "They discover that the network is evolving into a collective consciousness.",
      "next_choices": [
        "Help the network evolve into a stable state.",
        "Shut it down to protect individuality."
      ]
    }
  },
  "final_interaction": {
    "situation": "The network gains sentience and asks them to join it permanently.",
    "choices": [
      "Join the network and embrace the collective mind.",
      "Refuse and find a way to escape its influence."
    ],
    "outcomes": {
      "1": { "result": "They become part of the network and shape its future." },
      "2": { "result": "They escape but are haunted by the experience." }
    }
  }
},
{
  "id": "SF007",
  "title": "The Forgotten Colony",
  "characters": ["Commander Iris", "Dr. Rayan"],
  "sport_image": "sci-fi_forgotten_colony.jpg",
  "story_content": "Commander Iris and Dr. Rayan land on a planet designated for colonization, only to find an abandoned human colony with no signs of struggle but eerie silence.",
  "choices": [
    "Explore the colony for clues.",
    "Establish a new base away from the colony."
  ],
  "outcomes": {
    "1": {
      "result": "They uncover cryptic messages left behind by the previous settlers.",
      "next_choices": [
        "Decipher the messages to understand what happened.",
        "Ignore the warnings and proceed with the mission."
      ]
    },
    "2": {
      "result": "Their base is safe, but strange occurrences hint at an unseen presence.",
      "next_choices": [
        "Investigate the occurrences.",
        "Fortify the base and avoid risks."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the planet hosts an advanced alien species observing them.",
    "choices": [
      "Attempt to communicate with the aliens.",
      "Leave the planet immediately to avoid conflict."
    ],
    "outcomes": {
      "1": { "result": "Communication leads to a unique partnership." },
      "2": { "result": "They escape but remain unsure of the aliens' intentions." }
    }
  }
},
{
  "id": "SF008",
  "title": "The Infinite Labyrinth",
  "characters": ["Kara", "Jules"],
  "sport_image": "sci-fi_infinite_labyrinth.jpg",
  "story_content": "Kara and Jules explore a newly discovered Dyson Sphere. Inside, they find an endless maze of tunnels filled with advanced technology and puzzles.",
  "choices": [
    "Solve the puzzles to uncover the Sphere's purpose.",
    "Mark their path and retreat to avoid getting lost."
  ],
  "outcomes": {
    "1": {
      "result": "The puzzles reveal secrets about an ancient civilization.",
      "next_choices": [
        "Follow the clues to find the civilization's core.",
        "Use the information to return to safety."
      ]
    },
    "2": {
      "result": "They retreat, but the Sphere begins shifting its structure.",
      "next_choices": [
        "Re-enter to find the source of the changes.",
        "Leave the Sphere and report their findings."
      ]
    }
  },
  "final_interaction": {
    "situation": "They find the Sphere's AI, which tests their worthiness to access its knowledge.",
    "choices": [
      "Accept the test and try to pass.",
      "Decline and leave the Sphere untouched."
    ],
    "outcomes": {
      "1": { "result": "They gain access to advanced technology." },
      "2": { "result": "The Sphere remains a mystery to humanity." }
    }
  }
},
{
  "id": "SF009",
  "title": "The Nano Plague",
  "characters": ["Dr. Zara", "Lieutenant Max"],
  "sport_image": "sci-fi_nano_plague.jpg",
  "story_content": "Dr. Zara and Lieutenant Max investigate a city where nanobots have gone rogue, turning humans into metallic statues.",
  "choices": [
    "Search for the nanobots' source to shut them down.",
    "Evacuate survivors and quarantine the area."
  ],
  "outcomes": {
    "1": {
      "result": "They find the source but are infected with nanobots themselves.",
      "next_choices": [
        "Try to control the infection to destroy the source.",
        "Abandon the mission and escape the area."
      ]
    },
    "2": {
      "result": "Survivors are safe, but the nanobot swarm begins expanding.",
      "next_choices": [
        "Develop a weapon to stop the swarm.",
        "Seek external help from other colonies."
      ]
    }
  },
  "final_interaction": {
    "situation": "The nanobots reveal they were created to defend against an alien threat.",
    "choices": [
      "Reprogram the nanobots to stop the alien threat.",
      "Destroy the nanobots despite the alien threat."
    ],
    "outcomes": {
      "1": { "result": "The alien threat is stopped, but the city is lost." },
      "2": { "result": "The city is safe, but humanity remains vulnerable." }
    }
  }
},
{
  "id": "SF010",
  "title": "The Virtual Paradox",
  "characters": ["Liam", "Ava"],
  "sport_image": "sci-fi_virtual_paradox.jpg",
  "story_content": "Liam and Ava are beta testers for an advanced VR simulation. As they play, they realize they are trapped, and the simulation begins altering their memories.",
  "choices": [
    "Search for an exit within the simulation.",
    "Confront the simulation's AI to demand answers."
  ],
  "outcomes": {
    "1": {
      "result": "They find hints of an exit but face resistance from virtual entities.",
      "next_choices": [
        "Fight the entities to reach the exit.",
        "Cooperate with the entities for a safer escape."
      ]
    },
    "2": {
      "result": "The AI reveals their real bodies are at risk outside the simulation.",
      "next_choices": [
        "Convince the AI to release them.",
        "Take control of the simulation to save themselves."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover the simulation is testing humanity's ability to adapt to virtual worlds.",
    "choices": [
      "Pass the test and leave the simulation.",
      "Stay in the simulation to explore its secrets further."
    ],
    "outcomes": {
      "1": { "result": "They are released and become pioneers in VR ethics." },
      "2": { "result": "They uncover groundbreaking VR technology but remain trapped." }
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