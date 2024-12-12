const sportsStories = [
{
  "id": "A001",
  "title": "The Lost Temple",
  "characters": ["Liam", "Emma"],
  "sport_image": "adventure_lost_temple.jpg",
  "story_content": "Liam and Emma are archaeologists on an expedition to find a long-lost temple deep in the jungle. Their journey is full of dangers and unknowns, but they are determined to uncover the ancient secrets hidden within.",
  "choices": [
    "Follow the ancient map deeper into the jungle.",
    "Look for a safer route along the river."
  ],
  "outcomes": {
    "1": {
      "result": "They follow the map, but the jungle gets denser and more perilous. They encounter wild animals and treacherous terrain.",
      "next_choices": [
        "Use their climbing gear to scale a cliff and find a new path.",
        "Risk the dangerous quicksand and continue through the swamp."
      ]
    },
    "2": {
      "result": "They take the safer route, but it leads them into a hidden village where the locals are wary of strangers. Tensions rise as they try to gain the villagers' trust.",
      "next_choices": [
        "Offer the villagers a rare artifact as a peace offering.",
        "Leave the village and continue their search for the temple."
      ]
    }
  },
  "final_interaction": {
    "situation": "They finally find the temple, but it's surrounded by traps. They must decide how to proceed with their discovery.",
    "choices": [
      "Disable the traps and explore the temple carefully.",
      "Enter the temple without hesitation, risking everything for the treasure."
    ],
    "outcomes": {
      "1": { "result": "They carefully disable the traps and uncover hidden treasures, earning the respect of the archaeological community." },
      "2": { "result": "They rush in and set off the traps, narrowly escaping with their lives but no treasure." }
    }
  }
},
{
  "id": "A002",
  "title": "Escape from the Island",
  "characters": ["Tom", "Sarah"],
  "sport_image": "adventure_escape_island.jpg",
  "story_content": "After their plane crashes on a deserted island, Tom and Sarah must work together to survive and find a way to escape. The island is filled with mysteries, and they must face dangerous wildlife and hostile terrain.",
  "choices": [
    "Look for food and fresh water.",
    "Search for a way to signal for rescue."
  ],
  "outcomes": {
    "1": {
      "result": "They find a small freshwater stream and hunt for food, but the island's predators are nearby.",
      "next_choices": [
        "Set up a defensive camp to protect themselves from the animals.",
        "Explore the island to find an escape route."
      ]
    },
    "2": {
      "result": "They build a makeshift signal fire, but the smoke attracts a group of hostile islanders.",
      "next_choices": [
        "Try to communicate peacefully with the islanders.",
        "Hide and hope the islanders leave before they’re discovered."
      ]
    }
  },
  "final_interaction": {
    "situation": "Tom and Sarah finally find a boat but must decide whether to stay on the island for a potential rescue or take the risk of escaping alone.",
    "choices": [
      "Escape on the boat, hoping to find land and civilization.",
      "Stay and wait for a rescue team, hoping for better chances of survival."
    ],
    "outcomes": {
      "1": { "result": "They escape the island, surviving the journey and eventually reaching a nearby coast, where they are rescued." },
      "2": { "result": "They stay and are eventually rescued by a search team, though their resources are running low." }
    }
  }
},
{
  "id": "A003",
  "title": "The Hidden Cave",
  "characters": ["Jack", "Sophia"],
  "sport_image": "adventure_hidden_cave.jpg",
  "story_content": "Jack and Sophia are exploring a vast cave system that no one has ever mapped before. They are looking for rare crystals hidden deep within, but the cave is full of hidden dangers and secrets.",
  "choices": [
    "Descend deeper into the cave to search for the crystals.",
    "Examine the strange markings on the cave walls."
  ],
  "outcomes": {
    "1": {
      "result": "They go deeper, discovering underground rivers and sudden drop-offs, and they lose their way in the dark.",
      "next_choices": [
        "Use their lanterns to retrace their steps.",
        "Push forward, hoping to find an exit."
      ]
    },
    "2": {
      "result": "The markings seem to tell a story, leading them to a hidden chamber with ancient artifacts.",
      "next_choices": [
        "Investigate the artifacts further.",
        "Look for an exit in case the cave is unstable."
      ]
    }
  },
  "final_interaction": {
    "situation": "They discover a treasure trove of crystals, but the cave begins to collapse. They must decide how to escape before it's too late.",
    "choices": [
      "Rush toward the exit, avoiding falling debris.",
      "Take a detour to explore a previously unexplored section for more treasures."
    ],
    "outcomes": {
      "1": { "result": "They narrowly escape with their lives, but the treasure remains buried beneath the rubble." },
      "2": { "result": "They risk it and find more treasure, but they barely make it out before the entire cave collapses." }
    }
  }
},
{
  "id": "A004",
  "title": "The Desert Chase",
  "characters": ["Chris", "Maya"],
  "sport_image": "adventure_desert_chase.jpg",
  "story_content": "Chris and Maya are on a high-speed chase across the desert to retrieve a stolen artifact. The thief is ahead of them, and the heat of the desert makes everything harder as they try to catch up.",
  "choices": [
    "Follow the thief's vehicle tracks through the sand dunes.",
    "Cut across the desert and take a shortcut through the canyon."
  ],
  "outcomes": {
    "1": {
      "result": "They follow the tracks, but the dunes make the terrain difficult and slow them down.",
      "next_choices": [
        "Speed up and risk getting stuck in the sand.",
        "Take a detour to find a road to speed up the chase."
      ]
    },
    "2": {
      "result": "They take the shortcut, but the canyon is narrow and filled with hidden obstacles.",
      "next_choices": [
        "Carefully navigate through the canyon and keep the chase alive.",
        "Turn back and try to catch up using the main path."
      ]
    }
  },
  "final_interaction": {
    "situation": "They corner the thief at the edge of a cliff, but there's nowhere to go. The decision is now in their hands.",
    "choices": [
      "Confront the thief and retrieve the artifact.",
      "Offer the thief a deal, hoping for a peaceful resolution."
    ],
    "outcomes": {
      "1": { "result": "They retrieve the artifact but must fight off the thief’s last-ditch effort to escape." },
      "2": { "result": "The thief agrees to hand over the artifact, but a new enemy appears from the shadows." }
    }
  }
},
{
  "id": "A005",
  "title": "The Sky Pirates",
  "characters": ["Captain Ray", "Eliza"],
  "sport_image": "adventure_sky_pirates.jpg",
  "story_content": "Captain Ray and Eliza are part of a crew on a skyship in a world where flying ships rule the skies. Their mission is to capture a notorious group of sky pirates who have been terrorizing the skies.",
  "choices": [
    "Chase the pirates through a stormy cloud bank.",
    "Ambush the pirates at the next docking station."
  ],
  "outcomes": {
    "1": {
      "result": "They chase the pirates into the cloud bank, but visibility is poor, and they risk crashing into the mountains.",
      "next_choices": [
        "Activate the cloaking device and sneak up on the pirates.",
        "Navigate carefully, trying to follow the pirate ship’s trail."
      ]
    },
    "2": {
      "result": "They set up the ambush, but the pirates are prepared and attack with all their firepower.",
      "next_choices": [
        "Defend the ship and engage in a battle with the pirates.",
        "Retreat and call for reinforcements from the fleet."
      ]
    }
  },
  "final_interaction": {
    "situation": "After a tense standoff, Captain Ray and Eliza finally capture the leader of the pirates. The bounty is theirs, but the reward comes with a moral dilemma.",
    "choices": [
      "Turn the pirate leader over to the authorities for justice.",
      "Release the pirate leader, sparking a new, dangerous alliance."
    ],
    "outcomes": {
      "1": { "result": "They turn the pirate leader in, bringing peace to the skies but losing a potential ally." },
      "2": { "result": "They release the pirate leader, forming an alliance that could either save or doom the skies." }
    }
  }
},
{
  "id": "A006",
  "title": "The Treasure of the Sea",
  "characters": ["Jack", "Olivia"],
  "sport_image": "adventure_treasure_sea.jpg",
  "story_content": "Jack and Olivia are treasure hunters searching for a legendary sunken ship off the coast. Their journey takes them through rough waters and dangerous encounters with pirates, but the lure of the treasure keeps them going.",
  "choices": [
    "Dive deep into the ocean to search for the wreckage.",
    "Ask the local fishermen for clues about the ship’s location."
  ],
  "outcomes": {
    "1": {
      "result": "They dive into the ocean, finding a hidden cave, but it’s filled with dangerous creatures.",
      "next_choices": [
        "Defend themselves using their underwater weapons.",
        "Retreat to the surface and try to find another way."
      ]
    },
    "2": {
      "result": "The fishermen give them a cryptic map, but it leads them into a pirate-infested area.",
      "next_choices": [
        "Hire a local guide to help navigate past the pirates.",
        "Brave the pirate-infested waters, hoping to get there first."
      ]
    }
  },
  "final_interaction": {
    "situation": "They find the shipwreck, but it’s surrounded by a powerful storm. The treasure is within their reach, but they must act fast.",
    "choices": [
      "Attempt to retrieve the treasure in the storm.",
      "Leave the treasure for another time and focus on escaping the storm."
    ],
    "outcomes": {
      "1": { "result": "They manage to secure the treasure, but the storm damages their ship." },
      "2": { "result": "They escape the storm, but the treasure remains lost to the depths." }
    }
  }
},
{
  "id": "A007",
  "title": "The Mountain Rescue",
  "characters": ["Mark", "Lila"],
  "sport_image": "adventure_mountain_rescue.jpg",
  "story_content": "Mark and Lila are experienced mountaineers who are part of a rescue mission to save climbers trapped on a dangerous peak. With time running out and the weather worsening, they must decide how to approach the rescue.",
  "choices": [
    "Climb directly to the summit to rescue the trapped climbers.",
    "Set up camp and wait for better weather to attempt the rescue."
  ],
  "outcomes": {
    "1": {
      "result": "They climb through treacherous conditions and find the climbers, but a sudden avalanche blocks their way back.",
      "next_choices": [
        "Find a new route down the mountain.",
        "Wait for help from other rescuers."
      ]
    },
    "2": {
      "result": "They wait for the weather to improve, but the trapped climbers’ situation worsens.",
      "next_choices": [
        "Attempt to climb in the worsening weather to save them.",
        "Send a distress signal for an airlift rescue."
      ]
    }
  },
  "final_interaction": {
    "situation": "After a long struggle, Mark and Lila reach the climbers, but the mountain’s harsh conditions threaten their lives.",
    "choices": [
      "Carry the climbers down to safety.",
      "Summon a helicopter to evacuate them as quickly as possible."
    ],
    "outcomes": {
      "1": { "result": "They manage to rescue the climbers but barely escape with their own lives." },
      "2": { "result": "The helicopter arrives just in time, and everyone is saved from the mountain." }
    }
  }
},
{
  "id": "A008",
  "title": "The Jungle Expedition",
  "characters": ["Ben", "Hannah"],
  "sport_image": "adventure_jungle_expedition.jpg",
  "story_content": "Ben and Hannah are part of an expedition into the heart of an uncharted jungle. They are tasked with discovering new species and exploring ancient ruins, but the jungle is filled with dangerous wildlife and hidden traps.",
  "choices": [
    "Follow the river deeper into the jungle.",
    "Explore the ruins that are said to be cursed."
  ],
  "outcomes": {
    "1": {
      "result": "The river leads them to a dense part of the jungle filled with dangerous predators and treacherous terrain.",
      "next_choices": [
        "Set up a trap to defend themselves from predators.",
        "Continue along the river, hoping to find a safer route."
      ]
    },
    "2": {
      "result": "The ruins are full of ancient traps, and they must figure out how to avoid them.",
      "next_choices": [
        "Carefully navigate the ruins to discover the secrets hidden within.",
        "Leave the ruins and continue exploring the jungle."
      ]
    }
  },
  "final_interaction": {
    "situation": "After uncovering a hidden treasure, they must decide whether to take the treasure or leave it, as the jungle begins to close in around them.",
    "choices": [
      "Take the treasure and face the jungle’s wrath.",
      "Leave the treasure behind and escape the jungle safely."
    ],
    "outcomes": {
      "1": { "result": "They take the treasure, but the jungle becomes hostile, and they barely make it out alive." },
      "2": { "result": "They leave the treasure, but the jungle parts to let them escape unharmed." }
    }
  }
},
{
  "id": "A009",
  "title": "The Arctic Expedition",
  "characters": ["John", "Samantha"],
  "sport_image": "adventure_arctic_expedition.jpg",
  "story_content": "John and Samantha are scientists on an expedition to the Arctic to study climate change. They are in a race against time to collect data before a storm arrives, but the unforgiving cold and rough terrain make their mission difficult.",
  "choices": [
    "Head toward the glacier to collect ice core samples.",
    "Stay in the camp and monitor the weather for changes."
  ],
  "outcomes": {
    "1": {
      "result": "The glacier is treacherous, and they risk getting caught in a snowstorm. They must make a quick decision.",
      "next_choices": [
        "Turn back to camp before the storm hits.",
        "Push forward and hope they can finish the task before the storm hits."
      ]
    },
    "2": {
      "result": "They monitor the weather but learn that a massive blizzard is on the way. Their only option is to prepare for the worst.",
      "next_choices": [
        "Fortify the camp and wait for the storm to pass.",
        "Attempt to make a run for the extraction point before the storm reaches them."
      ]
    }
  },
  "final_interaction": {
    "situation": "The storm hits, and they must decide whether to wait out the storm or risk moving toward safety.",
    "choices": [
      "Wait for the storm to pass and hope for the best.",
      "Make a dangerous trek toward the extraction point through the storm."
    ],
    "outcomes": {
      "1": { "result": "They survive the storm, but the data they collected is lost." },
      "2": { "result": "They brave the storm, reaching safety with vital data for their research." }
    }
  }
},
{
  "id": "A010",
  "title": "The Space Colony",
  "characters": ["Ethan", "Zara"],
  "sport_image": "adventure_space_colony.jpg",
  "story_content": "Ethan and Zara are astronauts sent to establish the first human colony on Mars. They must overcome obstacles such as limited resources, alien terrain, and technical failures as they try to build a sustainable life on the red planet.",
  "choices": [
    "Search for water sources to ensure the colony’s survival.",
    "Repair the communication system to send a distress signal back to Earth."
  ],
  "outcomes": {
    "1": {
      "result": "They find a potential water source, but it’s far from the colony, and the journey is dangerous.",
      "next_choices": [
        "Risk the journey to secure the water source.",
        "Build a new filtration system using existing resources."
      ]
    },
    "2": {
      "result": "They manage to repair the communication system, but the distress signal is weak and may not reach Earth in time.",
      "next_choices": [
        "Strengthen the signal and try again.",
        "Hope that their message will be received as they continue the mission."
      ]
    }
  },
  "final_interaction": {
    "situation": "With the water secured and communication established, they must decide the next step in the colony’s survival.",
    "choices": [
      "Continue building the colony and hope for future supplies.",
      "Focus on getting a return ship from Earth and leaving the colony behind."
    ],
    "outcomes": {
      "1": { "result": "They successfully build the colony, becoming pioneers in space exploration." },
      "2": { "result": "They decide to return to Earth, leaving behind the dream of the colony for now." }
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