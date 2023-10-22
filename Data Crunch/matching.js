function calculateSimilarity(user1, user2) {
    let score = 0;
  
    if (user1.name === user2.name) {
      score += 1;
    }
    if (user1.age === user2.age) {
      score += 1;
    }
    if (user1.department === user2.department) {
      score += 1;
    }
  
    return score;
  }
  
  function findUniquePairs(users) {
    const uniqueUserPairs = [];
    const usedUserIndexes = new Set();
  
    // Separate users into mentors and mentees.
    const mentors = users.filter((user) => user.mentor === "Yes");
    const mentees = users.filter((user) => !user.mentor === "No");
  
    for (let i = 0; i < mentors.length; i++) {
      for (let j = 0; j < mentees.length; j++) {
        const mentor = mentors[i];
        const mentee = mentees[j];
        const similarityScore = calculateSimilarity(mentor, mentee);
  
        const userPairKey = `${mentor.id}-${mentee.id}`;
        const reverseUserPairKey = `${mentee.id}-${mentor.id}`;
  
        if (
          !usedUserIndexes.has(i) &&
          !usedUserIndexes.has(j) &&
          !uniqueUserPairs.includes(userPairKey) &&
          !uniqueUserPairs.includes(reverseUserPairKey)
        ) {
          uniqueUserPairs.push(userPairKey);
          usedUserIndexes.add(i);
          usedUserIndexes.add(j);
        }
      }
    }
  
    return uniqueUserPairs;
  }
  