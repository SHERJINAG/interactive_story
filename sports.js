// sports.js

const sportsStories = [
  {
    id: "S001",
    title: "The Tennis Showdown",
    characters: ["Sophie", "Clara"],
    sport_image: "tennis.jpg", // Image must be available in the images folder
    story_content: `Sophie, a young tennis prodigy, had reached the finals of the national tennis tournament.`,
    choices: [
      "Go for a powerful ace down the middle.",
      "Serve a slower ball to set up a rally."
    ],
    outcomes: {
      "1": {
        result: "Sophie’s serve is too powerful for Clara to return, and she wins the point.",
        next_choices: [
          "Step into the court to attack Clara’s serve.",
          "Play defensively and focus on returning the ball."
        ]
      },
      "2": {
        result: "Sophie engages Clara in a long rally, testing her endurance.",
        next_choices: [
          "Step into the court to attack Clara’s serve.",
          "Play defensively and focus on returning the ball."
        ]
      }
    },
    final_interaction: {
      situation: "Sophie has match point and can win the game.",
      choices: [
        "Smash the ball for a dramatic finish.",
        "Place a soft volley into the corner."
      ],
      outcomes: {
        "1": { result: "Sophie smashes the ball, and the crowd erupts with excitement!" },
        "2": { result: "Sophie places a soft volley into the corner, securing a calm yet impressive victory." }
      }
    }
  },
{
  "id": "S002",
  "title": "The Soccer Penalty Shootout",
  "characters": ["Lena", "Nina"],
  "sport_image": "soccer.jpg", // Image must be available in the images folder
  "story_content": "Lena and Nina are the two best players on their soccer teams, and their match has ended in a draw. Now, it’s down to a penalty shootout to decide the winner. Lena steps up to take the first penalty, while Nina prepares as goalkeeper.",
  "choices": [
    "Aim for the bottom left corner.",
    "Shoot straight down the middle."
  ],
  "outcomes": {
    "1": {
      "result": "Lena’s shot is well-placed, but Nina dives and makes an incredible save.",
      "next_choices": [
        "Try to shoot more accurately next time.",
        "Focus on reading Nina’s movements to anticipate her dive."
      ]
    },
    "2": {
      "result": "Lena shoots straight down the middle, and Nina is caught off guard. Lena scores!",
      "next_choices": [
        "Celebrate the goal and keep the momentum going.",
        "Stay focused and prepare for the next penalty."
      ]
    }
  },
  "final_interaction": {
    "situation": "Nina now has a chance to take the final penalty to win the match. Lena stands in goal, determined to block it.",
    "choices": [
      "Jump to the left and try to stop Nina’s shot.",
      "Stay in the center and block the ball if Nina shoots straight."
    ],
    "outcomes": {
      "1": { "result": "Lena jumps to the left, making an epic save and securing the victory for her team!" },
      "2": { "result": "Nina shoots straight down the middle, and Lena dives to make a crucial save. Her team wins the shootout!" }
    }
  }
},
{
  "id": "S003",
  "title": "The Football Clash",
  "characters": ["Daniel", "Marcus"],
  "sport_image": "football.jpg", // Image must be available in the images folder
  "story_content": "Daniel, the star forward, is in a heated match against Marcus, the rival team's goalkeeper. The game is nearing its final moments with the score tied, and Daniel has a chance to score the game-winning goal from a penalty kick.",
  "choices": [
    "Aim for the top left corner of the goal.",
    "Shoot low to the bottom right corner."
  ],
  "outcomes": {
    "1": {
      "result": "Daniel’s shot is aimed perfectly, but Marcus leaps and makes an incredible save.",
      "next_choices": [
        "Press forward and try to recover the rebound.",
        "Stay back and help defend in case of a counter-attack."
      ]
    },
    "2": {
      "result": "Daniel shoots low and to the right, but Marcus dives and misses! The ball hits the net, and Daniel scores!",
      "next_choices": [
        "Celebrate the goal and hype up your teammates.",
        "Focus on defending the last few minutes of the game."
      ]
    }
  },
  "final_interaction": {
    "situation": "The last minute of the game is here. Marcus has possession and is trying to orchestrate a final attack.",
    "choices": [
      "Intercept Marcus’s pass and launch a counterattack.",
      "Play safe and cover the defensive line."
    ],
    "outcomes": {
      "1": { "result": "Daniel intercepts Marcus’s pass, setting up a counterattack that leads to a victory!" },
      "2": { "result": "Daniel focuses on defense, and the final whistle blows. His team wins after holding Marcus’s team off!" }
    }
  }
},
{
  "id": "S004",
  "title": "The Basketball Rivalry",
  "characters": ["Jake", "Chris"],
  "sport_image": "basketball.jpg", // Image must be available in the images folder
  "story_content": "Jake and Chris, two high school basketball stars, have faced each other in countless games. This time, it’s the championship final, and everything is on the line. With the clock winding down, the score is tied, and Jake has possession of the ball.",
  "choices": [
    "Drive to the basket and go for the layup.",
    "Pass the ball to a teammate for a better shot."
  ],
  "outcomes": {
    "1": {
      "result": "Jake powers through the defense and scores a layup, giving his team a slim lead.",
      "next_choices": [
        "Focus on defense and prevent Chris from scoring.",
        "Go for a steal to secure the win."
      ]
    },
    "2": {
      "result": "Jake passes to his teammate, who nails a three-pointer, putting the team in the lead.",
      "next_choices": [
        "Help guard the perimeter and stop Chris from shooting.",
        "Stay near the basket to secure the rebound."
      ]
    }
  },
  "final_interaction": {
    "situation": "With 10 seconds left, Chris has the ball and is looking for the winning shot.",
    "choices": [
      "Block Chris’s shot and prevent the basket.",
      "Allow Chris a shot and hope for a miss."
    ],
    "outcomes": {
      "1": { "result": "Jake leaps up, blocking Chris’s shot, and the crowd goes wild as the buzzer sounds!" },
      "2": { "result": "Chris takes the shot, but it misses as time expires. Jake’s team wins the championship!" }
    }
  }
},
{
  "id": "S005",
  "title": "The Baseball Showdown",
  "characters": ["Ethan", "Carlos"],
  "sport_image": "baseball.jpg", // Image must be available in the images folder
  "story_content": "Ethan, a rising star pitcher, faces Carlos, a seasoned slugger, in the championship game. With the bases loaded and two outs, it’s up to Ethan to make the final pitch and win the game.",
  "choices": [
    "Throw a fastball high and inside.",
    "Pitch a curveball low and away."
  ],
  "outcomes": {
    "1": {
      "result": "Ethan throws a fastball, but Carlos connects, sending the ball into deep center field. The crowd holds its breath as the fielder makes the catch, and Ethan wins the game!",
      "next_choices": [
        "Celebrate with teammates after the big win.",
        "Focus on the next game, knowing the season is still on."
      ]
    },
    "2": {
      "result": "Ethan pitches a perfect curveball, and Carlos swings and misses! The crowd erupts as Ethan secures the final strikeout.",
      "next_choices": [
        "Celebrate the victory with a high-five.",
        "Prepare for the next round of the playoffs."
      ]
    }
  },
  "final_interaction": {
    "situation": "The last batter of the game steps up to the plate. Ethan is one strike away from the championship.",
    "choices": [
      "Throw a slider to keep the batter off balance.",
      "Go with the same fastball that worked earlier."
    ],
    "outcomes": {
      "1": { "result": "Ethan throws the slider, and the batter swings and misses. The team celebrates their championship victory!" },
      "2": { "result": "The batter connects with the fastball, but the outfielder catches it, ending the game with Ethan’s team as champions!" }
    }
  }
},
{
  "id": "S006",
  "title": "The Ice Hockey Final",
  "characters": ["Ryan", "Jack"],
  "sport_image": "hockey.jpg", // Image must be available in the images folder
  "story_content": "Ryan, a young and talented forward, faces Jack, the rival team's star defenseman, in the final period of a tied ice hockey game. With only 3 minutes left, Ryan has the puck and a chance to score the game-winning goal.",
  "choices": [
    "Take a slapshot from the blue line.",
    "Attempt to skate around Jack and go for a close shot."
  ],
  "outcomes": {
    "1": {
      "result": "Ryan winds up and fires a slapshot, but Jack blocks it with his body, saving the goal.",
      "next_choices": [
        "Stay aggressive and fight for the puck.",
        "Position yourself for a rebound chance."
      ]
    },
    "2": {
      "result": "Ryan skates around Jack, and with a quick deke, he beats the goalie and scores a beautiful goal!",
      "next_choices": [
        "Celebrate the goal with your teammates.",
        "Focus on defending the last few minutes of the game."
      ]
    }
  },
  "final_interaction": {
    "situation": "The opposing team pulls their goalie for an extra attacker. Ryan must help defend the goal to secure the win.",
    "choices": [
      "Block any shots and clear the puck.",
      "Get in the way of their passing lanes."
    ],
    "outcomes": {
      "1": { "result": "Ryan blocks a crucial shot, and the puck is cleared down the ice. The final whistle blows, and Ryan’s team wins the championship!" },
      "2": { "result": "Ryan intercepts a pass and makes a key play to stop the attack. The team holds on for the victory!" }
    }
  }
},
{
  "id": "S007",
  "title": "The Track and Field Triumph",
  "characters": ["Olivia", "Hannah"],
  "sport_image": "track.jpg", // Image must be available in the images folder
  "story_content": "Olivia and Hannah are fierce competitors in the 400m race. With only 50 meters to go, Olivia is slightly ahead but is beginning to tire. Hannah is closing in fast and has the chance to take the lead.",
  "choices": [
    "Push harder and sprint to the finish.",
    "Conserve energy and maintain your pace."
  ],
  "outcomes": {
    "1": {
      "result": "Olivia digs deep and sprints to the finish line, crossing just ahead of Hannah to win the race!",
      "next_choices": [
        "Celebrate the victory with your coach.",
        "Prepare for the upcoming relay race."
      ]
    },
    "2": {
      "result": "Olivia maintains her pace, but Hannah overtakes her in the final meters and wins the race.",
      "next_choices": [
        "Congratulate Hannah on her win.",
        "Regroup and focus on the relay race ahead."
      ]
    }
  },
  "final_interaction": {
    "situation": "The final stretch is here, and the race is neck-and-neck. It’s anyone’s win.",
    "choices": [
      "Give everything you have for the final burst of speed.",
      "Keep your rhythm and trust your training."
    ],
    "outcomes": {
      "1": { "result": "Olivia surges ahead and finishes strong, clinching the gold medal!" },
      "2": { "result": "Olivia maintains a steady pace and finishes in second, but she’s proud of her performance." }
    }
  }
},
{
  "id": "S008",
  "title": "The Golf Championship",
  "characters": ["Tom", "Liam"],
  "sport_image": "golf.jpg", // Image must be available in the images folder
  "story_content": "Tom, an experienced golfer, faces Liam, a young prodigy, in the final round of a major golf tournament. With the score tied and one hole to play, Tom has a chance to sink the final putt and secure the championship.",
  "choices": [
    "Go for the aggressive long putt.",
    "Play it safe with a shorter, more controlled putt."
  ],
  "outcomes": {
    "1": {
      "result": "Tom lines up and sinks the long putt, winning the championship with a dramatic finish!",
      "next_choices": [
        "Celebrate the victory with your caddie.",
        "Prepare for the press conference."
      ]
    },
    "2": {
      "result": "Tom plays it safe and takes the shorter putt, securing the win with a steady, measured approach.",
      "next_choices": [
        "Thank your supporters for their encouragement.",
        "Plan your next tournament schedule."
      ]
    }
  },
  "final_interaction": {
    "situation": "Liam has one last chance to tie the game with a challenging putt.",
    "choices": [
      "Make the difficult putt to force a playoff.",
      "Opt for a safer shot and try to make up for it in the next tournament."
    ],
    "outcomes": {
      "1": { "result": "Liam sinks the putt, forcing a sudden-death playoff. The tension is palpable!" },
      "2": { "result": "Liam misses the putt, and Tom’s steady play leads to his victory." }
    }
  }
},
{
  "id": "S009",
  "title": "The Boxing Match",
  "characters": ["Victor", "Sam"],
  "sport_image": "boxing.jpg", // Image must be available in the images folder
  "story_content": "Victor and Sam are in the final round of a championship boxing match. The fight has been evenly matched, and both boxers are fatigued. Sam is known for his powerful right hook, but Victor’s quick footwork has kept him out of harm’s way. It’s time for the final blow.",
  "choices": [
    "Go for a left jab to set up a right hook.",
    "Step back and wait for Sam to make a mistake."
  ],
  "outcomes": {
    "1": {
      "result": "Victor lands a perfect left jab, and then with precision, he delivers a powerful right hook, knocking Sam out!",
      "next_choices": [
        "Celebrate with your trainer after the victory.",
        "Start planning for the next fight."
      ]
    },
    "2": {
      "result": "Victor steps back, but Sam catches him with a wild swing, landing a heavy punch that staggers him.",
      "next_choices": [
        "Recover quickly and fight back.",
        "Stay defensive and wait for the bell to end the round."
      ]
    }
  },
  "final_interaction": {
    "situation": "The bell rings, and both boxers are exhausted. The judge will decide the winner based on points.",
    "choices": [
      "Be confident in your performance and wait for the result.",
      "Mentally prepare for a potential rematch if you lose."
    ],
    "outcomes": {
      "1": { "result": "Victor’s controlled approach throughout the fight earns him the judges’ decision and the title!" },
      "2": { "result": "Victor’s defense in the final round wasn’t enough to win the judges’ favor. Sam wins by points." }
    }
  }
},
{
  "id": "S010",
  "title": "The Cycling Race",
  "characters": ["Alice", "Ben"],
  "sport_image": "cycling.jpg", // Image must be available in the images folder
  "story_content": "Alice and Ben, two elite cyclists, are in the final stretch of a grueling race. The route is tough, with a steep incline just ahead. Ben has a slight lead, but Alice is known for her strong uphill climbing abilities.",
  "choices": [
    "Attack the climb with full power and try to pass Ben.",
    "Conserve energy and pace yourself to avoid burning out."
  ],
  "outcomes": {
    "1": {
      "result": "Alice surges ahead on the incline, passing Ben and taking the lead with a powerful burst.",
      "next_choices": [
        "Push hard to maintain the lead.",
        "Hold back a bit to recover for the final sprint."
      ]
    },
    "2": {
      "result": "Alice maintains a steady pace, but Ben pushes ahead and extends his lead during the climb.",
      "next_choices": [
        "Push for a final sprint to catch up.",
        "Accept the gap and focus on maintaining a solid pace to the finish."
      ]
    }
  },
  "final_interaction": {
    "situation": "The final sprint to the finish line is here. Alice has one last chance to catch Ben.",
    "choices": [
      "Go all-out for a sprint to pass Ben.",
      "Play it safe and finish with a strong but controlled pace."
    ],
    "outcomes": {
      "1": { "result": "Alice gives everything she has in the final sprint and passes Ben to win the race!" },
      "2": { "result": "Alice finishes strong but falls just short of passing Ben, finishing second in the race." }
    }
  }
},
{
  "id": "S011",
  "title": "The Cricket Match",
  "characters": ["Rahul", "Arjun"],
  "sport_image": "cricket.jpg", // Image must be available in the images folder
  "story_content": "Rahul and Arjun are in the final over of a tense cricket match. The game is tied, and Rahul is the last batter left. He needs to score 6 runs from the last ball to win the match for his team.",
  "choices": [
    "Go for a big shot over mid-wicket.",
    "Play it safe and try for a single to keep the strike."
  ],
  "outcomes": {
    "1": {
      "result": "Rahul swings hard and connects with the ball, sending it flying over mid-wicket for a stunning six! The crowd erupts in excitement as Rahul wins the game.",
      "next_choices": [
        "Celebrate with teammates on the field.",
        "Get ready for the post-match interview."
      ]
    },
    "2": {
      "result": "Rahul plays a controlled shot and takes a single, but the match ends in a tie as the opposing team wins by the number of boundaries hit.",
      "next_choices": [
        "Congratulate the opposing team.",
        "Focus on the next match and the team's strategy."
      ]
    }
  },
  "final_interaction": {
    "situation": "With the match on the line, the last ball is delivered. Rahul has to make a decision.",
    "choices": [
      "Go for a powerful pull shot to finish the game.",
      "Look for a single and hope the next batter can do the rest."
    ],
    "outcomes": {
      "1": { "result": "Rahul hits the pull shot for a six and wins the match in spectacular fashion!" },
      "2": { "result": "Rahul takes a single, but the match ends in a tie, and his team loses by wickets." }
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
