const sportsStories = [
{
  "id": "A001",
  "title": "The Ultimate Rescue",
  "characters": ["Alex", "Kara"],
  "sport_image": "action_rescue.jpg", // Image must be available in the images folder
  "story_content": "Alex and Kara are special agents on a high-stakes mission to rescue hostages held in a remote building. The building is heavily guarded, and the clock is ticking. Alex has to decide the best approach to get inside.",
  "choices": [
    "Use stealth to sneak in through the back entrance.",
    "Go in with guns blazing, taking out the guards."
  ],
  "outcomes": {
    "1": {
      "result": "Alex and Kara move silently through the shadows, bypassing the guards. They successfully infiltrate the building and free the hostages without alerting anyone.",
      "next_choices": [
        "Escape quickly with the hostages to the extraction point.",
        "Search for any intel before leaving the building."
      ]
    },
    "2": {
      "result": "Alex and Kara charge in, guns blazing. The guards are caught off-guard, but the noise alerts more enemies, and they find themselves in a fierce gunfight.",
      "next_choices": [
        "Fight through the building to reach the hostages.",
        "Find cover and wait for backup to arrive."
      ]
    }
  },
  "final_interaction": {
    "situation": "After securing the hostages, Alex and Kara are surrounded by enemy forces in the building. The extraction point is blocked. They need to make a critical decision.",
    "choices": [
      "Fight through the enemies and make a run for the extraction point.",
      "Set up an ambush and take down the enemies one by one."
    ],
    "outcomes": {
      "1": { "result": "Alex and Kara fight their way through the enemy lines, making it to the extraction point just in time. They escape with the hostages, victorious." },
      "2": { "result": "Alex and Kara set up a successful ambush, taking out the enemies one by one and securing a safe route to the extraction point. The mission is a success." }
    }
  }
},
{
  "id": "A002",
  "title": "The Buried Treasure",
  "characters": ["Jack", "Lily"],
  "sport_image": "action_treasure.jpg",
  "story_content": "Jack and Lily are treasure hunters on a remote island, searching for a legendary buried treasure. The island is full of traps, but they've found the spot where the treasure is hidden. It’s up to them to decide how to proceed.",
  "choices": [
    "Dig carefully in the suspected area.",
    "Use dynamite to blast open the ground."
  ],
  "outcomes": {
    "1": {
      "result": "Jack digs cautiously, uncovering an ancient chest with priceless jewels. They both escape the island safely with the treasure.",
      "next_choices": [
        "Set sail back to the mainland.",
        "Search for other hidden secrets on the island."
      ]
    },
    "2": {
      "result": "The explosion triggers a cave-in, and Jack and Lily are trapped underground. They must find a way out before the treasure becomes their tomb.",
      "next_choices": [
        "Search for a hidden exit in the cave.",
        "Use their tools to try to dig their way out."
      ]
    }
  },
  "final_interaction": {
    "situation": "The treasure is within their reach, but a deadly trap is triggered as they approach it.",
    "choices": [
      "Disarm the trap carefully.",
      "Run and hope the trap doesn’t catch them."
    ],
    "outcomes": {
      "1": { "result": "Jack disarms the trap, and they secure the treasure with no harm." },
      "2": { "result": "The trap activates, but they manage to escape just in time, though they lose some of the treasure." }
    }
  }
},
{
  "id": "A003",
  "title": "The Cyber Heist",
  "characters": ["Ethan", "Maya"],
  "sport_image": "action_cyber.jpg",
  "story_content": "Ethan and Maya are elite hackers planning a cyber heist to steal valuable data from a global corporation. The security systems are state-of-the-art, and they have only one chance to succeed.",
  "choices": [
    "Hack into the mainframe using stealth mode.",
    "Launch a direct attack to overwhelm the security systems."
  ],
  "outcomes": {
    "1": {
      "result": "Ethan bypasses the security undetected, retrieving the data while Maya keeps watch. They escape without a trace.",
      "next_choices": [
        "Cover their tracks and disappear into the dark web.",
        "Use the data to take down the corporation from within."
      ]
    },
    "2": {
      "result": "The direct attack triggers alarms, and they're forced into a high-stakes digital battle with corporate security. It’s all or nothing now.",
      "next_choices": [
        "Counter the attack and continue the heist.",
        "Abort the mission and escape before they're caught."
      ]
    }
  },
  "final_interaction": {
    "situation": "The security systems are closing in on them. They need to make a decision on how to complete the heist.",
    "choices": [
      "Go for the final data file and risk getting caught.",
      "Exit the system and escape with what they have."
    ],
    "outcomes": {
      "1": { "result": "They manage to steal the final data file, but they’re chased down by security. It’s a narrow escape." },
      "2": { "result": "They play it safe, getting away undetected but without the final file. Still, the heist is a success." }
    }
  }
},
{
  "id": "A004",
  "title": "The Military Infiltration",
  "characters": ["Sam", "Eva"],
  "sport_image": "action_military.jpg",
  "story_content": "Sam and Eva are elite soldiers on a covert mission to infiltrate an enemy base and retrieve crucial intelligence. The base is heavily guarded, and they need to decide how to approach the situation.",
  "choices": [
    "Infiltrate using night vision and silent weapons.",
    "Launch a surprise attack to neutralize the guards quickly."
  ],
  "outcomes": {
    "1": {
      "result": "Sam and Eva sneak through the enemy base undetected and retrieve the intelligence. They escape without a trace.",
      "next_choices": [
        "Wait for the extraction team.",
        "Activate the self-destruct to cover their tracks."
      ]
    },
    "2": {
      "result": "They take down the guards in a flurry of action, but their presence is detected, and the base goes into lockdown.",
      "next_choices": [
        "Fight through the lockdown to complete the mission.",
        "Regroup and escape to fight another day."
      ]
    }
  },
  "final_interaction": {
    "situation": "Sam and Eva are surrounded by enemy soldiers. The extraction point is almost reached, but they need to make a decision.",
    "choices": [
      "Fight their way out to the extraction point.",
      "Set up an ambush and take down the soldiers."
    ],
    "outcomes": {
      "1": { "result": "They fight their way through the base, reaching the extraction point just in time." },
      "2": { "result": "They set up an ambush and take down the enemy, securing a safe path to the extraction." }
    }
  }
},
{
  "id": "A005",
  "title": "The Hostage Situation",
  "characters": ["Chris", "Tina"],
  "sport_image": "action_hostage.jpg",
  "story_content": "Chris and Tina are part of an elite SWAT team responding to a hostage situation in a high-rise building. The suspects are heavily armed, and the hostages' lives are at stake.",
  "choices": [
    "Storm the building with full force.",
    "Negotiate with the suspects to buy time."
  ],
  "outcomes": {
    "1": {
      "result": "Chris and Tina breach the building, engaging in a fierce firefight with the suspects. They successfully free the hostages.",
      "next_choices": [
        "Escape the building with the hostages.",
        "Search for any remaining threats in the building."
      ]
    },
    "2": {
      "result": "Chris and Tina manage to buy time through negotiation, allowing the team to position themselves for a tactical assault.",
      "next_choices": [
        "Launch a coordinated attack.",
        "Attempt a non-violent resolution."
      ]
    }
  },
  "final_interaction": {
    "situation": "The suspects are cornered, but they have one final hostage. The team needs to act fast.",
    "choices": [
      "Make a quick strike to save the hostage.",
      "Set up a perimeter and negotiate for the hostage’s release."
    ],
    "outcomes": {
      "1": { "result": "They successfully save the hostage with a swift action and arrest the suspects." },
      "2": { "result": "The negotiation ends peacefully, and the hostage is released unharmed." }
    }
  }
},
{
  "id": "A006",
  "title": "The Undercover Mission",
  "characters": ["Dylan", "Sophia"],
  "sport_image": "action_undercover.jpg",
  "story_content": "Dylan and Sophia are undercover agents infiltrating a criminal syndicate. They must blend in with the criminal world while gathering vital intelligence to bring down the organization.",
  "choices": [
    "Gain the trust of the syndicate by taking on a dangerous job.",
    "Remain low-key and try to gather intel discreetly."
  ],
  "outcomes": {
    "1": {
      "result": "Dylan and Sophia take on the dangerous job, gaining the syndicate's trust and valuable intel. They plan their next move.",
      "next_choices": [
        "Follow up on the leads and bust the operation.",
        "Exit the syndicate before things get too risky."
      ]
    },
    "2": {
      "result": "Sophia gathers key intelligence but is caught suspiciously snooping around. They must find a way to escape.",
      "next_choices": [
        "Create a diversion to escape.",
        "Confront the syndicate members and fight back."
      ]
    }
  },
  "final_interaction": {
    "situation": "The syndicate is on high alert, and Dylan and Sophia need to make a crucial decision to stay alive.",
    "choices": [
      "Initiate a full raid on the syndicate's hideout.",
      "Escape with the intel and wait for backup."
    ],
    "outcomes": {
      "1": { "result": "They successfully raid the hideout, taking down the syndicate and completing the mission." },
      "2": { "result": "They escape with the intel, but the syndicate remains a threat for now." }
    }
  }
},
{
  "id": "A007",
  "title": "The Chase Through the City",
  "characters": ["Jake", "Maya"],
  "sport_image": "action_chase.jpg",
  "story_content": "Jake and Maya are hot on the trail of a fugitive who has stolen sensitive data from their agency. The fugitive is running through the city, and it's up to Jake and Maya to catch them.",
  "choices": [
    "Cut through the alleyways to get ahead of the fugitive.",
    "Stay on the main roads and keep the fugitive in sight."
  ],
  "outcomes": {
    "1": {
      "result": "Jake and Maya take a shortcut through the alleys and corner the fugitive in an abandoned warehouse. They close in for the capture.",
      "next_choices": [
        "Surround the fugitive to prevent escape.",
        "Rush in to apprehend them quickly."
      ]
    },
    "2": {
      "result": "Jake and Maya stay on the main roads, but the fugitive takes a turn and vanishes into a crowded area. They must track them down again.",
      "next_choices": [
        "Ask for helicopter support to scan the area.",
        "Follow the fugitive on foot, hoping to catch up."
      ]
    }
  },
  "final_interaction": {
    "situation": "The fugitive is cornered but pulls a weapon. Jake and Maya need to act fast.",
    "choices": [
      "Disarm the fugitive and make the arrest.",
      "Use non-lethal force to subdue the fugitive."
    ],
    "outcomes": {
      "1": { "result": "They successfully disarm and arrest the fugitive, recovering the stolen data." },
      "2": { "result": "They subdue the fugitive, securing the data and preventing further harm." }
    }
  }
},
{
  "id": "A008",
  "title": "The Jungle Escape",
  "characters": ["Tom", "Lara"],
  "sport_image": "action_jungle.jpg",
  "story_content": "Tom and Lara are stranded in a jungle after a plane crash. With limited supplies and wild animals lurking, they must find a way to escape.",
  "choices": [
    "Build a raft and navigate down the river.",
    "Climb to the highest point and signal for rescue."
  ],
  "outcomes": {
    "1": {
      "result": "Tom and Lara build a raft and survive the dangerous river journey, eventually finding their way out of the jungle.",
      "next_choices": [
        "Search for the crash site and salvage any gear.",
        "Look for signs of civilization."
      ]
    },
    "2": {
      "result": "They climb to the top of a hill and signal for rescue. They survive the night, waiting for a rescue team to arrive.",
      "next_choices": [
        "Stay close to the signal area to ensure rescue.",
        "Search for food and shelter while they wait."
      ]
    }
  },
  "final_interaction": {
    "situation": "Tom and Lara are nearing the edge of the jungle, but they encounter a dangerous animal on their path.",
    "choices": [
      "Use weapons or tools to scare the animal away.",
      "Create a distraction to make their escape."
    ],
    "outcomes": {
      "1": { "result": "They manage to scare off the animal and continue their journey to safety." },
      "2": { "result": "They successfully create a distraction and escape the animal, making it to safety." }
    }
  }
},
{
  "id": "A009",
  "title": "The Abandoned Prison",
  "characters": ["Leo", "Riley"],
  "sport_image": "action_prison.jpg",
  "story_content": "Leo and Riley are tasked with investigating an abandoned prison that has been taken over by a dangerous gang. They need to figure out how to infiltrate the prison and take down the gang.",
  "choices": [
    "Infiltrate through the underground tunnels.",
    "Climb the outer walls and enter from the top."
  ],
  "outcomes": {
    "1": {
      "result": "Leo and Riley sneak through the tunnels, avoiding detection, and manage to take down the gang's leader in a surprise attack.",
      "next_choices": [
        "Rescue any remaining prisoners.",
        "Escape the prison before reinforcements arrive."
      ]
    },
    "2": {
      "result": "They scale the prison walls and enter from the top, but the gang is ready for them. A fierce gunfight ensues.",
      "next_choices": [
        "Push forward to take control of the prison.",
        "Regroup and plan their next move."
      ]
    }
  },
  "final_interaction": {
    "situation": "Leo and Riley have eliminated most of the gang, but the final boss is hiding.",
    "choices": [
      "Search the building systematically.",
      "Create a trap and wait for the boss to come to them."
    ],
    "outcomes": {
      "1": { "result": "They find the boss and neutralize the threat." },
      "2": { "result": "They set a trap and capture the boss, ending the gang's reign." }
    }
  }
},
{
  "id": "A010",
  "title": "The Warehouse Heist",
  "characters": ["Mark", "Jade"],
  "sport_image": "action_heist.jpg",
  "story_content": "Mark and Jade are part of a team tasked with infiltrating a high-security warehouse to steal valuable technology. They must decide how to enter without triggering alarms.",
  "choices": [
    "Use disguises to blend in with the workers.",
    "Sneak in through the ventilation system."
  ],
  "outcomes": {
    "1": {
      "result": "They manage to blend in and reach the tech without raising suspicion, but time is running out.",
      "next_choices": [
        "Escape immediately with the technology.",
        "Search the warehouse for more valuable items."
      ]
    },
    "2": {
      "result": "They crawl through the tight ventilation system, successfully bypassing the security guards. They reach the tech storage area undetected.",
      "next_choices": [
        "Deactivate the security system and steal the tech.",
        "Find a hidden escape route to avoid the guards."
      ]
    }
  },
  "final_interaction": {
    "situation": "With the tech secured, Mark and Jade are almost out of the warehouse. However, alarms suddenly begin to blare as security discovers their presence.",
    "choices": [
      "Run towards the back exit, dodging guards.",
      "Hide and wait for the alarm to stop before making a quiet escape."
    ],
    "outcomes": {
      "1": { "result": "They sprint towards the back exit, managing to outrun the guards and make a dramatic escape with the tech." },
      "2": { "result": "They hide in the shadows, and once the alarm stops, they sneak out without being noticed, completing the heist." }
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